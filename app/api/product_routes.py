from flask import Blueprint, session, jsonify, request
from flask_login import login_required
from app.models import db, Product

product_routes = Blueprint('products', __name__)

@product_routes.route('/')
def products():
    """
    Query for all products and returns them in a list of product dictionaries
    """
    products = Product.query.all()
    return {'products': [product.to_dict() for product in products]}
