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
            title : "Itinerario 1",
            image : "https://images.ctfassets.net/bth3mlrehms2/41De5lKWlqJmU80JghXZDS/65f2121e4649d8fa24182466e849c400/Skyline_of_Florence__Italy.jpg?w=520&h=292&fl=progressive&q=50&fm=jpg",
            description : "Visita guidata nel centro di firenze",
            information : "Visita in italiano",
            duration : 2,
            typeItineraryId : typeItinerary0.id
        },
        {
            title : "Itinerario 2",
            image : "https://www.the-travel-bunny.com/wp-content/uploads/2021/05/2-days-in-florence-itinerary.jpg",
            description : "Visita guidata lungo l'arno",
            information : "Visita in italiano",
            duration : 8,
            typeItineraryId : typeItinerary1.id
        }
    ]
    const itinerary0 = await models.Itinerary.create(itineraryList[0])
    const itinerary1 = await models.Itinerary.create(itineraryList[1])
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
            information : "Most beautiful building in the center of the city",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.9862151769994!2d11.253771515346!3d43.773144979117326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5403bfe22ff5%3A0x5591438487aaf1f5!2sCattedrale%20di%20Santa%20Maria%20del%20Fiore!5e0!3m2!1sit!2sit!4v1654263552695!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id
        },
        {
            title : "Palazzo Vecchio",
            image : "https://www.toscana.info/wp-content/uploads/sites/123/piazza-signoria-firenze.jpg",
            description : "Palace of amministration of the city",
            information : "There where the Medici a while ago",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.1713804914!2d11.253962215345897!3d43.76930117911743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5400e57893f9%3A0xe4e22be754c65787!2sPalazzo%20Vecchio!5e0!3m2!1sit!2sit!4v1654263613915!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id
        },
        {
            title : "Basilica di Santa Maria Novella",
            image : "https://flawless.life/wp-content/uploads/2020/06/complesso-santa-maria-novella-cover.jpg",
            description : "Rinascimental catedral",
            information : "Near the central station",
            iFrame : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11523.657811934005!2d11.2493859!3d43.7746346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85e5747949866eb2!2sBasilica%20di%20Santa%20Maria%20Novella!5e0!3m2!1sit!2sit!4v1654268463243!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id
        },
        {
            title : "Giardino di Boboli",
            image : "https://mywowo.net/media/images/cache/firenze_giardino_dei_boboli_01_prima_parte_jpg_1200_630_cover_85.jpg",
            description : "Amazing garden",
            information : "Near of Palazzo Pitti",
            iFrame : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11525.996452533216!2d11.2483996!3d43.7624972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x40c02f73b03d9b2!2sGiardino%20di%20Boboli!5e0!3m2!1sit!2sit!4v1654268651558!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest1.id
        }
    ]
    const pointOfInterest0 = await models.PointOfInterest.create(pointOfInterestsList[0])
    const pointOfInterest1 = await models.PointOfInterest.create(pointOfInterestsList[1])
    const pointOfInterest2 = await models.PointOfInterest.create(pointOfInterestsList[2])
    const pointOfInterest3 = await models.PointOfInterest.create(pointOfInterestsList[3])
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
            itineraryId : itinerary1.id,
            pointOfInterestId : pointOfInterest0.id
        },
        {
            itineraryId : itinerary0.id,
            pointOfInterestId : pointOfInterest1.id
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
            typeServiceId : typeService0.id
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