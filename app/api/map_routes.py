import os
from flask import Blueprint, session, current_app, jsonify, request
from flask_login import login_required

map_routes = Blueprint('maps', __name__)

@map_routes.route('/key', methods=['POST'])
def key():
    return jsonify({'googleMapsAPIKey': current_app.config['GOOGLE_MAPS_API_KEY']})
