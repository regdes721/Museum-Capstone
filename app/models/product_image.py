from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.sql import func

class ProductImage(db.Model, UserMixin):
    __tablename__ = 'product_images'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")), nullable=False)
    image_url = db.Column(db.String, nullable=False)
    preview = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), default=func.now())

    # relationship attributes
    product = db.relationship("Product", back_populates="product_images")

    def to_dict(self):
        return {
            'id': self.id,
            'product_id': self.product_id,
            'image_url': self.image_url,
            'preview': self.preview,
            'created_at': self.created_at
        }
