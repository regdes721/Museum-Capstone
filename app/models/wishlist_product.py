from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

# cart_products = db.Table(
#     "cart_products",
#     db.Model.metadata,
#     db.Column('id', db.Integer, primary_key=True),
#     db.Column(
#         "cart_id", db.Integer, db.ForeignKey(add_prefix_for_prod("carts.id"))
#     ),
#     db.Column(
#         "product_id", db.Integer, db.ForeignKey(add_prefix_for_prod("products.id"))
#     ),
#     db.Column('quantity', db.Integer)
# )
# if environment == "production":
#     cart_products.schema = SCHEMA

# from .db import db, environment, SCHEMA, add_prefix_for_prod
# from werkzeug.security import generate_password_hash, check_password_hash
# from flask_login import UserMixin

class WishlistProduct(db.Model, UserMixin):
    __tablename__ = 'wishlist_products'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    wishlist_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('wishlists.id')))
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')))
    quantity = db.Column(db.Integer)

    def to_dict(self):
        return {
            'id': self.id,
            'wishlist_id': self.wishlist_id,
            'product_id': self.product_id,
            'quantity': self.quantity,
        }
