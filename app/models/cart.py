from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .cart_product import CartProduct


class Cart(db.Model, UserMixin):
    __tablename__ = 'carts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)


    # relationship attributes
    user = db.relationship("User", back_populates="cart")
    products = db.relationship(
        "Product",
        secondary=CartProduct.__table__,
        back_populates="cart"
    )
    # products = db.relationship(
    #     "Product",
    #     secondary=CartProduct,
    #     back_populates="cart"
    # )

    def to_dict(self):
        dictionary = {
            'id': self.id,
            'user_id': self.user_id,
            'products': [product.to_dict() for product in self.products]
        }

        return dictionary
