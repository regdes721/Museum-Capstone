from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .order_product import order_products


class Order(db.Model, UserMixin):
    __tablename__ = 'orders'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    order_address = db.Column(db.String, nullable=False)


    # relationship attributes
    user = db.relationship("User", back_populates="orders")
    products = db.relationship(
        "Product",
        secondary=order_products,
        back_populates="order"
    )

    def to_dict(self):
        dictionary = {
            'id': self.id,
            'user_id': self.user_id,
            'order_address': self.order_address
        }

        return dictionary
