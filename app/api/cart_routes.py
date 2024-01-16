from flask import Blueprint, session, jsonify, request
from flask_login import login_required
from app.models import db, Cart, Product, cart_products
from ..forms import ProductForm
from ..aws import (upload_file_to_s3, get_unique_filename, remove_file_from_s3)

cart_routes = Blueprint('carts', __name__)

@cart_routes.route('/')
@login_required
def cart():
    """
    Query for a single cart that belongs to the current user and returns it in a dictionary
    """
    cart = Cart.query.filter(Cart.user_id == int(session['_user_id'])).first()
    if cart:
        return cart.to_dict()
    if not cart:
        return {'errors': {'message': "Cart couldn't be found"}}

@cart_routes.route('', methods=['POST'])
@login_required
def create_cart():
    new_cart = Cart(
        user_id = int(session['_user_id'])
    )
    db.session.add(new_cart)
    db.session.commit()
    return new_cart.to_dict()

@cart_routes.route('/products/<int:product_id>', methods=['POST'])
def add_to_cart(product_id):
    product = Product.query.get(product_id)
    cart = Cart.query.filter(Cart.user_id == int(session['_user_id'])).first()
    if not cart:
        return {'errors': {'message': "Cart couldn't be found"}}
    if not product:
        return {'errors': {'message': "Product couldn't be found"}}
    if product.to_dict()['quantity'] <= 0:
        return {'errors': {'message': "Product quantity cannot be less than or equal to 0"}}

    existing_cart_item = db.session.query(cart_products).filter_by(cart_id=cart.id, product_id=product_id).first()
    if existing_cart_item:
        db.session.execute(cart_products.update().where(cart_products.c.id == existing_cart_item.id).values(quantity=existing_cart_item.quantity + 1))
    else:
        db.session.execute(cart_products.insert().values(cart_id=cart.id, product_id=product_id, quantity = 1))
    db.session.commit()
    return 'Item added to cart successfully'


@cart_routes.route('/products/<int:product_id>', methods=['PUT'])
def update_cart(product_id):
    product = Product.query.get(product_id)
    cart = Cart.query.filter(Cart.user_id == int(session['_user_id'])).first()
    # How to query cart_products table to see if product is already in the cart?
    # How to add quantity form to this?
    db.session.execute(cart_products.update().where(cart_products.c.id == cart.id).values(quantity=new_quantity))
    db.session.commit()
    return 'Cart item updated successfully'

@cart_routes.route('/products/<int:product_id>', methods=['DELETE'])
def delete_cart_item(product_id):
    product = Product.query.get(product_id)
    cart = Cart.query.filter(Cart.user_id == int(session['_user_id'])).first()
    # How to query cart_products table to see if product is already in the cart?
    # confused about the line below - does it work? Is there something better???
    db.session.execute(cart_products.delete().where(cart_products.c.id == cart_item.id))
    db.session.commit()
    return 'Cart item deleted successfully'

@cart_routes.route('/', methods=['DELETE'])
def delete_cart():
    cart = Cart.query.filter(Cart.user_id == int(session['_user_id'])).first()
    if cart:
        db.session.delete(cart)
        db.session.commit()
        return
    if not cart:
        return {'errors': {'message': "Cart couldn't be found"}}
