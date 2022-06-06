const express = require('express')
const app = express()
const initialize = require('./initialize').default
const initializeDatabaseConnection = require('./initializeDatabaseConnection').default
app.use(express.json())

async function startApplicationServer() {
    const models = await initializeDatabaseConnection();
    initialize(models)

    app.get("/pointOfInterests", async (req, res) => {
        const pointOfInterestsList = await models.PointOfInterest.findAll();
        return res.json(pointOfInterestsList)
    })

    app.get('/pointOfInterests/:id', async (req, res) => {
        const id = +req.params.id
        console.log(id)
        const result = await models.PointOfInterest.findOne({ where: { id : id }}) 
        return res.json(result)
    })

    app.get('/pointOfInterests/itinerariesInvolved/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.ItineraryPointOfInterest.findAll({ where: { pointOfInterestId : id }})
        let itineraries = []
        for(let i=0; i<result.length; i++){
            itineraries.push(await models.Itinerary.findOne({ where : {id : result[i].itineraryId}}))
        }
        return res.json(itineraries)
    })

    app.get('/pointOfInterests/eventsInvolved/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.EventPointOfInterest.findAll({ where: { pointOfInterestId : id }})
        let events = []
        for(let i=0; i<result.length; i++){
            events.push(await models.Event.findOne({ where : {id : result[i].eventId}}))
        }
        return res.json(events)
    })

    app.post("/findInterests", async (req, res) => {
        const id = req.body.id;
        const interestsList = await models.PointOfInterest.findAll({
            where: {
              typePointOfInterestId: id
            }
          });
        return res.json(interestsList)
    })

    app.get("/events", async (req, res) => {
        const eventsList = await models.Event.findAll();
        return res.json(eventsList)
    })

    app.get('/events/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Event.findOne({ where: { id }}) 
        return res.json(result)
    })

    app.get('/events/pointOfInterestsInvolved/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.EventPointOfInterest.findAll({ where: { eventId : id }})
        let pointOfInterests = []
        for(let i=0; i<result.length; i++){
            pointOfInterests.push(await models.PointOfInterest.findOne({ where : {id : result[i].pointOfInterestId}}))
        }
        return res.json(pointOfInterests)
    })

    app.post("/findEvents", async (req, res) => {
        const id = req.body.id;
        const eventsList = await models.Event.findAll({
            where: {
              typeEventId: id
            }
          });
        return res.json(eventsList)
    })

    app.get("/itineraries", async (req, res) => {
        const itinerariesList = await models.Itinerary.findAll();
        return res.json(itinerariesList)
    })

    app.get('/itineraries/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Itinerary.findOne({ where: { id }}) 
        return res.json(result)
    })

    app.get('/itineraries/pointOfInterestsInvolved/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.ItineraryPointOfInterest.findAll({ where: { itineraryId : id }})
        let pointOfInterests = []
        for(let i=0; i<result.length; i++){
            pointOfInterests.push(await models.PointOfInterest.findOne({ where : {id : result[i].pointOfInterestId}}))
        }
        return res.json(pointOfInterests)
    })

    app.post("/findItineraries", async (req, res) => {
        const id = req.body.id;
        const itineraryList = await models.Itinerary.findAll({
            where: {
              typeItineraryId: id
            }
          });
        return res.json(itineraryList)
    })

    app.get("/services", async (req, res) => {
        const servicesList = await models.Service.findAll();
        return res.json(servicesList)
    })

    app.get('/services/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Service.findAll({ where: { typeServiceId : id }}) 
        return res.json(result)
    })

    app.get("/servicesType", async (req, res) => {
        const typeServiceList = await models.TypeService.findAll();
        return res.json(typeServiceList)
    })

    app.get('/servicesType/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.TypeService.findOne({ where: { id }}) 
        return res.json(result)
    })

    app.get("/pointOfInterestsType", async (req, res) => {
        const typePointOfInterestList = await models.TypePointOfInterest.findAll();
        return res.json(typePointOfInterestList)
    })

    app.get("/itinerariesType", async (req, res) => {
        const typeItinerariestList = await models.TypeItinerary.findAll();
        return res.json(typeItinerariestList)
    })

    app.get("/eventsType", async (req, res) => {
        const typeEventstList = await models.TypeEvent.findAll();
        return res.json(typeEventstList)
    })

    
    
}

startApplicationServer();

export default app


