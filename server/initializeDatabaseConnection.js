const { Sequelize, DataTypes } = require("sequelize")

//Development
//const database = new Sequelize("postgres://postgres:pippo@localhost:5432/hyp_project")

//Production (use this code when deploying to production in Heroku)
const pg = require('pg')
pg.defaults.ssl = true
const database = new Sequelize(process.env.DATABASE_URL, {
    ssl: true,
    dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
})


// Function that will initialize the connection to the database
export default async function initializeDatabaseConnection() {
    await database.authenticate()
    const PointOfInterest = database.define("point_of_interest", {
        title : DataTypes.STRING,
        image : DataTypes.STRING,
        description : DataTypes.STRING(1000),
        information : DataTypes.STRING(10000),
        iFrame : DataTypes.STRING(1000),
        ticket : DataTypes.STRING(1000),
        address : DataTypes.STRING,
        open : DataTypes.STRING
    })
    const Itinerary = database.define("itinerary", {
        title : DataTypes.STRING,
        image : DataTypes.STRING,
        description : DataTypes.STRING,
        information : DataTypes.STRING,
        duration : DataTypes.INTEGER,
        ticket : DataTypes.STRING(1000)
    })
    const Event = database.define("event", {
        title : DataTypes.STRING,
        image : DataTypes.STRING,
        description : DataTypes.STRING(1000),
        information : DataTypes.STRING(10000),
        date : DataTypes.DATE,
        endDate : DataTypes.DATE,
        ticket : DataTypes.STRING(1000),
    })
    const Service = database.define("service", {
        name : DataTypes.STRING,
        image : DataTypes.STRING,
        description : DataTypes.STRING,
        information : DataTypes.STRING(1000),
        iFrame : DataTypes.STRING(1000),
        address : DataTypes.STRING,
        open : DataTypes.STRING
    })
    const TypePointOfInterest = database.define("type_point_of_interest", {
        type_name : DataTypes.STRING
    })
    const TypeService = database.define("type_service", {
        type_name : DataTypes.STRING,
        image : DataTypes.STRING
    })
    const TypeItinerary = database.define("type_itinerary", {
        type_name : DataTypes.STRING
    })
    const TypeEvent = database.define("type_event", {
        type_name : DataTypes.STRING
    })
    const ItineraryPointOfInterest = database.define("itinerary_point_of_interest", {})
    const EventPointOfInterest = database.define("event_point_of_interest", {})
    /*Itinerary.hasMany(PointOfInterest)
    PointOfInterest.belongsTo(Itinerary)*/
    Itinerary.belongsToMany(PointOfInterest, { through: ItineraryPointOfInterest });
    PointOfInterest.belongsToMany(Itinerary, { through: ItineraryPointOfInterest });
    /*Event.belongsTo(PointOfInterest)
    TypePointOfInterest.hasMany(PointOfInterest)*/
    Event.belongsToMany(PointOfInterest, { through: EventPointOfInterest });
    PointOfInterest.belongsToMany(Event, { through: EventPointOfInterest });
    PointOfInterest.belongsTo(TypePointOfInterest)
    TypeService.hasMany(Service)
    Service.belongsTo(TypeService)
    TypeItinerary.hasMany(Itinerary)
    Itinerary.belongsTo(TypeItinerary)
    TypeEvent.hasMany(Event)
    Event.belongsTo(TypeEvent)
    await database.sync({ force: true })
    return {
        PointOfInterest,
        Itinerary,
        TypePointOfInterest,
        TypeService,
        TypeItinerary,
        TypeEvent,
        Event,
        Service,
        ItineraryPointOfInterest,
        EventPointOfInterest
    }
}