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
    product_25 = Product(
        museum_id = 1,
        name = "Mona Lisa Poster - Leonardo da Vinci",
        description = "This poster is a reproduction of Leonardo da Vinci's famous painting, The Mona Lisa, or Portrait of Mona Lisa. Leonardo di ser Piero Da Vinci, known as Leonardo da Vinci. Portrait of Lisa Gherardini, wife of Francesco del Giocondo, known as Mona Lisa, the Gioconda or Mona Lisa (ca. 1503 - 1506). Oil on poplar panel (H. 0,77 m. - W. 0,53 m.). Louvre Museum, Paris.",
        price = 11,
        category = "Posters & stationery",
        num_sold = 7,
        dimensions = "50 x 70 cm",
        quantity = 17
    )
    product_26 = Product(
        museum_id = 1,
        name = "Tray Alexandre Hyacinthe Dunouy - View of Naples from Capodimonte, 1813 - 28x20 cm",
        description = 'This tray created for the exhibition "Naples in Paris The Louvre Hosts the Museo di Capodimonte" at the musée du Louvre from June 7th 2023 to January 8th 2024 was inspired by a detail from the work by the French artist Alexandre Hyacinthe Dunouy (1757-1841), View of Naples from Capodimonte, 1813.',
        price = 8.95,
        category = "Decoration",
        num_sold = 7,
        dimensions = "28 cm x 20 cm",
        quantity = 20
    )
    product_27 = Product(
        museum_id = 1,
        name = "Reversible Ring Medallion of Panticapaea",
        description = "This reversible ring in gilded brass and natural stone is inspired by a gold, garnet and glass necklace from the Hellenistic period in the Louvre's Department of Greek, Etruscan and Roman Antiquities. Element of a necklace. Kerch (ancient Panticapaea), Hellenistic period (323 - 31 BC). Original gold, garnet, glass. Musée du Louvre, Paris. In the 7th century BC, Greek settlers from Ionia founded a city named Panticapaeum on the shores of the Kerch Strait (modern-day Crimea), at the top of Mount Mithridates. Situated at the junction of trade routes between Asia and Europe, Panticapaeum experienced significant growth, becoming the capital of the kings of Bosporus, occasionally referred to as the Cimmerian Bosporus (5th - 4th century BC), and minting its own coins from the middle of the 6th century BC. The upper town features a colonnaded palace, as well as the temples of Apollo, Artemis, Zeus and Demeter. The city's decline was caused by the advances of neighbouring peoples, such as the Sarmatians (from the 3rd century BC), and by economic competition in the grain trade, particularly from Egypt. Archaeological excavations began in 1830, unearthing the Acropolis, and revealing royal skeletons, numerous gold and bronze coins, stelae, vases, gold and silver ornaments, as well as jewellery - such as this medallion, which is a necklace component made of gold and garnet or red glass, featuring two loops. Keep the jewellery away from dust and moisture. Avoid contact with perfume, chemicals and cosmetics; avoid getting the jewellery wet.",
        price = 45,
        category = "Jewellery",
        num_sold = 7,
        dimensions = "1.5 cm",
        quantity = 15
    )
    product_28 = Product(
        museum_id = 2,
        name = "Art Tote Bag",
        description = "The Boutiques de Musées cotton tote bag! Easy to fold and transport, resistant, and 100% cotton.",
        price = 3.20,
        category = "Fashion & Accessories",
        num_sold = 9,
        dimensions = "45 x 35 cm",
        quantity = 20
    )
    product_29 = Product(
        museum_id = 2,
        name = "Souvenir Medal Musée d'Orsay François Pompon - Polar Bear - Monnaie de Paris",
        description = "This souvenir medal is a tribute to the famous sculpture, Polar Bear by François Pompon (1855-1933). Kept at the Musée d'Orsay. For many years, Pompon was one of the most sought-after assistants in Paris, hewing blocks of marble for Auguste Rodin and Camille Claudel. But after 1905, in reaction to Rodin's expressionism, Pompon abandoned the human figure and turned to the animals that he observed at the Jardin des Plantes. Polar Bear is the finest achievement in this vein; when it was exhibited at the Salon d'Automne in 1922, it brought the artist tardy recognition, at the age of sixty-seven.",
        price = 3,
        category = "Decoration",
        num_sold = 9,
        dimensions = "3.4 cm",
        quantity = 20
    )
    product_30 = Product(
        museum_id = 2,
        name = "Small Notebook Vincent van Gogh - Self-portrait, 1889",
        description = "This notebook was published for the exhibition 'Van Gogh in Auvers-sur-Oise The Final Months' from October 3rd, 2023 to February 4th, 2024 at the musée d'Orsay. The illustration on this notebook uses the gradations of blue skies from the work by Vincent Van Gogh (1853 - 1890). Self-portrait (details), 1889 Oil on canvas H. 65,0 ; W. 54,2 cm. Gift of Paul and Marguerite Gachet, 1949 © Musée d'Orsay, Dist. RMN-Grand Palais / Patrice Schmidt. Like Rembrandt and Goya, Vincent van Gogh often used himself as a model; he produced over forty-three self-portraits, paintings or drawings in ten years. Like the old masters, he observed himself critically in a mirror. Painting oneself is not an innocuous act: it is a questioning which often leads to an identity crisis. In this head-and-shoulders view, the artist is wearing a suit and not the pea jacket he usually worked in. Attention is focused on the face. His features are hard and emaciated, his green-rimmed eyes seem intransigent and anxious. The dominant colour, a mix of absinth green and pale turquoise finds a counterpoint in its complementary colour, the fiery orange of the beard and hair. The model's immobility contrasts with the undulating hair and beard, echoed and amplified in the hallucinatory arabesques of the background. Notebook 10 x 16 cm 56 pages - lined pages. Printed in France, on fine art papers. © Rmn - Grand Palais, Paris 2023",
        price = 4.90,
        category = "Posters & stationery",
        num_sold = 8,
        dimensions = "10 x 16 cm",
        quantity = 12
    )
    product_31 = Product(
        museum_id = 3,
        name = "Key of the Royal Chapel",
        description = "Inspired replica of the Key to the main door of the Royal chapel in the Château de Versailles elaborated by the sculptor Grettepin circa 1710. Replica made with an alloy of lead and tin can be used as a paperweight.",
        price = 83.50,
        category = "Posters & stationery",
        num_sold = 8,
        dimensions = "31.5 cm x 8.2 cm",
        quantity = 13
    )
    product_32 = Product(
        museum_id = 3,
        name = "Marie Antoinette Bag vaporizer",
        description = 'This bag vaporizer belongs to the "Ladies of the Court" range. This range was created for the Versailles Castle. It represents portraits of great ladies on a flowery background, reminiscent of the tapestries of the castle.',
        price = 14.95,
        category = "Beauty",
        num_sold = 7,
        dimensions = "10.5 cm x 3.8 cm",
        quantity = 17
    )
    product_33 = Product(
        museum_id = 3,
        name = "Marie-Antoinette Monogrammed Brooch",
        description = "Marie Antoinette (1755-1793). Versailles Jewellery Collection. A monogram, or initials, is composed of the first letter of a name and either doubled or followed by the second letter of the name, both interwoven into one character, with or without ornaments. It is used to sign but can be seen also on bronzes or furnishing or any object pertaining to the owner of the monogram. Also the initials M A can be seen, amongst other things, on the ramp of the staircases of the hall at the Petit Trianon, in the Salon doré at Versailles, on the porcelain set of the Queen's travel kit.",
        price = 35,
        category = "Jewellery",
        num_sold = 6,
        dimensions = "4.5 x 4 cm",
        quantity = 12
    )
    product_34 = Product(
        museum_id = 4,
        name = "Chinese dancer - Right version",
        description = "Reproduction patinated by hand. Mold made from an imprint of the original, statuette dated from the first half of 7th century exhibited at Guimet museum. These two dancers were cast in square-based moulds inspired by the Sui prototypes. Their originality lies in their green and brown glaze . The revival of this technique, wich was similar to the one used in glassmaking, was probably due to the Bei Qi potters of Henan . Works with lead- based glazes were extremely rare at the end of the 6th century and in the first half of the 7th century. Their silhouettes, facial features and hairstyles belong to the same ideal of beauty as the creations of the mid-7th century. Their hair is drawn up to the top of their heads and arranged like outspread butterfly wings. Their oval faces grace slender, adolescent bodies. The tight-fitting bodices enhance the delicately moulded, bowed busts. The narrow waists, supple backs and folded legs are suspended in a dance movement. Although many of the melodies of this era are well-known, it is difficult to match them with a specific choreography. At best, one may deduce that these harmonious attitudes belong more to the traditional Chinese ruan style than to the much livelier Western jian dances. Foreign contributions were indeed absorbed, but the way of moving near the ground could have come from India. Much of the dancer's talent probably lay in the manner in which she hovered apparently weightlessly held up by the swirling fabrics of her sleeve.",
        price = 235,
        category = "Sculpture",
        num_sold = 7,
        dimensions = "16 x 20 x 17 cm",
        quantity = 7
    )
    product_35 = Product(
        museum_id = 4,
        name = "Cervid",
        description = "Hand-patinated bronze reproduction on a metal base. Hand-patinated resin reproduction on a wooden base. Mold made from an impression of the original work. A large number of vases in the form of animals, arms and figures in bronze, as well as items of silverware, which were said to have come from the Iranian site of Amlash, appeared in antique shops around 1960. It was soon discovered that Amlash was only the village where clandestine diggers sold antiquities they found in a region of green hills overlooking the south-west of the Caspian Sea, the major site of which is Marlik. Archaeological digs were started by Professor Negahban who had discovered a royal necropolis with a culture that can be attributed to Iranian invaders from the Gorgan plain, to the south-west of the Caspian sea. These invaders had mixed with the native people who transmitted to them the traditions of the leading civilizations of western Asia, from the 13th century B.C. onwards. The two populations merged and created a highly original art.",
        price = 160,
        category = "Sculpture",
        num_sold = 7,
        dimensions = "20 x 6 x 3 cm",
        quantity = 10
    )
    product_36 = Product(
        museum_id = 4,
        name = "Bangle bracelet Hokusai - The great wave",
        description = 'This bracelet is inspired by a detail of one of the most famous works of the Japanese artist Katsushika Hokusai (1760-1849), "Under the wave off Kanagawa" ("the big wave") (Kanagawa oki namiura) 1830-32. Katsushika Hokusai (1760-1849), painter, draftsman, engraver and author is the most famous artist in the world. He renewed the art of printmaking with his famous works such as "Under the Wave off Kanagawa" which is the first of a serie of Thirty-six views of Mount Fuji published between 1831 and 1833. Materials: Gilded brass, colored resin. MAINTENANCE: Keep the jewel away from dust and humidity. Avoid contact with perfume, chemical products and cosmetics; avoid wetting the jewel.',
        price = 49,
        category = "Jewellery",
        num_sold = 7,
        dimensions = "1.5 cm x 6.3 cm",
        quantity = 15
    )
    product_37 = Product(
        museum_id = 1,
        name = "Horse Chestnut - Black or colored version",
        description = "In 1667, the newly-formed Académie Royale des Sciences undertook, on the king's orders, the production of a scholarly work: the Histoire des plantes, including a collection of engraved botanical species. The 319 engravings were produced by Nicolas Robert, Abraham Bosse and Louis de Chastillon, before being published by Denis Dodart, the king's botanist and physician. According to a standardized model, each plate includes a 1:1 illustration, a detailed description, a statement of its various properties, particularly medicinal, and the results of chemical and physiological studies. Nicolas Marchant, 'concierge and director of plant cultivation in the royal garden', brought in seeds from foreign countries to provide living models for academicians, draftsmen and engravers. This ambitious project by the Académie des Sciences, begun in the late 17th century, was never fully completed, and no complete edition was ever published. Today, these 319 copperplates are preserved by the Chalcographie du Louvre.",
        price = 350,
        category = "Engravings",
        num_sold = 7,
        dimensions = "45 cm x 63,5 cm",
        quantity = 12
    )
    product_38 = Product(
        museum_id = 1,
        name = "Mrs Vigée-Le Brun and her daughter, Jeanne-Lucie, known as Julie",
        description = "This painting immortalizing maternal love was painted in 1789 for the Count of Angiviller, then Director of the King's Buildings. Its author, Madame Vigée Le Brun, was the first woman to be admitted to the Royal Academy of Painting, an acceptance helped in part by the thirty portraits she made of Marie-Antoinette and by the recommendations of Louis XVI. In addition to his painting of portraits of the greats of the French crown, his salons were famous and all Paris frequented them: the Countess de Ségur, de Polignac...",
        price = 130,
        category = "Engravings",
        num_sold = 7,
        dimensions = "50 x 65 cm",
        quantity = 13
    )
    product_39 = Product(
        museum_id = 1,
        name = "Les Sabines",
        description = "The Intervention of the Sabine Women is a 1799 painting by the French painter Jacques-Louis David, showing a legendary episode following the abduction of the Sabine women by the founding generation of Rome. Work on the painting commenced in 1796, after his estranged wife visited him in jail. He conceived the idea of telling the story, to honour his wife, with the theme being love prevailing over conflict and the protection of children. The painting was also seen as a plea for the people to reunite after the bloodshed of the revolution. Its realization took him nearly four years.",
        price = 550,
        category = "Engravings",
        num_sold = 7,
        dimensions = "76 x 100 cm",
        quantity = 13
    )
    product_40 = Product(
        museum_id = 1,
        name = "Paris in 1860 - Edouard Willmann",
        description = "Willmann was a student of Frommel and a professor at the Frankfurt School of Fine Arts. As for most artists of his time, the fascination exercised by the Paris of the Second Empire, a universal place of artistic creation, inspired him to write this famous and heroic composition with a burin, offered to Chalcographie by Emperor Napoleon III. This heroic conception of the urban landscape, seen from the sky, is in the tradition of classical engravers and also announces, by the scale of the format of the leaf, the great compositions that will be the masterpieces of universal exhibitions where the mastery of a technique combined with the talent of interpretation attracted the votes of the general public.",
        price = 350,
        category = "Engravings",
        num_sold = 7,
        dimensions = "90 x 126 cm",
        quantity = 15
    )
    product_41 = Product(
        museum_id = 1,
        name = "Birth of Venus. Fragment - Botticelli",
        description = 'This print is a reproduction of a fragment of the painting "The Birth of Venus" by Botticelli.',
        price = 95,
        category = "Engravings",
        num_sold = 8,
        dimensions = "38 x 56 cm",
        quantity = 8
    )
    product_42 = Product(
        museum_id = 2,
        name = "Le Tub (détail)",
        description = "The Tub is a pastel artwork by Edgar Degas (1834–1917), painted in 1886, and housed in the Musée d'Orsay in Paris. A masterwork of Degas, it skillfully combines still life of toilet articles with a distorted perspective and plunging view, make this pastel one of the most audacious and accomplished of Degas' works.",
        price = 39,
        category = "Print on demand",
        num_sold = 7,
        dimensions = "46.4 cm x 34.7 cm",
        quantity = 9
    )
    product_43 = Product(
        museum_id = 2,
        name = "Portrait d’Édouard Manet debout",
        description = "Édouard Manet (23 January 1832 – 30 April 1883) was a French modernist painter. He was one of the first 19th-century artists to paint modern life, as well as a pivotal figure in the transition from Realism to Impressionism.",
        price = 39,
        category = "Print on demand",
        num_sold = 7,
        dimensions = "31.1 cm x 46.4 cm",
        quantity = 10
    )
    product_44 = Product(
        museum_id = 2,
        name = "Van Gogh self-portrait",
        description = "Vincent Willem van Gogh (30 March 1853 – 29 July 1890) was a Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art. In just over a decade he created approximately 2100 artworks, including around 860 oil paintings, most of them in the last two years of his life. They include landscapes, still lifes, portraits and self-portraits, and are characterised by bold, symbolic colours, and dramatic, impulsive and highly expressive brushwork that contributed to the foundations of modern art. Only one of his paintings was known by name to have been sold during his lifetime. Van Gogh became famous after his suicide at age 37, which followed years of poverty and mental illness.",
        price = 39,
        category = "Print on demand",
        num_sold = 7,
        dimensions = "39.5 cm x 46.4 cm",
        quantity = 8
    )
    product_45 = Product(
        museum_id = 2,
        name = "The starry night",
        description = "From the moment of his arrival in Arles, on 8 February 1888, Van Gogh was constantly preoccupied with the representation of 'night effects'. In April 1888, he wrote to his brother Theo: 'I need a starry night with cypresses or maybe above a field of ripe wheat.' In June, he confided to the painter Emile Bernard: 'But when shall I ever paint the Starry Sky, this painting that keeps haunting me' and, in September, in a letter to his sister, he evoked the same subject: 'Often it seems to me night is even more richly coloured than day'. During the same month of September, he finally realised his obsessive project. He first painted a corner of nocturnal sky in Cafe Terrace on the Place du Forum, Arles (Otterlo, Rijksmuseum Kröller-Muller). Next came this view of the Rhône in which he marvellously transcribed the colours he perceived in the dark. Blues prevail: Prussian blue, ultramarine and cobalt. The city gas lights glimmer an intense orange and are reflected in the water. The stars sparkle like gemstones. A few months later, just after being confined to a mental institution, Van Gogh painted another version of the same subject: Starry Night (New York, MoMA), in which the violence of his troubled psyche is fully expressed. Trees are shaped like flames while the sky and stars whirl in a cosmic vision. The Musée d'Orsay's Starry Night is more serene, an atmosphere reinforced by the presence of a couple of lovers at the bottom of the canvas.",
        price = 39,
        category = "Print on demand",
        num_sold = 7,
        dimensions = "46.4 cm x 37.7 cm",
        quantity = 5
    )
    product_46 = Product(
        museum_id = 4,
        name = "Album de la série des Cinquante-trois relais du Tôkaidô",
        description = "The Fifty-Three Stations of the Tōkaidō (東海道五十三次, Tōkaidō Gojūsan-tsugi), in the Hōeidō edition (1833–1834), is a series of ukiyo-e woodcut prints created by Utagawa Hiroshige after his first travel along the Tōkaidō in 1832. The Tōkaidō road, linking the shōgun's capital, Edo, to the imperial one, Kyōto, was the main travel and transport artery of old Japan. It is also the most important of the 'Five Roads' (Gokaidō)—the five major roads of Japan created or developed during the Edo period to further strengthen the control of the central shogunate administration over the whole country. Even though the Hōeidō edition is by far the best known, The Fifty-Three Stations of the Tōkaidō was such a popular subject that it led Hiroshige to create some 30 different series of woodcut prints on it, all very different one from the other by their size (ōban or chuban), their designs or even their number (some series include just a few prints). The Hōeidō edition of the Tōkaidō is Hiroshige's best known work, and the best sold ever ukiyo-e Japanese prints.[2] Coming just after Hokusai's Thirty-six Views of Mount Fuji series, it established this new major theme of ukiyo-e, the landscape print, or fūkei-ga, with a special focus on 'famous views'.",
        price = 39,
        category = "Print on demand",
        num_sold = 7,
        dimensions = "32.6 cm x 46.4 cm",
        quantity = 7
    )
    product_47 = Product(
        museum_id = 3,
        name = "Madame Adelaide Lip balm",
        description = "Lip balm featuring the portrait of Madame Adelaide painted by Jean-Marc Nattier in 1756. The drawings are inspired by the bedroom of Madame Adelaide at the Versailles Castle.",
        price = 4.95,
        category = "Beauty",
        num_sold = 7,
        dimensions = "Ø 3,7 cm",
        quantity = 10
    )
    product_48 = Product(
        museum_id = 3,
        name = "Hand cream Verbena fragrance",
        description = "Be soft to the tips of your nails with this hand cream with the scent of verbena.",
        price = 5.95,
        category = "Beauty",
        num_sold = 7,
        dimensions = "10.5 cm x 3.8 cm",
        quantity = 11
    )
    product_49 = Product(
        museum_id = 3,
        name = "Manicure set Marie-Antoinette - Ladies of the court",
        description = "An elegant manicure set with motifs reminiscent of the tapestries of the Château de Versailles. The 'Dames de la Cour' range was created for the Chapelle counter in the heart of the Château de Versailles. It features portraits of great ladies on a floral background. Contains: Cuticle repellent; tweezers; scissors; file; wooden and nylon nail clippers",
        price = 19.95,
        category = "Beauty",
        num_sold = 7,
        dimensions = "10.5 cm x 3.8 cm",
        quantity = 11
    )
    product_50 = Product(
        museum_id = 3,
        name = "2024 Small Calendar - Napoleon - 15.5 x 18 cm",
        description = "2024 Small Calendar 15.5x18 cm featuring 12 paintings and pictures associated to the life of French Emperor Napoleon (1769-1821). 1 double page per month. Languages: English, French, German, Italian, Spanish. Printed in France, on fine papers.",
        price = 5,
        category = "Posters & stationery",
        num_sold = 7,
        dimensions = "15,5 x 18 cm",
        quantity = 12
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
    db.session.add(product_25)
    db.session.add(product_26)
    db.session.add(product_27)
    db.session.add(product_28)
    db.session.add(product_29)
    db.session.add(product_30)
    db.session.add(product_31)
    db.session.add(product_32)
    db.session.add(product_33)
    db.session.add(product_34)
    db.session.add(product_35)
    db.session.add(product_36)
    db.session.add(product_37)
    db.session.add(product_38)
    db.session.add(product_39)
    db.session.add(product_40)
    db.session.add(product_41)
    db.session.add(product_42)
    db.session.add(product_43)
    db.session.add(product_44)
    db.session.add(product_45)
    db.session.add(product_46)
    db.session.add(product_47)
    db.session.add(product_48)
    db.session.add(product_49)
    db.session.add(product_50)
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
