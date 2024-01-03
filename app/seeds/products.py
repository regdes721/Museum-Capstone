from app.models import db, Product, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_products():
    product_1 = Product(
        museum_id = 1,
        name = "Monopoly Louvre - New edition",
        description = "Group together major works from the museum's collections to organize exhibitions with Michelangelo's Dying Slave, or Hammurabi's Code Stele. Be the first to purchase works from the Louvre when you can. Organize exhibitions and attract as many visitors as possible during the game. Outbid your opponents at auctions and negotiate with them for the works you want to acquire. In short, take risks, be the smartest and win the game!",
        price = 49.95,
        category = "Kids",
        num_sold = 10,
        dimensions = "Boîte : 40 x 5 x 26,7 cm",
        quantity = 20)
    product_2 = Product(
        museum_id = 1,
        name = "Cluedo Louvre",
        description = "Extraordinary theft at the Musée du Louvre ! As the day dawns on the city of Paris, Mr Bunchofkeys, the night warden at the Musée du Louvre, makes a terrible discovery. An artwork has disappeared! The police immediately rush to the scene, all entrances to the museum are cordoned off and visits are suspended until further notice. It is essential that the name of the stolen artwork is not revealed, so as not to obstruct the investigators' work. After going through the building with a fine-tooth comb, they can con_rm that the thief could not have escaped with their loot. The artwork has to be hidden somewhere in the museum! Which of the 6 suspects identifed is the real culprit? In which room has the masterpiece been hidden? And which artwork is it? Try to solve the mystery by searching the building for clues and questioning witnesses. For ages 8 and up. Number of players: 3 to 6. The box contains: 1 game board, 6 Character counters, 6 Work tokens, 6 Suspect cards, 6 artwork cards, 9 Location cards, 1 confidential case, 1 bilingual detective sheets, 2 dice and game rules.Illustrations Fabrice Weiss",
        price = 45,
        num_sold = 9,
        dimensions = "40 cm x 26,7 cm x 5 cm",
        quantity = 20
        )
    product_3 = Product(
        museum_id = 1,
        name = "Dobble Louvre",
        description = "Spot the match! Dobble is an award-winning visual perception card game for 2 to 8 players over the age of 6. More than 50 symbols inspired by the Louvre's collections and history: the Venus de Milo, the Mona Lisa by Leonardo da Vinci, the Autumn of Arcimboldo, etc. It's up to you to discover the unique common symbol between each card! Contains: 55 cards, the rules of the game and an educational booklet in English and French. The player must have a keen eye and a lot of reactivity to be the first to spot the corresponding symbol. Dobble can be played by up to eight players, which means that the game is always fast, hilarious and very fun! The deck of cards is protected inside a small circular box which Dobble the travel game you can take everywhere!",
        price = 15.95,
        category = "Kids",
        num_sold = 8,
        dimensions = "9 cm x 3 cm x 15 cm",
        quantity = 14)
    product_4 = Product(
        museum_id = 2,
        name = "Monopoly Vincent van Gogh - English edition",
        description = "English edition. Vincent van Gogh travelled far and wide throughout his lifetime. The places where he lived inspired him to create his artworks. With the Van Gogh Museum edition of Monopoly, join the artist's journey from the Netherlands via Belgium to France. During the trip, find out all about the paintings he created in these three countries. The collaboration between the Van Gogh Museum and Monopoly resulted in a unique edition of the board game. The board consists of paintings by Vincent van Gogh, and his famous work The Yellow House (The Street) forms the basis for the board game. Two exclusive tokens - only available with this edition - were also designed: a paint tube and the bed from Van Gogh's painting The Bedroom. A booklet with facts and information about Van Gogh completes the game. The Van Gogh Museum is always seeking new ways of telling the story of Vincent van Gogh. The collaboration with Monopoly means that through playing, families all around the world get to know the life and work of the Netherlands' most famous 19th-century artist. The Van Gogh Museum also supports the focus of Monopoly's parent company Hasbro on corporate social responsibility and their mission to make the world a better place for children and their families. Special edition of the popular board game Monopoly. The first ever official Van Gogh Museum edition. Age: 8+ Monopoly x Van Gogh Museum Amsterdam®",
        price = 49.95,
        category = "Kids",
        num_sold = 10,
        dimensions = "27 cm x 40 cm x 5.5 cm",
        quantity = 20
    )
    product_5 = Product(
        museum_id = 2,
        name = "Memo Musée d'Orsay - Memory Game 60 cards",
        description = "In partnership with Mon petit art, the Rmn - Grand Palais has developed this edutainment game based on Impressionist works in the Musée d'Orsay. This Memo highlights the Musée d'Orsay's collections, combining iconic works with more confidential ones. This Memo allows youngsters to discover the Musée d'Orsay collections in a different way, and to awaken the budding artist in them! A great game for the youngest children. A great way to share a game experience with family and friends. From 3 years old.",
        price = 19.95,
        category = "Kids",
        num_sold = 9,
        dimensions = "6 cm x 6 cm x 5 cm",
        quantity = 20
    )
    product_6 = Product(
        museum_id = 2,
        name = "White bear - François Pompon",
        description = "This reproduction of a polar bear is a cast of the original statue by the sculptor François Pompon on display at the Musée des Beaux-Arts in Dijon. However, the best-known example is the one on display at the Musée d'Orsay since 1986. The son of a cabinetmaker, François Pompon entered the École des Beaux-Arts in Dijon after working with stone and wood in Saulieu to earn his living. He studied architecture and sculpture and acquired some rudiments of engraving. In 1874, he left for Paris and came into contact with the entrepreneurs who were transforming the Paris of the Second Empire. He executed decorative figures and caryatids for the façade of the Hôtel de Ville and then joined Rodin as a practitioner, where he remained for fifteen years. He had to wait until the age of 67 and the Salon of 1922 to achieve success with the 'White Bear'. Best known as an animal sculptor, he exalted the lyricism of light in the polished surfaces and the economy of detail. After having been kept at the Jardin des Plantes, the three hundred pieces bequeathed by F. Pompon have been definitively transferred to Dijon, to the Musée des Beaux-Arts.",
        price = 230,
        category = "Sculpture",
        num_sold = 8,
        dimensions = "Grand modèle : 48 x 25 x 13 cm - Petit modèle : 28 x 15 x 8 cm",
        quantity = 20
    )
    product_7 = Product(
        museum_id = 3,
        name = "Scrunchie Scarf Galerie des modes",
        description = 'The design of this scrunchie is inspired by prints and ornaments from 18th century."In the 18th century, French fashion radiated its elegance to all the courts of Europe. These motifs, inspired by the "Traité pierres précieuses et de la manière de les employer en parure" (Treatise on precious stones and the manner of using them in adornment), illustrate all the refinement of the embellishment of the period."With the Galeries des Modes collection, the Rmn Grand Palais asked Happy Remix Productions to revisit the theme of frivolous 18th century elegance. This graphic design studio was born of the meeting of Florence Deviller, artistic director, and Camille Soulayrol, stylist and editor, who have worked together for many years in the press, advertising and publishing. The pieces proposed are inspired by the prints and ornaments published in the "Galerie des modes et costumes français" and in the "Traité des pierres précieuses".',
        price = 12.95,
        category = "Fashion & Accessories",
        num_sold = 10,
        dimensions = "30 cm x 9 cm",
        quantity = 14
    )
    product_8 = Product(
        museum_id = 3,
        name = "Bangle with clasp Roses - Château de Versailles",
        description = "This bracelet is inspired by the billiard cabinet, one of the settings of Queen Marie-Antoinette's inner cabinets at the Château de Versailles. A creation by Bangle up / Rmn - Grand Palais for the Château de Versailles. Gold dipped hinged bracelet with colored enamel. Width: 0,7 cm. Gold dipped metal brass jewelry. Enameled, polished, engraved 'bangle up' inside. Does not blacken. No nickel or any allergenic substances. Your mantra to keep your bracelets looking shiny and new: take care of your bangles. Keep them away from water, detergents and perfume.",
        price = 75,
        category = "Jewellery",
        num_sold = 9,
        dimensions = "6 cm x 5 cm x 1.5 cm",
        quantity = 20
    )
    product_9 = Product(
        museum_id = 3,
        name = "Noël Coypel (1628-1707). Painter of the King - Exhibition catalogue",
        description = "WRITTEN IN FRENCH. Founder of a dynasty of painters, Noël Coypel (1628-1707) distinguished himself brilliantly in several fields: ceilings, easel paintings, graphic arts, tapestry cartoons. After receiving initial training in Orléans, he returned to Paris and participated in the sets of Luigi Rossi's opera Orfeo. Spotted by the painter Charles Errard, then director of the royal decorations of the Louvre, the large decoration became the essential part of his activity: the parliament of Rennes first of all, then the royal residences or even, in the twilight of his life, the Invalides . Some of these groups have now disappeared - at the Louvre, at Fontainebleau, at the Palais-Royal, and even those from the first Versailles - others are only known from a few paintings, which will be presented at the exhibition. At the same time, Noël Coypel successfully completed the stages of his academic career. Received in 1663 at the Royal Academy of Painting and Sculpture, he was appointed professor in 1664, before taking the head of the French Academy in Rome from 1673 to 1675, then that of the Royal Academy of Painting and Sculpture. sculpture in 1695. Exhibition 'Noël Coypel painter of grand decors' from 26 September 2023 to 28 January 2024 in the Grand Trianon, Palace of Versailles. French. 352 pages. Editions Snoeck",
        price = 39.90,
        category = "Books",
        num_sold = 8,
        dimensions = "24,7 x 28,5 x 3,5 cm",
        quantity = 20
    )
    product_10 = Product(
        museum_id = 4,
        name = "Purse - Katsushika Hokusai - Bullfinch and cherry-tree - 13x10 cm",
        description = 'The visual of this pouch is inspired by one of a work from the series of Small Flowers by the Japanese artist Katsushika Hokusai (1760-1849), "Bullfinch and weeping cherry-tree", 1834. Katsushika Hokusai (1760-1849), painter, draftsman, engraver and author is the most famous artist in the world. He renewed the art of printmaking.',
        price = 12,
        category = "Fashion & Accessories",
        num_sold = 10,
        dimensions = "13 cm x 10 cm",
        quantity = 13
    )
    product_11 = Product(
        museum_id = 4,
        name = "Lamp Katsushika Hokusai - Bullfinch and cherry-tree",
        description = 'Cylindrical lamp with lampshade featuring a detail by one of a work from the series of Small Flowers by the Japanese artist Katsushika Hokusai (1760-1849), "Bullfinch and weeping cherry-tree", 1834. Katsushika Hokusai (1760-1849), painter, draftsman, engraver and author is the most famous artist in the world. He renewed the art of printmaking. E14 bulb, not included.',
        price = 49.95,
        category = "Decoration",
        num_sold = 9,
        dimensions = "29 cm x 12 cm",
        quantity = 3
    )
    product_12 = Product(
        museum_id = 4,
        name = "Bento box Katsushika Hokusai - Bullfinch and cherry-tree",
        description = 'This MB Original bento box is the perfect partner for your daily lunches at the office, for your picnics and other meals on the go. Made in France, this compartmentalised lunch box is made of quality materials to follow you every day, for many years. The visual featuring a detail by one of a work from the series of Small Flowers by the Japanese artist Katsushika Hokusai (1760-1849), "Bullfinch and weeping cherry-tree", 1834. Katsushika Hokusai (1760-1849), painter, draftsman, engraver and author is the most famous artist in the world. He renewed the art of printmaking.',
        price = 39.95,
        category = "Decoration",
        dimensions = "18.5 cm x 9.5 cm x 6 cm",
        quantity = 20
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
def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))

    db.session.commit()
