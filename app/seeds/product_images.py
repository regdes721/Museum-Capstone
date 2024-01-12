from app.models import db, ProductImage, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_product_images():
    product_image_1 = ProductImage(
        product_id = 1,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/18629/44788_xxl.jpg",
        preview = True
        )
    product_image_2 = ProductImage(
        product_id = 1,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/18629/44793_xxl.jpg",
        preview = False
        )
    product_image_3 = ProductImage(
        product_id = 2,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/33246/86903_xl.jpg",
        preview = True
        )
    product_image_4 = ProductImage(
        product_id = 2,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/33246/86908_xxl.jpg",
        preview = False
    )
    product_image_5 = ProductImage(
        product_id = 3,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/33085/78763_xxl.jpg",
        preview = True
    )
    product_image_6 = ProductImage(
        product_id = 3,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/33085/86046_xxl.jpg",
        preview = False
    )
    product_image_7 = ProductImage(
        product_id = 4,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/39836/88299_xxl.jpg",
        preview = True
    )
    product_image_8 = ProductImage(
        product_id = 4,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/39836/88296_xxl.jpg",
        preview = False
    )
    product_image_9 = ProductImage(
        product_id = 5,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/35216/81815_xl.jpg",
        preview = True
    )
    product_image_10 = ProductImage(
        product_id = 5,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/35216/89377_xxl.jpg",
        preview = False
    )
    product_image_11 = ProductImage(
        product_id = 6,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/14352/54510_xl.jpg",
        preview = True
    )
    product_image_12 = ProductImage(
        product_id = 6,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/14352/87215_xxl.jpg",
        preview = False
    )
    product_image_13 = ProductImage(
        product_id = 7,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/34272/79349_xl.jpg",
        preview = True
    )
    product_image_14 = ProductImage(
        product_id = 8,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/23779/82096_xl.jpg",
        preview = True
    )
    product_image_15 = ProductImage(
        product_id = 8,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/23779/84179_xxl.jpg",
        preview = False
    )
    product_image_16 = ProductImage(
        product_id = 9,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/39724/89097_xl.jpg",
        preview = True
    )
    product_image_17 = ProductImage(
        product_id = 10,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/38918/85890_xl.jpg",
        preview = True
    )
    product_image_18 = ProductImage(
        product_id = 11,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/38867/85891_xl.jpg",
        preview = True
    )
    product_image_19 = ProductImage(
        product_id = 11,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/38867/87002_xxl.jpg",
        preview = False
    )
    product_image_20 = ProductImage(
        product_id = 12,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/38837/87142_xl.jpg",
        preview = True
    )
    product_image_21 = ProductImage(
        product_id = 12,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/38837/87143_xxl.jpg",
        preview = False
    )
    product_image_22 = ProductImage(
        product_id = 13,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/12381/31669_xl.jpg",
        preview = True
    )
    product_image_23 = ProductImage(
        product_id = 14,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/39102/86317_xl.jpg",
        preview = True
    )
    product_image_24 = ProductImage(
        product_id = 15,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/10280/27073_xl.jpg",
        preview = True
    )
    product_image_25 = ProductImage(
        product_id = 16,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/9635/30747_xl.jpg",
        preview = True
    )
    product_image_26 = ProductImage(
        product_id = 17,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/711/53524_xl.jpg",
        preview = True
    )
    product_image_27 = ProductImage(
        product_id = 18,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/21659/55549_xl.jpg",
        preview = True
    )
    product_image_28 = ProductImage(
        product_id = 19,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/37687/82462_xl.jpg",
        preview = True
    )
    product_image_29 = ProductImage(
        product_id = 20,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/23365/55499_xl.jpg",
        preview = True
    )
    product_image_30 = ProductImage(
        product_id = 21,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/31063/72255_xl.jpg",
        preview = True
    )
    product_image_31 = ProductImage(
        product_id = 22,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/720/696_xl.jpg",
        preview = True
    )
    product_image_32 = ProductImage(
        product_id = 23,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/38808/86201_xl.jpg",
        preview = True
    )
    product_image_33 = ProductImage(
        product_id = 24,
        image_url = "https://www.boutiquesdemusees.fr/uploads/photos/34475/77561_xl.jpg",
        preview = True
    )

    db.session.add(product_image_1)
    db.session.add(product_image_2)
    db.session.add(product_image_3)
    db.session.add(product_image_4)
    db.session.add(product_image_5)
    db.session.add(product_image_6)
    db.session.add(product_image_7)
    db.session.add(product_image_8)
    db.session.add(product_image_9)
    db.session.add(product_image_10)
    db.session.add(product_image_11)
    db.session.add(product_image_12)
    db.session.add(product_image_13)
    db.session.add(product_image_14)
    db.session.add(product_image_15)
    db.session.add(product_image_16)
    db.session.add(product_image_17)
    db.session.add(product_image_18)
    db.session.add(product_image_19)
    db.session.add(product_image_20)
    db.session.add(product_image_21)
    db.session.add(product_image_22)
    db.session.add(product_image_23)
    db.session.add(product_image_24)
    db.session.add(product_image_25)
    db.session.add(product_image_26)
    db.session.add(product_image_27)
    db.session.add(product_image_28)
    db.session.add(product_image_29)
    db.session.add(product_image_30)
    db.session.add(product_image_31)
    db.session.add(product_image_32)
    db.session.add(product_image_33)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_product_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.product_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM product_images"))

    db.session.commit()
