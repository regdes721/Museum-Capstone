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
        category = "Kids",
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
        num_sold = 6,
        dimensions = "18.5 cm x 9.5 cm x 6 cm",
        quantity = 20
    )
    product_13 = Product(
        museum_id = 1,
        name = "Mona Lisa Lip balm",
        description = "Box showing a detail of the work of Leonardo da Vinci, Portrait of Lisa del Giocondo, called Mona Lisa.",
        price = 4.95,
        category = "Beauty",
        num_sold = 12,
        dimensions = "Ø 3,7 cm",
        quantity = 12
    )
    product_14 = Product(
        museum_id = 1,
        name = "Spiral Notebook Alexandre Hyacinthe Dunouy - View of Naples from Capodimonte, 1813",
        description = 'This notebook was published for the exhibition "Naples in Paris The Louvre Hosts the Museo di Capodimonte" at the musée du Louvre from June 7th 2023 to January 8th 2024. 1st and 2nd cover: Alexandre Hyacinthe Dunouy (1757-1841) View of Naples from Capodimonte (details), 1813. Oil on canvas. H. 129 ; l. 180 cm. Naples, Museo e Real Bosco di Capodimonte. © Photo Amedeo Benestante. 3rd and 4th cover: Pierre jacques Volaire (1729-1799) Eruption of Vesuvius from the Ponte della Maddalena (Mary Magdalene Bridge) (details), 1782. Oil on canvas. H. 130 ; l. 240 cm. Naples, Museo e Real Bosco di Capodimonte. © Photo Per gentile concessione del Museo e Real Bosco di Capodimonte. Notebook 17×22 cm, 100 pages, white sheets. Printed in France, on creative papers. © Rmn-Grand Palais, Paris 2023',
        price = 6,
        category = "Posters & stationery",
        num_sold = 8,
        dimensions = "17 x 22 cm",
        quantity = 6
    )
    product_15 = Product(
        museum_id = 1,
        name = "Mona Lisa Glasses Case",
        description = "Glasses case showing details of the work of Leonardo da Vinci, Portrait of Lisa del Giocondo, called Mona Lisa. This eyeglass case is sold with a microfiber of the same visual.",
        price = 15.95,
        category = "Fashion & Accessories",
        num_sold = 7,
        dimensions = "16,5 x 6,5 x 3 cm",
        quantity = 12
    )
    product_16 = Product(
        museum_id = 2,
        name = "Waterlilies mug",
        description = "Mug showing a detail of the work of Claude Monet, Nymphéas, Matin. Suitable for dishwasher and microwave.",
        price = 12.95,
        category = "Decoration",
        num_sold = 12,
        dimensions = "Ø 8 cm ; H. 9,2 cm",
        quantity = 18
    )
    product_17 = Product(
        museum_id = 2,
        name = "Black Panther - François Pompon - Small size",
        description = "Reproduction with hand patina. Mold made from an impression of the original work exhibited at the Musée d'Orsay.As an observer of animals at the Jardin des Plantes zoo, François Pompon was able to transcribe their movements by eliminating the characteristic modeling of his master and employer, Auguste Rodin. The panther's slender profile lends itself particularly well to this simplification of form, as does the choice of monochrome materials: black marble or bronze with a brown patina.",
        price = 240,
        category = "Sculpture",
        num_sold = 13,
        dimensions = "35 x 14 x 5 cm",
        quantity = 7
    )
    product_18 = Product(
        museum_id = 2,
        name = "Poppy Pin - Claude Monet",
        description = "This pin is inspired by the famous work of Claude Monet (1840-1926), Poppies, 1873, musée d'Orsay. He showed Poppies to the public at the first Impressionist exhibition held in the photographer Nadar's disused studio in 1874. Now one of the world's most famous paintings, it conjures up the vibrant atmosphere of a stroll through the fields on a summer's day. Monet diluted the contours and constructed a colourful rhythm with blobs of paint starting from a sprinkling of poppies; the disproportionately large patches in the foreground indicate the primacy he put on visual impression. A step towards abstraction had been taken.",
        price = 7.95,
        category = "Jewellery",
        num_sold = 8,
        dimensions = "2.3 cm x 2.1 cm",
        quantity = 8
    )
    product_19 = Product(
        museum_id = 3,
        name = "Versailles, a castle for women",
        description = "Written in French.Between pomp, etiquette, grandiose parties and daily life, representation and intimacy, work, service, petty intrigues and grand politics, what kind of Versailles did women live in for over three centuries? This guide offers to follow them through the castle and the estate: from Marie-Thérèse of Austria, the self-effacing wife of Louis XIV, to the king's influential mistresses, from the mischievousness of the young Marie-Adélaïde of Savoy to the sovereign poise of Marie Leszczynska, from her eight daughters - the irreducible Mesdames - to Marie-Antoinette, dauphine and then queen, without forgetting, as far as possible, the friends, the superintendents, the ladies-in-waiting, the ladies-in-waiting and the palace ladies, the merchants and the artists. Through these characters, sometimes in the shadows, sometimes in the shadows, sometimes in full light, thanks to the portraits, settings and objects, the reader is taken on a journey of discovery of another Versailles, off the beaten track. This book, which combines period works and contemporary views, is punctuated by thematic points that shed light on a personality, highlight a particular fact, or give a glimpse of the unexpected aspect of a place steeped in history.Written in French. 176 pages / 150 illustrations. Coédition Réunion des musées nationaux - Grand Palais / Château de Versailles",
        price = 20,
        category = "Books",
        num_sold = 8,
        dimensions = "15,7 x 23,3 x 1,3 cm",
        quantity = 9
    )
    product_20 = Product(
        museum_id = 3,
        name = "Versailles and antiquity - Exhibition catalogue",
        description = 'Written in French.This book, produced as part of the "Versailles and Antiquity" exhibition, reveals masterpieces, both masterly and refined, that extend the time of mythology to us. Exhibition at the Château de Versailles, 2012-2013. Written in French. 336 pages Rmn-Grand Palais Publishers',
        price = 19.90,
        category = "Books",
        num_sold = 11,
        dimensions = "24,6 x 30,9 x 2,8 cm",
        quantity = 10
    )
    product_21 = Product(
        museum_id = 3,
        name = "Keyring Royal Chapel - Château de versailles",
        description = "This keyring is inspired by the Key to the main door of the Royal chapel in the Château de Versailles elaborated by the sculptor Grettepin circa 1710.",
        price = 14.95,
        category = "Fashion & Accessories",
        num_sold = 3,
        dimensions = "31.5 cm x 8.2 cm",
        quantity = 17
    )
    product_22 = Product(
        museum_id = 4,
        name = "Buddha",
        description = "This is the reproduction of a 19th-century bronze from Cambodia, the statuette Ajuthia of teaching Buddha. Sitting up straight and cross-legged, the Buddha put his hands flat one over the other. The joint hands on his lap in this position indicate that he is meditating. It is indeed a mûdra, a codified gesture that gives an indication of the sense of the whole work. Recognisable thanks to certain traits that distinguish him from ordinary mortals, the Buddha is here characterised by a cranial protuberance (usnisa) under his curly hair.",
        price = 120,
        category = "Sculpture",
        num_sold = 7,
        dimensions = "24 x 11 x 5,5 cm",
        quantity = 7
    )
    product_23 = Product(
        museum_id = 4,
        name = "Asian medicines The art of balance - Exhibition catalogue",
        description = "Written in French. Whether we consider Indian medicine, Chinese medicine or the medical tradition of the Himalayan world, they are all characterised by a primarily preventive approach and a global care of the patient, with the aim of maintaining the balance of the energy flows that run through the body. Through more than two hundred works, doctors, academics, art historians and practitioners invite us to discover these three great medical traditions where meditation and shamanism, energetic practices and pharmacopoeia, massage and acupuncture, astrology and exorcism meet. Exhibition « Asian medicines, the art of balance » at the musée national des arts asiatiques - Guimet from May 17th 2023 to September 18th 2023. Written in French. 288 pages / 199 illustrations Coedited by Musée national des arts asiatiques - Guimet, Paris / In Fine éditions d'art",
        price = 37,
        category = "Books",
        num_sold = 6,
        dimensions = "22,7 x 28,7 x 3 cm",
        quantity = 10
    )
    product_24 = Product(
        museum_id = 4,
        name = "Cats by the great masters of Japanese printmaking (box set)",
        description = "Written in French. A true celebration of cats, this boxed set, accompanied by an explanatory booklet, displays in accordion format more than sixty works by the greatest masters of Japanese printmaking. In Japan, the cat, present in folklore, poetry and Kabuki plays, is an emblematic figure. Sometimes adored for its gentleness, beauty and role as a good luck charm (the Maneki-neko), sometimes feared for its cruelty and supernatural powers, becoming the Bakeneko, a monstrous cat, vampire or sorcerer, it has always fascinated. From Hokusai to Hiroshige, via Yoshitoshi and Kuniyoshi, these prints highlight this mysterious and fascinating feline, of a bewitching beauty. Written in French. 226 pages Éditions Hazan",
        price = 24.95,
        category = "Books",
        num_sold = 7,
        dimensions = "12,2 x 17,6 x 4,9 cm",
        quantity = 13
    )
    db.session.add(product_1)
    db.session.add(product_2)
    db.session.add(product_3)
    db.session.add(product_4)
    db.session.add(product_5)
    db.session.add(product_6)
    db.session.add(product_7)
    db.session.add(product_8)
    db.session.add(product_9)
    db.session.add(product_10)
    db.session.add(product_11)
    db.session.add(product_12)
    db.session.add(product_12)
    db.session.add(product_13)
    db.session.add(product_14)
    db.session.add(product_15)
    db.session.add(product_16)
    db.session.add(product_17)
    db.session.add(product_18)
    db.session.add(product_19)
    db.session.add(product_20)
    db.session.add(product_21)
    db.session.add(product_22)
    db.session.add(product_23)
    db.session.add(product_24)
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
