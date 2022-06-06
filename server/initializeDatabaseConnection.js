const { Sequelize, DataTypes } = require("sequelize")

//Development
//const database = new Sequelize("postgres://postgres:pippo@localhost:5432/hyp_project")
//const database = new Sequelize("postgres://ztcxierawojlvx:1c38bd99e63fcec52d05abde0eabce5040ac413f46ae8cec45dbd1fd39f361ef@ec2-3-248-121-12.eu-west-1.compute.amazonaws.com:5432/d7akilp0g8abd2")

// Production (use this code when deploying to production in Heroku)
const pg = require('pg')
pg.defaults.ssl = true
const database = new Sequelize('postgres://ztcxierawojlvx:1c38bd99e63fcec52d05abde0eabce5040ac413f46ae8cec45dbd1fd39f361ef@ec2-3-248-121-12.eu-west-1.compute.amazonaws.com:5432/d7akilp0g8abd2', {
    dialect : 'postgres',
    protocol : 'postgres',
    ssl: true,
    dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
})


// Function that will initialize the connection to the database
export default async function initializeDatabaseConnection() {
    await database.authenticate()
    const PointOfInterest = database.define("point_of_interest", {
        title : DataTypes.STRING,
        image : DataTypes.STRING,
        description : DataTypes.STRING,
        information : DataTypes.STRING,
        iFrame : DataTypes.STRING(1000)
    })
    const Itinerary = database.define("itinerary", {
        title : DataTypes.STRING,
        image : DataTypes.STRING,
        description : DataTypes.STRING,
        information : DataTypes.STRING,
        duration : DataTypes.INTEGER,
    })
    const Event = database.define("event", {
        title : DataTypes.STRING,
        image : DataTypes.STRING,
        description : DataTypes.STRING,
        information : DataTypes.STRING,
        startDate : DataTypes.DATE,
        endDate : DataTypes.DATE
    })
    const Service = database.define("service", {
        name : DataTypes.STRING,
        image : DataTypes.STRING,
        description : DataTypes.STRING,
        information : DataTypes.STRING,
        iFrame : DataTypes.STRING(1000)
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