from flask import Blueprint, session, jsonify, request
from flask_login import login_required
from app.models import db, Wishlist, Product, WishlistProduct
from ..aws import (upload_file_to_s3, get_unique_filename, remove_file_from_s3)

wishlist_routes = Blueprint('wishlists', __name__)

@wishlist_routes.route('/')
@login_required
def wishlist():
    """
    Query for a single wishlist that belongs to the current user and returns it in a dictionary
    """
    wishlist = Wishlist.query.filter(Wishlist.user_id == int(session['_user_id'])).first()
    if wishlist:
        return wishlist.to_dict()
    if not wishlist:
        return {'errors': {'message': "Wishlist couldn't be found"}}, 400

@wishlist_routes.route('/wishlist_products')
@login_required
def wishlist_products():
    wishlist = Wishlist.query.filter(Wishlist.user_id == int(session['_user_id'])).first()
    if not wishlist:
        return {'errors': {'message': "Wishlist couldn't be found"}}

    # existing_cart_products = db.session.query(cart_products).filter(cart_products.c.cart_id == cart.id).all()
    # if not existing_cart_products:
    #     return {'errors': {'message': "Product couldn't be found in your cart"}}
    # else:
    #     result_list = [{'user_id': record.user_id, 'product_id': record.product_id, 'quantity': record.quantity} for record in existing_cart_products]
    #     return {'cart_products': result_list}

    existing_wishlist_products = WishlistProduct.query.filter(WishlistProduct.wishlist_id == wishlist.id).all()
    if not existing_wishlist_products:
        return {'errors': {'message': "Product couldn't be found in your wishlist"}}
    else:
        result_list = [record.to_dict() for record in existing_wishlist_products]
        return result_list

@wishlist_routes.route('', methods=['POST'])
@login_required
def create_wishlist():
    new_wishlist = Wishlist(
        user_id = int(session['_user_id'])
    )
    db.session.add(new_wishlist)
    db.session.commit()
    return new_wishlist.to_dict()

@wishlist_routes.route('/products/<int:product_id>', methods=['POST'])
def add_to_wishlist(product_id):
    product = Product.query.get(product_id)
    wishlist = Wishlist.query.filter(Wishlist.user_id == int(session['_user_id'])).first()
    if not wishlist:
        return {'errors': {'message': "Wishlist couldn't be found"}}
    if not product:
        return {'errors': {'message': "Product couldn't be found"}}
    if product.to_dict()['quantity'] <= 0:
        return {'errors': {'message': "Product quantity cannot be less than or equal to 0"}}

    existing_wishlist_item = WishlistProduct.query.filter_by(wishlist_id=wishlist.id, product_id=product_id).first()
    if existing_wishlist_item:
        return {'message': 'Item already in wishlist'}
    else:
        new_wishlist_item = WishlistProduct(wishlist_id=wishlist.id, product_id=product_id, quantity=1)
        db.session.add(new_wishlist_item)
    db.session.commit()
    return {'message': 'Item added to wishlist successfully'}

@wishlist_routes.route('/products/<int:product_id>', methods=['DELETE'])
def delete_wishlist_item(product_id):
    product = Product.query.get(product_id)
    wishlist = Wishlist.query.filter(Wishlist.user_id == int(session['_user_id'])).first()
    if not wishlist:
        return {'errors': {'message': "Wishlist couldn't be found"}}
    if not product:
        return {'errors': {'message': "Product couldn't be found"}}

    existing_wishlist_item = WishlistProduct.query.filter_by(wishlist_id=wishlist.id, product_id=product_id).first()
    if not existing_wishlist_item:
        return {'errors': {'message': "Product couldn't be found in your wishlist"}}

    db.session.delete(existing_wishlist_item)
    db.session.commit()
    return {'message': 'Wishlist item deleted successfully'}

@wishlist_routes.route('', methods=['DELETE'])
def delete_wishlist():
    wishlist = Wishlist.query.filter(Wishlist.user_id == int(session['_user_id'])).first()
    if wishlist:
        db.session.delete(wishlist)
        db.session.commit()
        return {'message': 'Wishlist deleted successfully'}
    if not wishlist:
        return {'errors': {'message': "Wishlist couldn't be found"}}
