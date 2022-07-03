<template>
    <div>
        <nav-bar></nav-bar>
        <breadcrumbs :page1="`${previousLink} Itineraries`" :page2="itinerary.title" pageBack="/itinerary" :params="previousLink" style="margin-top : 15px"></breadcrumbs>
                <div class="d-flex justify-content-around grey-card" style="flex-wrap: wrap;">
            <div>
                <h1>{{itinerary.title}}</h1>
                <h6>{{itinerary.description}}</h6>
            </div>
            <img id="top-img" height="600px" :src="`${itinerary.image}`"/>
        </div>
        <div class="info-card">
            <h3 class="d-flex justify-content-center title">DESCRIPTION & INFO</h3>
            <div class="d-flex flex-column align-items-center" style="flex-wrap: wrap;">
                <div class="mx-auto">
                    <p style="padding : 0 40px">{{itinerary.information}}</p>
                </div>
                <!--<div class="vl"></div>-->
                <div class="d-flex flex-column align-items-center" style="margin-top : 15px; padding : 0px 40px">
                    <h5>TICKET INFORMATION</h5>
                    <p>{{itinerary.ticket}}</p>
                </div>
                <div class="d-flex flex-column align-items-center" style="margin-top : 15px; padding : 0px 40px">
                    <h5>DURATION</h5>
                    <p>{{itinerary.duration}} hours</p>
                </div>
            </div>
                <div class="d-flex justify-content-center" style="margin : 20px 0px 80px 0px">
                    <div class="mx-suto">
                    <h3 class="d-flex justify-content-center" style="margin-bottom: 30px">ITINERARY INFORMATION</h3>
                    <img :src="`${itinerary.itineraryImage}`" width="100%"/>
                    </div>
                </div>
        </div>
        <h3 class="d-flex justify-content-center title">POINTS OF INTEREST INVOLVED</h3>
        <info-box></info-box>
        <div class="d-flex justify-content-center title">
            <div class="d-flex justify-content-center" style="flex-wrap: wrap;">
            <card 
            :class="{'selected-card' : pointOfInterestIndex==activeCardIndex}" 
            @child-clicked="clickedCard"
            v-for="(pointOfInterest, pointOfInterestIndex) of pointOfInterests" 
          :key="`pointOfInterest-index-${pointOfInterestIndex}`"
          :id="`${pointOfInterest.id}`"
          :index="`${pointOfInterestIndex}`"
          :typeOfPage="`interest`"
          :title="`${pointOfInterest.title}`"
          :image="`${pointOfInterest.image}`"
          :description="`${pointOfInterest.description}`">
          </card>
          </div>
        </div>
        <h3 style="margin-top: 80px" class="d-flex justify-content-center title" id="city-map">CITY MAP</h3>
        <div class="d-flex justify-content-center title">
            <iframe :src="`${this.activeCardIndex!==undefined?pointOfInterests[this.activeCardIndex].iFrame:this.defaultIFrame}`" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <footer-icon></footer-icon>
    </div>
</template>

<style scoped>
.grey-card{
    background-color: #dfdfdf;
}
@media screen and (max-width: 600px) {
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
    margin-bottom : 15px
}
.selected-card{
    border : solid 3px #3b5998;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>

<script>
import Card from '../../components/Card.vue'
import CardNoButton from '../../components/CardNoButton.vue'
import Carousel from '../../components/Carousel.vue'
import InfoBox from '../../components/info-box.vue'
import NavBar from '../../components/NavBar.vue'
export default {
  components: { Carousel, Card, CardNoButton, InfoBox, NavBar },
    data() {
        return {
            pointOfInterests : undefined, //variable in which will be stored the list of all the points of interest that are involved in the selected itinerary (retrieved from databse)
            itinerary : undefined, //variable in which will be stored the data of the specific selected itinerary (retrieved from databse) 
            activeCardIndex : undefined, //represent the id of the selected card (the one highlighted with a blue border)
            previousLink : undefined, //variable in which is stored the active group, that has been sended to the router when the user has clicked on the details page
            //the default iFrame present before the user selects a specific card
            defaultIFrame : "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d9621.253864197715!2d11.247794228986873!3d43.76987745991937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spunti%20di%20interesse%20florence!5e0!3m2!1sit!2sit!4v1654531536668!5m2!1sit!2sit"
        }
    },
    //In the asyncData function we retrieved the data we need in this page from the database calling our APIs;
    //in this case we valorize the two variables itinerary and pointOfInterests.
    async asyncData({ route, $axios}) {
        const { id } = route.params //this takes dinamically the id of the specific selected itinerary, from the params of the router
        const { data } = await $axios.get('/api/itineraries/' + id)
        const pointOfInterests = await $axios.get('/api/itineraries/pointOfInterestsInvolved/' + id)
    return {
        itinerary : data,
        pointOfInterests : pointOfInterests.data,
    }
  },
    //The created hook allows you to add code which is run if the Vue instance is created. Also it will only run 
    //once after the data, methods and computed properties have been set up.
    created() {
        //This is the case in which the user arrive to this details page from the itinerary page. When he/she clicked on the
        //arrow button of the card (to see the details of a specific itinerary) the value of the group property of the query object is setted in the router: 
        //this value is nothing but the itinerary group that he/she has selected in the previous page (so the itinerary one)
        if(this.$route.query.group !== undefined)
            this.previousLink = this.$route.query.group;
        //This is the case in which the user arrive to this details page not from the itinerary page. In this case we decide
        //simply to set as a default in the breadcrumbs the "All Itinerary" link. For this reason we set in this case
        //the this.previousLink to "All"
        else
            this.previousLink = "All"
},
    methods : {
      //Method called when the card child component emit the clickedCard event (so simply when the card is clicked).
      clickedCard(e){
        //we set this.activeCardIndex to the index emitted from the child compoent, in order to bind the class of the card
        //(as you can see at row 40) and make the clicked card evident in the page (with blue border)
          this.activeCardIndex = e; 
          window.location.href = '#city-map' //redirect to the city-map element
      }
  }
} 
</script>