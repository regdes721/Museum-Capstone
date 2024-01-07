from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class MuseumForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    image_url = StringField('image url', validators=[DataRequired()])
    store_name = StringField('store name', validators=[DataRequired()])
    store_address = StringField('store address', validators=[DataRequired()])
    phone_number = StringField('phone number')
    email = StringField('email')
    museum_website = StringField('museum website', validators=[DataRequired()])
