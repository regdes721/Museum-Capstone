from flask import Blueprint, session, jsonify, request
from flask_login import login_required

map_routes = Blueprint('maps', __name__)
