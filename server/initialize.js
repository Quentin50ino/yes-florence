export default async function initialize (models) {
    const typeItineraryList = [
        {
            type_name : "Half day itineraries"
        },
        {
            type_name : "All day itineraries"
        },
        {
            type_name : "Family itineraries"
        }
    ]
    const typeItinerary0 = await models.TypeItinerary.create(typeItineraryList[0])
    const typeItinerary1 = await models.TypeItinerary.create(typeItineraryList[1])
    const typeItinerary2 = await models.TypeItinerary.create(typeItineraryList[2])
    const itineraryList = [
        {
            title : "Renaissance in Florence",
            image : "https://www.tuscanypeople.com/wp-content/uploads/2021/06/duomo_firenze_alba.jpg",
            description : "Guided visit in the center of Florence.",
            information : "Visita in italiano",
            duration : 2,
            typeItineraryId : typeItinerary0.id
        },
        {
            title : "Outdoor Florence",
            image : "https://mywowo.net/media/images/cache/firenze_giardino_dei_boboli_01_prima_parte_jpg_1200_630_cover_85.jpg",
            description : "Guided visit outdoor",
            information : "Visita in italiano",
            duration : 8,
            typeItineraryId : typeItinerary2.id
        },
        {
            title : "All around Medici",
            image : "https://www.imuseidifirenze.it/wp-content/uploads/2019/02/palazzo-pitti-firenze-1024x577.jpg",
            description : "Guided visit in all the old residences of the Medici family",
            information : "Visita in italiano",
            duration : 8,
            typeItineraryId : typeItinerary1.id
        }
    ]
    const itinerary0 = await models.Itinerary.create(itineraryList[0])
    const itinerary1 = await models.Itinerary.create(itineraryList[1])
    const itinerary2 = await models.Itinerary.create(itineraryList[2])
    const typePointOfInterestList = [
        {
            type_name : "History"
        },
        {
            type_name : "Nature"
        }
    ]
    const typePointOfInterest0 = await models.TypePointOfInterest.create(typePointOfInterestList[0])
    const typePointOfInterest1 = await models.TypePointOfInterest.create(typePointOfInterestList[1])
    const pointOfInterestsList = [
        {
            title : "Basilica Santa Maria del Fiore",
            image : "https://duomo.firenze.it/application/mediaArchive/Image/bf53c2f5dbfca98d5d077a464e84b39c_visione%20%20insieme4.jpg",
            description : "Duomo of the city of Florence",
            information : "Florence Cathedral was designed at the end of the 13th century by Arnolfo di Cambio and is dedicated to Santa Maria del Fiore, a reference to the lily, the city's symbol. The third largest cathedral of the world (after Saint Peter's in Rome and Saint Paul's in London), at the time of its consecretation in 1436 it was the largest in Europe. The building was erected on top of the earlier Cathedral of Santa Reparata, the remains of which are accessible via the nave. The exterior, now clad in polychrome marble, remained incomplete for a long time; the original façade, which had been partially built to the design by Arnolfo di Cambio, was demolished at the end of the 16th century, and the current one was only erected at the end of the 19th century. Inside, the nave and two side aisles end in a vast choir where the main altar stands, surrounded by the tribune on which the Cupola rests. On the left wall are frescoes depicting two condottieri, Sir John Hawkwood (otherwise known as Giovanni Acuto) by Paolo Uccello, who also did the fresco decoration on the clock on the interior façade, and Niccolò da Tolentino by Andrea del Castagno. The 44 stained-glass windows were the work of leading 15th-century masters, including Donatello, Andrea del Castagno and Paolo Uccello.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.9862151769994!2d11.253771515346!3d43.773144979117326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5403bfe22ff5%3A0x5591438487aaf1f5!2sCattedrale%20di%20Santa%20Maria%20del%20Fiore!5e0!3m2!1sit!2sit!4v1654263552695!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "Free entrance",
            address : "Piazza del Duomo, 50122 Firenze FI, Italia",
            open : "Monday - Saturday from 10:15 to 16:45"
        },
        {
            title : "Torre di Palazzo Vecchio",
            image : "https://www.toscana.info/wp-content/uploads/sites/123/piazza-signoria-firenze.jpg",
            description : "Palace of amministration of the city",
            information : "Literally 'towering' over Florence, the 95 mt. high Tower of Palazzo Vecchio is one of the city's unmistakable symbols and focal points. It is also one of the oldest parts of the building built between 1299 and the early 14th century, possibly to a design by Arnolfo di Cambio, as the seat of the City Government. The spectacular view of Florence is nice from the top of the tower but also from the intermediate views during the ascent and to the suggestive path of the “Camminamento di Ronda”. It is recommended for children because the climb can be done easily despite the height and the high number of steps. Access to children is allowed from 6 years old.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.1713804914!2d11.253962215345897!3d43.76930117911743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5400e57893f9%3A0xe4e22be754c65787!2sPalazzo%20Vecchio!5e0!3m2!1sit!2sit!4v1654263613915!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "Full price € 12.50. For information about reduced tickets please check the website",
            address : "Piazza della Signoria, 50122 Firenze FI, Italia",
            open : "Friday - Wednesday from 09:00 to 17:00"
        },
        {
            title : "Basilica di Santa Maria Novella",
            image : "https://flawless.life/wp-content/uploads/2020/06/complesso-santa-maria-novella-cover.jpg",
            description : "The first rinascimental catedral of Florence",
            information : "The first of the great Florentine basilicas and the first large-scale Gothic building in the city, the Dominicans began constructing Santa Maria Novella soon after 1240; it was finished in 1357 but was not consecrated until 1420. In the following centuries it underwent various modifications, in particular the remodelling begun by Giorgio Vasari in 1566 and the 19th-century interventions designed to restore the Gothic appearance of the building. There are a number of important artworks in the church: Giotto’s Crucifix and a wooden Crucifix by Filippo Brunelleschi, Masaccio’s fresco of the Trinity and two chapels frescoed respectively by Domenico Ghirlandaio and Filippino Lippi. The rich polychrome-marble façade was completed in the second half of the 15th century by Leon Battista Alberti.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11523.657811934005!2d11.2493859!3d43.7746346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85e5747949866eb2!2sBasilica%20di%20Santa%20Maria%20Novella!5e0!3m2!1sit!2sit!4v1654268463243!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "Full price - Church and Museum € 7.50. For information about reduced tickets, please check on the website.",
            address : "Piazza di Santa Maria Novella, 18, 50123 Firenze FI, Italia",
            open : "Monday - Thursday from 09:30 to 17:30. Friday from 11:00 to 17:30"
        },
        {
            title : "Boboli Garden",
            image : "https://mywowo.net/media/images/cache/firenze_giardino_dei_boboli_01_prima_parte_jpg_1200_630_cover_85.jpg",
            description : "Amazing garden near Palazzo Pitti.",
            information : "The Medici family was the first to take care of the Boboli garden’s arrangement, creating the model of the Italian-style garden, then an example for many European courts, in which a rational order is given to the vegetation and the geometries of the avenues and plants are embellished with grottoes, statues and fountains. Opened to the public in 1766, it is a real open-air museum: valuable are the Roman statues and those of Renaissance sculptors such as Baccio Bandinelli and Giambologna; the amphitheatre, where court performances took place; the Grotta del Buontalenti, where Michelangelo's Prisons were placed (now replaced by copies).",
            iFrame : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11525.996452533216!2d11.2483996!3d43.7624972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x40c02f73b03d9b2!2sGiardino%20di%20Boboli!5e0!3m2!1sit!2sit!4v1654268651558!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest1.id,
            ticket : "Full price - High Season (March - October) € 10.00. Full price- Low Season (November - February) € 6.00.",
            address : "Giardino di Boboli, Piazza de' Pitti, 1, 50125 Firenze FI, Italia",
            open : "Monday - Sunday from 08:15 to 19:30"
        },
        {
            title : "Uffizi Gallery",
            image : "https://uffizi-webpromotersncva.netdna-ssl.com/wp-content/uploads/2016/03/uffizi-piazzale.jpg",
            description : "One of the most famous museum of the world.",
            information : "An elegant edifice designed by Giorgio Vasari, it was begun in 1560 to house the grand ducal offices. In 1574 Grand Duke Francesco I ordered the top story converted to display the Medici art treasures. The Uffizi’s collection, one of the most precious in the world, offers examples of painting from the 13th century through the 18th and includes most of the significant names in Florentine art. With its immense artistic legacy, the Uffizi Gallery, now The Uffizi, is one of the most important museums in the world. Following a substantial reorganization in the 17th century, which led to the transfer of some collections (arms, scientific instruments, archaeological finds, ancient and modern bronzes) to other sites and the establishment of new museums, the Uffizi mainly became a picture gallery, with thousands of works ranging from the 13th to the 18th centuries. After the suppression of churches and convents in the 18th and 19th centuries, many works of ecclesiastical provenance swelled the gallery’s collections; other important paintings were acquired at the beginning of the 20th century.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.2443871123414!2d11.253122115345835!3d43.767785579117536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a54008dc59081%3A0xcddeb7c89bf0c4cd!2sGalleria%20degli%20Uffizi!5e0!3m2!1sit!2sit!4v1654636334128!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "Full price - high season (March-October) € 20.00. Full price - low season (November-February) € 12.00.",
            address : "Piazzale degli Uffizi, 50122 Firenze FI, Italia",
            open : "Tuesday - Sunday from 08:15 to 18:50"
        },
        {
            title : "Palazzo Strozzi",
            image : "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/ac/a7/04/donatello-il-rinascimento.jpg?w=1200&h=-1&s=1",
            description : "One of the most important palace in Florence.",
            information : "The grandest palace in Florence is the Strozzi Palace, begun in 1489 for one of the city’s largest and wealthiest families (which, however, had been eclipsed politically by the Medici). Its enormous scale deliberately surpassed that of the Medici Palace. Noteworthy within the Strozzi Palace is a spacious courtyard, which by its use of arches and a loggia achieves a feeling of openness and simplicity.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.3711805052644!2d11.24781941534575!3d43.76515327911766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a515441db99f1%3A0x5cd0cce4e6f1502a!2sPalazzo%20Pitti!5e0!3m2!1sit!2sit!4v1654636377588!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "Full price € 8.00. For information about reduced tickets, please check on the website.",
            address : "Piazza di Santa Croce, 16, 50122 Firenze FI, Italia",
            open : "Monday - Saturday, from 09:30 to 17:30"
        },
        {
            title : "Piazzale Michelangelo",
            image : "https://cdn1.discovertuscany.com/img/florence/piazzas/piazzale-michelangelo-view.jpg?w=750&q=65",
            description : "Most famous panoramic point in Florence!",
            information : "The Piazzale Michelangelo was built on the hills located south of the Florence's historic center following the design of the architect Giuseppe Poggi. In 1869 Florence was the capital of Italy in this period, the whole city underwent an intense urban renewal, the 'lungarni' (riverside walkways following the Arno) were created; on the right side replacing the walls of the 14th century the bypass (Viali di Circonvallazione) was opened and to the left side a panoramic tree-lined street of 8 km, currently called Viale dei Colli, in which top was constructed the Piazzale Michelangelo, as a panoramic terrace on the city. In 1873 a copy of Michelangelo's David was taken to the square with the help of nine pairs of oxen. This monument occupies a privileged position, observing the city from above as a guard attentive to all the beauties that the city of Florence offers. This square was dedicated to the great Renaissance artist Michelangelo and the copy of the David was located in the center of the square next to the four allegories of the Medici Chapels of San Lorenzo. Poggi also designed the lodge in neoclassical style as a museum for the works of Michelangelo, but this museum was never built and currently houses a panoramic restaurant",
            iFrame : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11525.912799569485!2d11.2650561!3d43.7629314!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb4f768e1820d5119!2sPiazzale%20Michelangelo!5e0!3m2!1sit!2sit!4v1654637238937!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "Full price € 8.00. For information about reduced tickets, please check on the website.",
            address : "Piazza di Santa Croce, 16, 50122 Firenze FI, Italia",
            open : "Monday - Saturday, from 09:30 to 17:30"
        },
        {
            title : "Basilica di Santa Croce",
            image : "https://c9g6k7a7.stackpathcdn.com/wp-content/uploads/2021/07/istockphoto-1222429282-170667a.jpg",
            description : "Rinascimental cathedral in the center of  Florence",
            information : "Designed by Arnolfo di Cambio (1296), it is the largest Franciscan church in the world; it is also known as the 'Pantheon of Italian glories' for its illustrious tombs (Michelangelo, Galileo, Machiavelli, Rossini, Foscolo, Alfieri) that it preserves in the suggestive Gothic interior. Among the more than 200 tombs, the two Renaissance monuments stand out, masterpieces of Rossellino and Desiderio da Settignano. Of the numerous chapels in the transept, frescoed in the fourteenth century, authentic masterpieces are the Bardi and Peruzzi chapels, frescoed by Giotto; remarkable are also the works of Donatello (the Annunciation and the Crucifix). The famous Crucifix of Cimabue damaged by the 1966 flood, instead, is displayed in the sacristy. The museum itinerary includes the Cappella dei Pazzi, by Brunelleschi, the two cloisters and the Last Supper, frescoed by Taddeo Gaddi, a treasure chest of numerous works of art (Donatello, Orcagna, Domenico Veneziano).",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.2066846178254!2d11.260079015345866!3d43.76856827911753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a540723ccc331%3A0x8f8279649c131255!2sBasilica%20di%20Santa%20Croce%20di%20Firenze!5e0!3m2!1sit!2sit!4v1654637625340!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "Full price € 8.00. For information about reduced tickets, please check on the website.",
            address : "Piazza di Santa Croce, 16, 50122 Firenze FI, Italia",
            open : "Monday - Saturday, from 09:30 to 17:30"
        }, 
        {
            title : "Campanile di Giotto",
            image : "https://www.visita-firenze.it/storage/resize/medium/shutterstock_15485.jpg",
            description : "Tower very near to the Duomo",
            information : "The bell tower of Florence Cathedral, known as Giotto’s Campanile, was designed by the great 14th-century master. 84.7 metres tall and approximately 15 metres in breadth, it is the most eloquent example of the architecture of the period in Florence, combining a strong vertical thrust with the principle of sound solidity;  the terrace at the top offers a fabulous view of the city and of Brunelleschi’s Cupola. By the time Giotto died in 1337 he had completed only the first part of his bell tower. Andrea Pisano carried Giotto's design up to the first two levels, while artists such as Alberto Arnoldi adorned the outside with carved lozenges. Work was broken off for two years, between 1348 and 1350, but the bell tower was completed in 1359, after the terrible years of the Black Death, by Francesco Talenti.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11524.010180629675!2d11.2557051!3d43.772806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c4b8131377e75b8!2sCampanile%20di%20Giotto!5e0!3m2!1sit!2sit!4v1654674452378!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "Full price - Brunelleschi Pass (valid 3 days includes Dome, Bell Tower, Baptistery, Opera del Duomo Museum, Santa Reparata) € 30.00. Full price - Giotto Pass (valid 3 days includes Bell Tower, Baptistery, Opera del Duomo Museum, Santa Reparata) € 20.00. For information about reduced tickets, please check on the website",
            address : "Piazza del Duomo, 50122 Firenze FI, Italia",
            open : "Monday - Sunday from 08:15 to 19:45"
        }, 
        {
            title : "Battistero di San Giovanni",
            image : "https://www.10cose.it/wp-content/uploads/2015/12/battistero-san-giovanni-firenze.jpg",
            description : "San Giovanni Baptistery",
            information : "Remembered by Dante as “beautiful San Giovanni”, the octagonal-shaped Baptistery is one of the city’s oldest buildings; it acquired its current appearance in the 11th–12th centuries but probably dates as far back as the 5th century. The exterior is clad with green and white marble from Prato with geometric motifs and the dome has eight segments; decorative statues and low reliefs were added in the 16th century. The three bronze doors are the work of Andrea Pisano (South Doors, c.1330), and Lorenzo Ghiberti (North Doors, 1402–25, and East Doors, 1425–52). The East Doors, decorated with Scenes from the Old Testament, face the Cathedral and were declared by Michelangelo ‘worthy to be the Gates of Paradise’ (the original doors are now in the Museo dell’Opera del Duomo and have been replaced with copies). The tessellated marble floor inside dates to the end of the 12th century, while the gold-ground mosaics on the walls and cupola were executed between 1266 and the beginning of the following century by Venetian and Tuscan craftsmen. The Baptistery also houses the Tomb of Anti-Pope John XXIII, attributed to Donatello and Michelozzo and carved in the first half of the 15th century.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.9874545256043!2d11.252834514668987!3d43.77311925268737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5403bff30525%3A0x74a3341bfd1857d!2sBattistero%20di%20San%20Giovanni!5e0!3m2!1sit!2sit!4v1654674792439!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "Full price - Brunelleschi Pass (valid 3 days includes Dome, Bell Tower, Baptistery, Opera del Duomo Museum, Santa Reparata) € 30.00. Full price - Giotto Pass (valid 3 days includes Bell Tower, Baptistery, Opera del Duomo Museum, Santa Reparata) € 20.00. For information about reduced tickets, please check on the website",
            address : "Piazza San Giovanni, 50122 Firenze FI, Italia",
            open : "Monday - Sunday from 09:00 to 19:45"
        },
        {
            title : "Ponte Vecchio",
            image : "https://images.placesonline.com/photos/firenze_559857091_202300_1623852711.jpg?quality=80&w=700",
            description : "Oldest bridge in Florence",
            information : "Ponte Vecchio, one of Florence's landmarks, stands at the Roman bridge of ancient Florentia. Over the centuries the bridge was rebuilt several times, also due to the numerous floods of the Arno; following one of these (1333) it was decided to build a new, more stable one (with three arches supported by just two pillars, with a series of masonry shops on both sides). The bridge, built in 1345, probably designed by Taddeo Gaddi, is essentially what we can still admire today. The current goldsmiths' workshops - established in 1593 in place of the old butchers' and fishmongers' shops - make it the 'most precious bridge in the world'. The Corridoio Vasariano, (the passage allowing the Medici to move easily between Palazzo Vecchio and Palazzo Pitti, through the Uffizi) built by Giorgio Vasari in 1565 on commission of Cosimo I, runs right above these buildings. At the centre of the bridge you can admire the monument to Benvenuto Cellini (Raffaello Romanelli, 1900) and the remains of a 14th-century sundial. In August 1944, during the Nazi retreat, this was the only Florentine bridge that remained intact. The terrible flood of 1966, while causing serious damage, did not compromise its structure.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.237672282988!2d11.250954815345823!3d43.76792497911756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a56aaa2dcb667%3A0x40310ae830e702e8!2sPonte%20Vecchio!5e0!3m2!1sit!2sit!4v1654676351937!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest1.id,
            ticket : "No ticket needed.",
            address : "Ponte Vecchio, 50125 Firenze FI, Italia",
            open : "Open 7 days a week"
        },
        {
            title : "Ponte Santa Trinita",
            image : "https://www.visita-firenze.it/storage/resize/medium/shutterstock_5657.jpg",
            description : "One of the oldest and most famous bridge in Florence",
            information : "The original bridge was built in1252, and it was named after the nearby church. Like all of Florence's historical bridges, it was rebuilt several times following the numerous floods of the Arno; after the terrible one of 1557, Cosimo I de' Medici commissioned its reconstruction to Bartolomeo Ammannati, who was perhaps inspired by an idea of Michelangelo Buonarroti.  Made of pietra forte and decorated with commemorative epigraphs, it was considered the most elegant bridge in Florence, worthy of the grand ducal processions that used to pass over it. The statues at both ends are by Giovanni Caccini (Autumn and Summer), Taddeo Landini (Winter) and Pietro Francavilla (Spring). Destroyed by the Germans during the Second World War, it was rebuilt exactly 'as it was and where it was' in 1958.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.185947294103!2d11.248143815345879!3d43.76899877911746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5404c8afd5d9%3A0xd598096fc71132e6!2sPonte%20Santa%20Trinita!5e0!3m2!1sit!2sit!4v1654676063794!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest1.id,
            ticket : "No ticket needed.",
            address : "Ponte Santa Trinita, 50100 Firenze FI, Italia",
            open : "Open 7 days a week"
        },
        {
            title : "Giardino di Bobolino",
            image : "https://www.firenzegreenway.com/wp-content/uploads/2021/02/4-bobolino-358211.jpg",
            description : "Very nice public park for relax yourself",
            information : "This public park, located on Viale Machiavelli near Porta Romana, is a sloping garden, entirely made up of grassy slopes, steps and gravel yards with pretty green furniture solutions including tanks and artificial caves;the majestic 'Cedar of incense' located on the left side of the central flowerbed  is worth a mention.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.722815739041!2d11.24652381534546!3d43.75785247911782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5159c6430e05%3A0x438b4a3831ef8ded!2sGiardino%20del%20Bobolino!5e0!3m2!1sit!2sit!4v1654676583632!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest1.id,
            ticket : "No ticket needed.",
            address : "Giardino del Bobolino, Viale Machiavelli, 18, 50125 Firenze FI, Italia",
            open : "Open 7 days a week"
        },
        {
            title : "Giardino dell'Orticoltura",
            image : "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/71/63/48/giardino-dell-artecultura.jpg?w=1200&h=1200&s=1",
            description : "Beatiful garden in the city of Florence.",
            information : "In 1854 the 'Società Toscana d'Orticultura' (Tuscan Society of Horticulture) was constituted. In the second half of the 19th century the garden got larger and Giacomo Roster designed the big tepidarium, inaugurated in 1880. The little loggia 'Bondi' by the architect Castellucci was realized in 1911. The Municipality of Florence bought the garden in 1930 and designated the area as a public garden. In 1990 the 'snake' was completed with decorations of different materials following the project of Marco Dezzi Bardeschi. Inside the garden there is also a playground for children.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.3432289130037!2d11.258881815346488!3d43.78649047911689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a542280a78f85%3A0x2f67ac42295add0d!2sGiardino%20dell&#39;Orticoltura!5e0!3m2!1sit!2sit!4v1654696580687!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest1.id,
            ticket : "No ticket needed.",
            address : "Via Vittorio Emanuele II, 4, 50139 Firenze FI, Italia",
            open : "Monday - Sunday from 08:30 to 18:00 *** PLEASE NOTE:THE GARDEN WILL BE TEMPORARILY OPEN FROM MONDAY TO SUNDAY FROM 9:30 TO 20:00. INFO: www.societatoscanaorticultura.it"
        },
        {
            title : "Medici Ricciardi Palace",
            image : "https://www.palazzomediciriccardi.it/wp-content/uploads/2018/09/Palazzo-Medici-Riccardi-fullhd.jpg",
            description : "The old house of the Medici family (before Palazzo Pitti)",
            information : "Commissioned in 1444 by Cosimo the Elder, the residence of the Medici family constitutes a model of civil architecture in the Renaissance. Not only private residence of the members of the family, among which Lorenzo the Magnificent, the palace performs its public function by welcoming important political figures. The  monumental courtyard of the palace leads up to the Chapel of the Magi, built to a design by Michelozzo and frescoed in 1459 by Benozzo Gozzoli with the Procession of the Magi. On the altar is a copy of the original altarpiece painted by Filippo Lippi. The Sala Sonnino on the first floor is decorated with a series of 31 low reliefs probably produced by the workshop of Bartolomeo Ammannati under the strong influence of Michelangelo. The Sala Sonnino leads into the Gallery, its vault is embellished with frescoes by Luca Giordano representing the Apology of the Medici Family, the protectors of the Riccardi. Three rooms in the palace basement house the Roman sculptures collected in the 16th–17th centuries by the Riccardi family. The museum organizes activities and workshops for families with children and school groups",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.8876875700403!2d11.253586215346063!3d43.775190179117345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a54031be7011b%3A0x8fcb8659c80d7240!2sPalazzo%20Medici%20Riccardi!5e0!3m2!1sit!2sit!4v1654677315322!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "Full price € 7.00. Full price in case of exhibitions € 10.00. For information about reduced tickets please check on the website",
            address : "Via Camillo Cavour, 3, 50129 Firenze FI, Italia",
            open : "Thursday - Tuesday from 09:00 to 19:00"
        },
        {
            title : "Rose Garden",
            image : "https://www.055firenze.it/ridimensiona.html/cms/660/660/000/cms/custom/files/100005/ct50012_id122402_t1/4349888938_b37efbc410_z.jpg",
            description : "Garden right below Piazzale Michelangelo.",
            information : "The Rose garden is a green terrace right below Piazzale Michelangelo overlooking the historic centre of the city and enjoying a breath-taking view equal in beauty to that from Forte Belvedere. The Garden has been entirely redesigned better to display the works by Folon. Visitors will be able to admire the unique view of Santa Maria del Fiore and Palazzo Vecchio through the big suitcase of Partir; they will rest next to Folon’s man on the timeless bench of Je me souviens; they will stroke the Chat, the large cat sleeping on the grass among rosebushes. In the garden there is also a ... corner of Japan! The Japanese garden was donated to the Municipality of Florence by the twin city of Kyoto.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.4753302515387!2d11.260603315345644!3d43.76299097911772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a53f9e6f03551%3A0xe76b4f3dd060f63a!2sGiardino%20delle%20Rose!5e0!3m2!1sit!2sit!4v1654677808421!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest1.id,
            ticket : "No ticket needed.",
            address : "Giardino delle Rose, Viale Giuseppe Poggi, 2, 50125 Firenze FI, Italia",
            open : "Monday - Saturday from 09:00 to 20:00. Sunday and holidays from 10:00 to 20:00."
        },
        {
            title : "G.A.M. - Palazzo Pitti",
            image : "https://www.imuseidifirenze.it/wp-content/uploads/2019/02/palazzo-pitti-firenze-1024x577.jpg",
            description : "Old residence of the Medici family in Florence.",
            information : "Situated on the second floor of Palazzo Pitti, the thirty rooms of the Modern Art Gallery contain paintings and sculptures, for the most part Italian, from the end of the 18th century through to the First World War. There is Neoclassical and Romantic art, an extensive selection of Macchiaioli paintings and works of the Italian schools of the second half of the 19th century (Decadentism, Symbolism, Post-Impressionism, Divisionism) and early 20th-century art movements.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11525.484717997688!2d11.2500081!3d43.7651533!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5cd0cce4e6f1502a!2sPalazzo%20Pitti!5e0!3m2!1sit!2sit!4v1654690075990!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "Full price - high season (March-October) € 16.00. Full price - low season (November-February) € 10.00",
            address : "Piazza de' Pitti, 1, 50125 Firenze FI, Italia",
            open : "Tuesday - Sunday from 08:15 to 18:50. Closed: Monday , December 25th, January 1st. The ticket office closes at 17:30"
        },
        {
            title : "Piazza Santissima Annunziata",
            image : "https://www.visittuscany.com/shared/visittuscany/immagini/attivita/innocents-museum-florence.jpg",
            description : "Square characterised by the Renaissance aspect",
            information : "The Piazza della Santissima Annunziata is characterised by the Renaissance aspect which Brunelleschi conferred in it with the construction of the colonnade for the Ospedale degli Innocenti. The elegant harmony of the hospital building conditions the entire square, and the colonnade itself is later repeated in the Loggiato dei Serviti, and in the façade of the church. As a result Brunelleschi’s design assumes a certain urbanistic importance, underlined by the fact that this square is one of the few points of the city from which one can see the cupola of the Cathedral, the monumental symbol of the fifteenth century city. The square has also always played a significant role in the religious, cultural and economic life of Florence, which is closely related to the religious institute of the Servants of Mary. In fact the presence of an image of the Annunciation which is believed to be miraculous has made the church of Santissima Annunziata an important centre of devotion, and a destination for pilgrimages and processions. As well as this, the fact that in Florence the feast of the Annunciation (25 March) coincided up until 1750 with the start of the new civil year, made the square the obvious choice for the celebration of this holiday which was both civic and religious. This square also hosts one of the most typical traditions, the Rificolona. This Florentine Feast is held every September 7th, the night before the Nativity of the Virgin Mary.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.8286328375775!2d11.258414865346108!3d43.77641597911727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5404d4f23393%3A0xdac6cafc2c6474c4!2sPiazza%20della%20Santissima%20Annunziata%2C%20Firenze%20FI!5e0!3m2!1sit!2sit!4v1654690746364!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "No ticket needed.",
            address : "Piazza della Santissima Annunziata, Firenze",
            open : "Open 7 days a week"
        },
        {
            title : "Fortezza da Basso",
            image : "https://upload.wikimedia.org/wikipedia/commons/6/63/Fortezza_da_basso%2C_11.JPG",
            description : "Fortezza designed in 1500",
            information : "Designed by Antonio da Sangallo the Younger (1533-35), the Fortezza has been completely remodeled and is now an exhibition and conference center. This complex and prestigious environment combines charming and perfectly restored historic places (such as the Quartieri Monumentali - the Monumental Area - or the Polveriera) with modern pavilions, specifically built to increase the space availability, such as the Spadolini Pavilion and the more recently built Cavaniglia Pavilion.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11522.294821185724!2d11.2487085!3d43.7817072!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdae6de98479783b0!2sFortezza%20da%20Basso!5e0!3m2!1sit!2sit!4v1654856909196!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "The entrance fee depends on the events hosted.",
            address : "Viale Filippo Strozzi, 1, 50129 Firenze FI, Italia",
            open : "Open during temporary exhibitions and events."
        }

    ]
    const pointOfInterest0 = await models.PointOfInterest.create(pointOfInterestsList[0]) //ITINERARIO 1
    const pointOfInterest1 = await models.PointOfInterest.create(pointOfInterestsList[1]) //ITINERARIO 3
    const pointOfInterest2 = await models.PointOfInterest.create(pointOfInterestsList[2]) //ITINERARIO 1
    const pointOfInterest3 = await models.PointOfInterest.create(pointOfInterestsList[3]) //ITINERARIO 2
    const pointOfInterest4 = await models.PointOfInterest.create(pointOfInterestsList[4]) //ITINERARIO 3
    const pointOfInterest5 = await models.PointOfInterest.create(pointOfInterestsList[5]) //ITINERARIO 3 
    const pointOfInterest6 = await models.PointOfInterest.create(pointOfInterestsList[6]) //ITINERARIO 2
    const pointOfInterest7 = await models.PointOfInterest.create(pointOfInterestsList[7]) //ITINERARIO 1
    const pointOfInterest8 = await models.PointOfInterest.create(pointOfInterestsList[8]) //ITINERARIO 1
    const pointOfInterest9 = await models.PointOfInterest.create(pointOfInterestsList[9]) //ITINERARIO 1
    const pointOfInterest10 = await models.PointOfInterest.create(pointOfInterestsList[10]) //ITINERARIO 2
    const pointOfInterest11 = await models.PointOfInterest.create(pointOfInterestsList[11]) //ITINERARIO 2
    const pointOfInterest12 = await models.PointOfInterest.create(pointOfInterestsList[12]) //ITINERARIO 2
    const pointOfInterest13 = await models.PointOfInterest.create(pointOfInterestsList[13]) //ITINERARIO 2
    const pointOfInterest14 = await models.PointOfInterest.create(pointOfInterestsList[14]) //ITINERARIO 3
    const pointOfInterest15 = await models.PointOfInterest.create(pointOfInterestsList[15]) //ITINERARIO 2
    const pointOfInterest16 = await models.PointOfInterest.create(pointOfInterestsList[16]) //TINERARIO 3
    const pointOfInterest17 = await models.PointOfInterest.create(pointOfInterestsList[17]) //ITINERARIO 2
    const pointOfInterest18 = await models.PointOfInterest.create(pointOfInterestsList[18])
    //models.PointOfInterest.create(pointOfInterestsList[1])
    const typeEventList = [
        {
            type_name : "Summer Events"
        },
        {
            type_name : "Winter Events"
        }
    ]
    const typeEvent0 = await models.TypeEvent.create(typeEventList[0])
    const typeEvent1 = await models.TypeEvent.create(typeEventList[1])
    const eventList = [
        {
            title : "Scoppio del carro",
            image : "https://www.ansa.it/webimages/img_457x/2022/4/17/483328650a7ad0e54683b1e6e4e1b44b.jpg",
            description : "traditional party for easter",
            information :"it takes place in piazza duomo",
            date : "2022-04-15",
            pointOfInterestId : pointOfInterest0.id,
            typeEventId : typeEvent0.id
        },
        {
            title : "Calcio Storico",
            image : "https://i.ytimg.com/vi/aYB2RlTxMhk/maxresdefault.jpg",
            description : "traditional game",
            information :"it takes place in piazza della signoria",
            date : "2022-10-15",
            pointOfInterestId : pointOfInterest1.id,
            typeEventId : typeEvent1.id
        },
        {
            title : "Fuochi di San Giovanni",
            image : "https://www.firenzetoday.it/~media/horizontal-hi/356682651955/fuochi-artificio-2.jpg",
            description : "festa del patrono",
            information :"it takes place sul lung'arno",
            date : "2022-10-15",
            pointOfInterestId : pointOfInterest1.id,
            typeEventId : typeEvent1.id
        },
        {
            title : "Festa della Rificolona",
            image : "https://www.ilturista.info/repo/images/no/Rificolona.jpg",
            description : "festa della rificolona",
            information :"it takes place sul lung'arno",
            date : "2022-10-15",
            endDate : "2022-10-22",
            pointOfInterestId : pointOfInterest1.id,
            typeEventId : typeEvent1.id
        },
        {
            title : "Pitti Immagine",
            image : "https://massimilianosorvino.it/wp-content/uploads/2019/06/Pitti-Uomo.png",
            description : "tra gli eventi di moda più importanti d'italia",
            information :"it takes place alla fortezza",
            date : "2022-10-15",
            pointOfInterestId : pointOfInterest0.id,
            typeEventId : typeEvent0.id
        }
    ]
    const event0 = await models.Event.create(eventList[0])
    const event1 = await models.Event.create(eventList[1])
    const event2 = await models.Event.create(eventList[2])
    const event3 = await models.Event.create(eventList[3])
    const event4 = await models.Event.create(eventList[4])
    const typeServiceList = [
        {
            type_name : "pharmacy",
            image : "https://cdn.farmaciediturno.org/foto728/f_8226.jpg" 
        },
        {
            type_name : "bank",
            image : "https://upload.wikimedia.org/wikipedia/commons/b/b5/Firenze_-_Banca_Toscana_Piazza_Della_Signoria.jpg"
        },
        {
            type_name : "supermarket",
            image : "https://www.coopfirenze.it/uploads/38598/news/coopfi.jpg"
        }
    ]
    const typeService0 = await models.TypeService.create(typeServiceList[0])
    const typeService1 = await models.TypeService.create(typeServiceList[1])
    const typeService2 = await models.TypeService.create(typeServiceList[2])
    const ItineraryPointOfInterestList = [
        {
            itineraryId : itinerary0.id,
            pointOfInterestId : pointOfInterest0.id
        },
        {
            itineraryId : itinerary0.id,
            pointOfInterestId : pointOfInterest2.id
        },
        {
            itineraryId : itinerary0.id,
            pointOfInterestId : pointOfInterest7.id
        },
        {
            itineraryId : itinerary0.id,
            pointOfInterestId : pointOfInterest8.id
        },
        {
            itineraryId : itinerary0.id,
            pointOfInterestId : pointOfInterest9.id
        },
        {
            itineraryId : itinerary1.id,
            pointOfInterestId : pointOfInterest10.id
        },
        {
            itineraryId : itinerary1.id,
            pointOfInterestId : pointOfInterest11.id
        },
        {
            itineraryId : itinerary1.id,
            pointOfInterestId : pointOfInterest12.id
        },
        {
            itineraryId : itinerary1.id,
            pointOfInterestId : pointOfInterest13.id
        },
        {
            itineraryId : itinerary1.id,
            pointOfInterestId : pointOfInterest15.id
        },
        {
            itineraryId : itinerary1.id,
            pointOfInterestId : pointOfInterest17.id
        },
        {
            itineraryId : itinerary2.id,
            pointOfInterestId : pointOfInterest1.id
        },
        {
            itineraryId : itinerary1.id,
            pointOfInterestId : pointOfInterest3.id
        },
        {
            itineraryId : itinerary2.id,
            pointOfInterestId : pointOfInterest4.id
        },
        {
            itineraryId : itinerary2.id,
            pointOfInterestId : pointOfInterest5.id
        },
        {
            itineraryId : itinerary1.id,
            pointOfInterestId : pointOfInterest6.id
        },
        {
            itineraryId : itinerary2.id,
            pointOfInterestId : pointOfInterest14.id
        },
        {
            itineraryId : itinerary2.id,
            pointOfInterestId : pointOfInterest16.id
        }
    ]
    ItineraryPointOfInterestList.map((item) => models.ItineraryPointOfInterest.create(item))
    const EventPointOfInterestList = [
        {
            eventId : event0.id,
            pointOfInterestId : pointOfInterest0.id
        },
        {
            eventId : event1.id,
            pointOfInterestId : pointOfInterest0.id
        },
        {
            eventId : event0.id,
            pointOfInterestId : pointOfInterest1.id
        },
    ]
    EventPointOfInterestList.map((item) => models.EventPointOfInterest.create(item))
    const serviceList = [
        {
            name : "Pharmacy Santa Maria Novella",
            image : "https://d1e00ek4ebabms.cloudfront.net/production/0c09b29c-f361-473d-a6d9-b08bdfe156c0.jpg",
            description : "Pharmacy in piazza SM Novella",
            information : "Pharmacy",
            iFrame : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5761.877428064988!2d11.247742!3d43.774131!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7b1cdc4af6c0fb7a!2sOfficina%20Profumo-Farmaceutica%20di%20Santa%20Maria%20Novella!5e0!3m2!1sit!2sit!4v1654259091272!5m2!1sit!2sit",
            typeServiceId : typeService0.id,
            address : "Piazza Santa Maria Novella, Firenze",
            open : "7 days a week"
        },
        {
            name : "Santa Maria Novella Intesa San Paolo",
            image : "https://www.italicom.net/site/wp-content/uploads/2019/11/intesa-sanpaolo-1.jpg",
            description : "Bank in piazza SM Novella",
            information : "Bank",
            iFrame: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.8865321122025!2d11.221774915346778!3d43.795967479116655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a56ee8918d15d%3A0x88e5c2788936c6ed!2sIntesa%20Sanpaolo%20S.p.A.!5e0!3m2!1sit!2sit!4v1654263266285!5m2!1sit!2sit",
            typeServiceId : typeService1.id
        },
        {
            name : "Farmacia Comunale Canova",
            image : "https://s3-media0.fl.yelpcdn.com/bphoto/ExPlzD-hUZio7HfeU7rv0A/258s.jpg",
            description : "Pharmacy",
            information : "Pharmacy",
            iFrame : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11522.799887876075!2d11.198619!3d43.7790865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5cb29e1d48917bc5!2sFarmacia%20Comunale%20Canova%20-%20Apoteca%20Natura!5e0!3m2!1sit!2sit!4v1654263120623!5m2!1sit!2sit",
            typeServiceId : typeService0.id
        },
    ]
    serviceList.map(service => models.Service.create(service))
}