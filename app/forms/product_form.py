from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField
from wtforms.validators import DataRequired

class ProductForm(FlaskForm):
    museum_id = IntegerField('museum id', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    price = FloatField('price', validators=[DataRequired()])
    category = StringField('category', validators=[DataRequired()])
    dimensions = StringField('dimensions', validators=[DataRequired()])
    quantity = IntegerField('quantity', validators=[DataRequired()])
