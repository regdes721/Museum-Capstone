from flask import Blueprint, session, jsonify
from flask_login import login_required
from app.models import db, Museum

museum_routes = Blueprint('museums', __name__)


@museum_routes.route('/')
def museums():
    """
    Query for all museums and returns them in a list of museum dictionaries
    """
    museums = Museum.query.all()
    return {'museums': [museum.to_dict() for museum in museums]}

@museum_routes.route('/<int:museumId>')
def museum(museumId):
    """
    Query for a user by id and returns that user in a dictionary
    """
    museum = Museum.query.get(museumId)
    return museum.to_dict()

@museum_routes.route('/<int:museumId>', methods=['DELETE'])
@login_required
def delete_museum(museumId):
    museum = Museum.query.get(museumId)
    if museum and int(session['_user_id']) == museum.to_dict()['owner_id']:
        db.session.delete(museum)
        db.session.commit()
        return {'message': 'Successfully deleted'}
    if not museum:
        return {'errors': {'message': "Musuem couldn't be found"}}
    return {'errors': {'message': 'Unauthorized'}}, 403
