from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .db import add_prefix_for_prod

cart_products = db.Table(
    "cart_products",
    db.Model.metadata,
    db.Column('id', db.Integer, primary_key=True),
    db.Column(
        "cart_id", db.Integer, db.ForeignKey(add_prefix_for_prod("carts.id"))
    ),
    db.Column(
        "product_id", db.Integer, db.ForeignKey(add_prefix_for_prod("products.id"))
    ),
    db.Column('quantity', db.Integer)
)
if environment == "production":
    cart_products.schema = SCHEMA
