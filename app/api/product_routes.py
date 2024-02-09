from flask import Blueprint, session, jsonify, request
from flask_login import login_required
from app.models import db, Product, ProductImage
from ..forms import ProductForm
from ..aws import (upload_file_to_s3, get_unique_filename, remove_file_from_s3)

product_routes = Blueprint('products', __name__)

@product_routes.route('/')
def products():
    """
    Query for all products and returns them in a list of product dictionaries
    """
    products = Product.query.all()
    return {'products': [product.to_dict() for product in products]}

@product_routes.route('/<int:productId>')
def product(productId):
    """
    Query for a product by id and returns that product in a dictionary
    """
    product = Product.query.get(productId)
    return product.to_dict(museum=True)

@product_routes.route('', methods=['POST'])
@login_required
def create_product():
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_product = Product(
            museum_id = data["museum_id"],
            name = data["name"],
            description = data["description"],
            price = data["price"],
            category = data["category"],
            dimensions = data["dimensions"],
            quantity = data["quantity"]
        )
        db.session.add(new_product)
        db.session.commit()
        new_product_image = ProductImage(
            product_id = new_product.id,
            image_url = data["image_url"],
            preview = True
        )
        db.session.add(new_product_image)
        db.session.commit()
        return new_product.to_dict()
    return {'errors': form.errors}, 400

@product_routes.route('/<int:productId>', methods=['PUT'])
@login_required
def edit_product(productId):
    form = ProductForm()
    product = Product.query.get(productId)
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit() and int(session['_user_id']) == product.to_dict(museum=True)['museum']['owner_id']:
        old_product_image = ProductImage.query.filter(ProductImage.product_id == product.id).first()
        # print(old_product_image, "------------------------------------")
        old_image_url = old_product_image.image_url
        # print("!!!!!!!!!!!!!!", old_image_url)
        data = form.data
        product.museum_id = data['museum_id']
        product.name = data['name']
        product.description = data['description']
        product.price = data['price']
        product.category = data['category']
        product.dimensions = data['dimensions']
        product.quantity = data['quantity']
        db.session.commit()
        if old_image_url != data['image_url']:
            old_product_image.image_url = data["image_url"]
            # new_product_image = ProductImage(
            # product_id = product.id,
            # image_url = data["image_url"],
            # preview = True
            # )
            # db.session.add(new_product_image)
            # db.session.commit()
            # db.session.delete(old_product_image)
            db.session.commit()
            remove_file_from_s3(old_image_url)
        return product.to_dict()
    elif not form.validate_on_submit():
        return {'errors': form.errors}, 400
    return {'errors': {'message': 'Unauthorized'}}, 403




@product_routes.route('/<int:productId>', methods=['DELETE'])
@login_required
def delete_product(productId):
    product = Product.query.get(productId)
    if product and int(session['_user_id']) == product.to_dict(museum=True)['museum']['owner_id']:
        product_image = product.product_images[0].image_url
        db.session.delete(product)
        db.session.commit()
        remove_file_from_s3(product_image)
    if not product:
        return {'errors': {'message': "Product couldn't be found"}}
    return {'errors': {'message': 'Unauthorized'}}, 403
