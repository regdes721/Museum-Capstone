from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Museum

museum_routes = Blueprint('museums', __name__)


@museum_routes.route('/')
def museums():
    """
    Query for all museums and returns them in a list of museum dictionaries
    """
    museums = Museum.query.all()
    return {'museums': [museum.to_dict() for museum in museums]}

@museum_routes.route('/<int:id>')
def museum(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    museum = Museum.query.get(id)
    return museum.to_dict()
