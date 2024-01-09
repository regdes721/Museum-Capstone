from flask import Blueprint, session, jsonify, request
from flask_login import login_required
from app.models import db, Product, ProductImage
from ..forms import ProductForm

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
    return {'errors': form.errors}, 401
