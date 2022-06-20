<template>
    <div>
        <nav-bar></nav-bar>
        <nuxt-link to="/itinerary"><img src="https://img.icons8.com/ios-filled/250/undefined/circled-left-2.png" width="50px"/></nuxt-link>
        <breadcrumbs page1="Itineraries" :page2="itinerary.title" pageBack="/itinerary"></breadcrumbs>
                <div class="d-flex justify-content-around grey-card" style="flex-wrap: wrap;">
            <div>
                <h1>{{itinerary.title}}</h1>
                <h6>{{itinerary.description}}</h6>
                <p>{{itinerary.information}}</p>
            </div>
            <img width="700px" :src="`${itinerary.image}`"/>
        </div>
        <div class="info-card">
            <h3 class="d-flex justify-content-center title">DESCRIPTION & INFO</h3>
            <div class="d-flex justify-content-center" style="flex-wrap: wrap;">
                <div class="mx-auto">
                    <p>{{itinerary.description}}</p>
                    <p>{{itinerary.information}}</p>
                </div>
                <div class="vl"></div>
                <div class="mx-auto">
                    <h5>TICKET INFORMATION</h5>
                    <h5>PUBLIC TRANSPORT</h5>
                    <h5>SERVICES</h5>
                </div>
            </div>
        </div>
        <h3 class="d-flex justify-content-center title">POINT OF INTERESTS LIST</h3>
        <div class="d-flex justify-content-center title">
            <div class="d-flex justify-content-center" style="flex-wrap: wrap;">
            <card 
            :class="{'selected-card' : pointOfInterestIndex==activeCardIndex}" 
            @child-clicked="clickedCard"
            v-for="(pointOfInterest, pointOfInterestIndex) of pointOfInterests" 
          :key="`pointOfInterest-index-${pointOfInterestIndex}`"
          :id="`${pointOfInterestIndex}`"
          :typeOfPage="`interest`"
          :title="`${pointOfInterest.title}`"
          :image="`${pointOfInterest.image}`"
          :description="`${pointOfInterest.description}`">
          </card>
          </div>
        </div>
        <h3 class="d-flex justify-content-center title" id="city-map">CITY MAP</h3>
        <info-box></info-box>
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
    margin-bottom : 40px
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
            pointOfInterests : undefined,
            itinerary : undefined,
            activeCardIndex : undefined,
            defaultIFrame : "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d9621.253864197715!2d11.247794228986873!3d43.76987745991937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spunti%20di%20interesse%20florence!5e0!3m2!1sit!2sit!4v1654531536668!5m2!1sit!2sit"
        }
    },
    async asyncData({ route, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/itineraries/' + id)
        const pointOfInterests = await $axios.get('/api/itineraries/pointOfInterestsInvolved/' + id)
    return {
        itinerary : data,
        pointOfInterests : pointOfInterests.data
    }
  },
    methods : {
      clickedCard(e){
          this.activeCardIndex = e;
          window.location.href = '#city-map'
      }
  }
} 
</script>