<template>
    <div>
        <nav-bar></nav-bar>
        <breadcrumbs :page1="`${previousLink} Points of Interest`" :page2="pointOfInterest.title" pageBack="/interest" :params="previousLink" style="margin-top : 15px"></breadcrumbs>
        <div class="d-flex justify-content-around grey-card" style="flex-wrap: wrap;">
            <div>
                <h1>{{pointOfInterest.title}}</h1>
                <h6>{{pointOfInterest.description}}</h6>
            </div>
            <img id="top-img" height="600px" :src="`${pointOfInterest.image}`"/>
        </div>
        <div class="info-card">
            <h3 class="d-flex justify-content-center title">DESCRIPTION & INFO</h3>
            <div class="d-flex justify-content-center" style="flex-wrap: wrap;">
                <div class="mx-auto" style="margin-bottom : 10px">
                    <p style="padding : 0 40px">{{pointOfInterest.information}}</p>
                </div>
                <!--<div class="vl"></div>-->
                <div class="d-flex flex-column align-items-center" style="padding : 0px 40px">
                    <h5>ADDRESS</h5>
                    <div>{{pointOfInterest.address}}</div>
                    <h5 style="margin-top : 20px">TICKET INFORMATION</h5>
                    <div>{{pointOfInterest.ticket}}</div>
                    <h5 style="margin-top : 20px">OPEN HOURS</h5>
                    <div>{{pointOfInterest.open}}</div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center title">
            <div>
            <h3 class="d-flex justify-content-center title">INVOLVED IN THESE ITINERARIES</h3>
            <div class="d-flex justify-content-center" style="flex-wrap: wrap;">
            <card v-for="(itinerary, itineraryIndex) of itineraries" 
          :key="`itinerary-index-${itineraryIndex}`"
          :id="`${itinerary.id}`"
          :typeOfPage="`itinerary`"
          :title="`${itinerary.title}`"
          :image="`${itinerary.image}`"
          :description="`${itinerary.description}`">
          </card>
          </div>
          </div>
        </div>
        <div class="d-flex justify-content-center" v-if="events.length!==0">
            <div>
            <h3 class="d-flex justify-content-center title">HOSTS THESE EVENTS</h3>
            <div class="d-flex justify-content-center title" style="flex-wrap: wrap;">
        <card 
            v-for="(event, eventIndex) of events" 
          :key="`event-index-${eventIndex}`"
          :id="`${event.id}`"
          :typeOfPage="`event`"
          :title="`${event.title}`"
          :image="`${event.image}`"
          :description="`${event.description}`"
           :date="`${event.date}`"
          :endDate="`${event.endDate}`"></card>
            </div>
            </div>
        </div>
        <h3 class="d-flex justify-content-center title">CITY MAP</h3>
        <div class="d-flex justify-content-center">
            <iframe :src="`${pointOfInterest.iFrame}`" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <footer-icon></footer-icon>
    </div>
</template>

<style scoped>
.grey-card{
    background-color: #dfdfdf;
}
@media screen and (max-width: 600px){
#top-img{
    width: 100%;
    height: 100%;
}
}
@media screen and (min-width: 600px) {
.vl {
  border-left: 1px solid black;
  height: 100px;
}
}
.info-card {
    margin: 40px 0;
}
.title{
    margin-bottom : 20px
}
.material-symbols-outlined {
    width: 600px;
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
</style>



<script>
import Breadcrumbs from '../../components/Breadcrumbs.vue'
import Card from '../../components/Card.vue'
import CardNoButton from '../../components/CardNoButton.vue'
import Carousel from '../../components/Carousel.vue'
import NavBar from '../../components/NavBar.vue'
export default {
  components: { Carousel, Card, CardNoButton, NavBar, Breadcrumbs},
    data() {
        return {
            pointOfInterest : undefined, //variable in which will be stored the data of the specific selected p.o.i. (retrieved from databse)
            itineraries : undefined, //variable in which will be stored the list of all the itineraries that are involved in the selected p.o.i. (retrieved from databse)
            events : undefined, //variable in which will be stored the list of all the events that are involved in the selected p.o.i. (retrieved from databse)
            activeCardIndex : undefined, //represent the id of the selected card (the one highlighted with a blue border)
            previousLink : undefined, //variable in which is stored the active group, that has been sended to the router when the user has clicked on the details page
            //the default iFrame present before the user selects a specific card
            defaultIFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92181.08820607656!2d11.170927917511499!3d43.77993676468868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a56a680d2d6ad%3A0x93d57917efc72a03!2sFirenze%20FI!5e0!3m2!1sit!2sit!4v1654259593216!5m2!1sit!2sit"
        }
    },
    //In the asyncData function we retrieved the data we need in this page from the database calling our APIs;
    //in this case we valorize the three variables pointOfInterest, itineraries and events.
    async asyncData({ route, $axios }) {
        const { id } = route.params //this take dinamically the id of the specific selected point of interest from the params of the router
        const { data } = await $axios.get('/api/pointOfInterests/' + id)
        const itineraries = await $axios.get('/api/pointOfInterests/itinerariesInvolved/' + id)
        const events = await $axios.get('/api/pointOfInterests/eventsInvolved/' + id)
        //This for loop simply change the format of the dates present in the events.data object (retrieved from database)
        for(var d of events.data){
        let date = new Date(d.date)
        let endDate = new Date(d.endDate)
        let month;
        let endDateMonth;
        if(date.getMonth()+1<10){
            month = "0" + (date.getMonth()+1)
            endDateMonth = "0" + (endDate.getMonth()+1)
        }
        else {
            month = (date.getMonth()+1)
            endDateMonth = (endDate.getMonth()+1)
        }
        d.date = date.getDate() + "/" + month + "/" + date.getFullYear()
        if(d.endDate!=null)
            d.endDate = endDate.getDate() + "/" + endDateMonth + "/" + endDate.getFullYear()
    }
    return {
        pointOfInterest : data,
        itineraries : itineraries.data,
        events : events.data
    }
  },
    //The created hook allows you to add code which is run if the Vue instance is created. Also it will only run 
    //once after the data, methods and computed properties have been set up.
    created() {
        //This is the case in which the user arrive to this details page from the points of interest page. When he/she clicked on the
        //arrow button of the card (to see the details of a specific p.o.i) the value of the group property of the query object is setted in the router: 
        //this value is nothing but the p.o.i. group that he/she has selected in the previous page (so the points of interest one)
        if(this.$route.query.group !== undefined)
            this.previousLink = this.$route.query.group;
        //This is the case in which the user arrive to this details page not from the p.o.i. page. In this case we decide
        //simply to set as a default in the breadcrumbs the "All Points of Interest" link. For this reason we set in this case
        //the this.previousLink to "All"
        else
            this.previousLink = "All"
    },
}
</script>