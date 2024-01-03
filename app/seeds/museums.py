from app.models import db, Museum, environment, SCHEMA
from sqlalchemy.sql import text


def seed_museums():
    museum_1 = Museum(
        owner_id = 2,
        name = "Musée du Louvre",
        description = "Former palace of the Kings of France, the Louvre Museum presents vast and rich collections: in all, more than 38.000 works of the ancient civilizations around the Mediterranean, the arts of Islam and Western art from the Middle Ages to 1848. The most famous artworks include the Mona Lisa, the Victory of Samothrace or the Venus de Milo, but also the squatting Scribe, the Code Hammurabi, or Vermeer's Lacemaker.",
        image_url = "https://www.boutiquesdemusees.fr/uploads/branding/2/0_xl.jpg?m=1674826840",
        store_name = "Librairie-Boutique du musée du Louvre",
        store_address = "Allée du Grand Louvre - Sous la pyramide 75001 Paris",
        phone_number = "01 58 65 14 00",
        email = "client.louvre@rmngp.fr",
        museum_website = "https://www.louvre.fr/en"
        )
    museum_2 = Museum(
        owner_id = 2,
        name = "Musée d'Orsay",
        description = "Housed in a train station built for the 1900 World's Fair, the Musée d'Orsay is known throughout the world for its rich collection of Impressionist paintings including masterpieces as iconic as the Bal au Moulin de la galette from Renoir or The room at Arles de Van Gogh. Its collections include works of architecture, decorative arts and photography in addition to traditional artistic fields (painting, sculpture, graphic arts). They thus draw a broad panorama of French and European art from 1848 to 1914.",
        image_url = "https://www.boutiquesdemusees.fr/uploads/branding/3/0_xl.jpg?m=1676308983",
        store_name = "Librairie-Boutique du musée d'Orsay",
        store_address = "1 rue de la Légion d'Honneur 75007 Paris",
        email = "librairie.orsay@rmngp.fr",
        museum_website = "https://www.musee-orsay.fr/en"
        )
    museum_3 = Museum(
        owner_id = 3,
        name = "Musée des châteaux de Versailles et de Trianon",
        description = 'In spite of the many royal domains which he had at his disposal, it was at Versailles, where, according to the word of Saint-Simon, there existed only a "little house of cards" which Louis XIII had made there to no longer sleep on the straw. In 1661 Louis XIV chose to build a castle worthy of its prestige. Taking over the team that built Vaux-le-Vicomte, the ruler launched the largest construction site of the century that will employ up to 36,000 workers. In 1682, the Sun King and the court officially settled in Versailles. The castle was the home of the kings of France until the revolution of 1789.',
        image_url = "https://www.boutiquesdemusees.fr/uploads/branding/6/0_l.jpg?m=1527064836",
        store_name = "La Librairie des princes du Château de Versailles",
        store_address = "Cour d'honneur du Château de Versailles Accessible sans billet d'entrée au château 78000 Versailles",
        phone_number = "01 30 97 71 13",
        museum_website = "https://en.chateauversailles.fr/"
        )
    museum_4 = Museum(
        owner_id = 3,
        name = "Musée des Arts asiatiques-Guimet",
        description = "The Guimet Museum was born from the great project of the industrialist, Emile Guimet (1836-1918), to create a museum of the religions of Egypt, classical antiquity and Asian countries. Travels in Egypt, Greece, then a world tour in 1876, with stages in Japan, China and India allowed him to gather important collections that he presented to Lyon from 1879. Reopened in January 2001 after four years of work, the Museum of Asian Arts-Guimet deploys its collections of Asian arts (India, Southeast Asia, China, Korea, Japan, Pakistan and Afghanistan, Nepal and Tibet) which are among the richest people in the world.",
        image_url = "https://www.boutiquesdemusees.fr/uploads/branding/4/0_l.jpg?m=1527061314",
        store_name = "Librairie-Boutique du musée Guimet",
        store_address = "Musée des arts asiatiques 6 place d'Iéna 75116 Paris",
        phone_number = "01 56 52 54 17",
        email = "librairie-boutique.guimet@rmngp.fr",
        museum_website = "https://www.guimet.fr/fr"
    )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
