from flask import Blueprint, session, jsonify, request
from flask_login import login_required
from app.models import db, Museum, Product
from ..forms import MuseumForm, ImageForm
from ..aws import (upload_file_to_s3, get_unique_filename, remove_file_from_s3)

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
    return museum.to_dict(products=True)

@museum_routes.route('', methods=['POST'])
@login_required
def create_museum():
    form = MuseumForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_museum = Museum(
            owner_id = int(session['_user_id']),
            name = data['name'],
            description = data['description'],
            image_url = data['image_url'],
            store_name = data['store_name'],
            store_address = data['store_address'],
            phone_number = data['phone_number'],
            email = data['email'],
            museum_website = data['museum_website']
        )
        db.session.add(new_museum)
        db.session.commit()
        return new_museum.to_dict()
    return {'errors': form.errors}, 401

@museum_routes.route("images", methods=["POST"])
def upload_image():
    form = ImageForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        image = form.data["image"]
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        print(upload)

        if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message (and we printed it above)
            return {"errors":[upload]}, 401

        url = upload["url"]
        return {"url": url}

    if form.errors:
        # print(form.errors)
        return {"errors": form.errors}, 401

@museum_routes.route('/<int:museumId>', methods=['PUT'])
@login_required
def edit_museum(museumId):
    form = MuseumForm()
    museum = Museum.query.get(museumId)
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit() and int(session['_user_id']) == museum.to_dict()['owner_id']:
        old_museum_image = museum.image_url
        data = form.data
        museum.name = data['name']
        museum.description = data['description']
        museum.image_url = data['image_url']
        museum.store_name = data['store_name']
        museum.store_address = data['store_address']
        museum.phone_number = data['phone_number']
        museum.email = data['email']
        museum.museum_website = data['museum_website']
        db.session.commit()
        if old_museum_image != data['image_url']:
            remove_file_from_s3(old_museum_image)
        return museum.to_dict()
    elif not form.validate_on_submit():
        return {'errors': form.errors}, 401
    return {'errors': {'message': 'Unauthorized'}}, 403


@museum_routes.route('/<int:museumId>', methods=['DELETE'])
@login_required
def delete_museum(museumId):
    museum = Museum.query.get(museumId)
    museum_products = Product.query.filter(Product.museum_id == museumId)
    print(museum_products, "--------------------")
    if museum and int(session['_user_id']) == museum.to_dict()['owner_id']:
        museum_image = museum.image_url
        for product in museum_products:
            print(product, "product ---------------- product")
            print(product.product_images, "product images")
            for image in product.product_images:
                print(image, "image")
                # delete from aws
                remove_file_from_s3(image.image_url)
        db.session.delete(museum)
        db.session.commit()
        remove_file_from_s3(museum_image)
        return {'message': 'Successfully deleted'}
    if not museum:
        return {'errors': {'message': "Musuem couldn't be found"}}
    return {'errors': {'message': 'Unauthorized'}}, 403
