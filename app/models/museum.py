from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class Museum(db.Model, UserMixin):
    __tablename__ = 'museums'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    image_url = db.Column(db.String, nullable=False)
    store_name = db.Column(db.String, nullable=False)
    store_address = db.Column(db.String, nullable=False)
    phone_number = db.Column(db.String)
    email = db.Column(db.String(255), unique=True)
    museum_website = db.Column(db.String, nullable=False)

    # relationship attributes
    user = db.relationship("User", back_populates="museums_owner")

    def to_dict(self):
        return {
            'id': self.id,
            'owner_id': self.owner_id,
            'name': self.name,
            'description': self.description,
            'image_url': self.image_url,
            'store_name': self.store_name,
            'store_address': self.store_address,
            'phone_number': self.phone_number,
            'email': self.email,
            'museum_website': self.museum_website
        }
