<template>
    <div>
        <nav-bar></nav-bar>
        <nuxt-link to="/interest"><img src="https://img.icons8.com/ios-filled/250/undefined/circled-left-2.png" width="50px"/></nuxt-link>
        <breadcrumbs page1="Point of Interests" :page2="pointOfInterest.title" pageBack="/interest"></breadcrumbs>
        <div class="d-flex justify-content-around grey-card" style="flex-wrap: wrap;">
            <div>
                <h1>{{pointOfInterest.title}}</h1>
                <h6>{{pointOfInterest.description}}</h6>
            </div>
            <img width="700px" :src="`${pointOfInterest.image}`"/>
        </div>
        <div class="info-card">
            <h3 class="d-flex justify-content-center title">DESCRIPTION & INFO</h3>
            <div class="d-flex justify-content-center" style="flex-wrap: wrap;">
                <div class="mx-auto">
                    <p style="padding : 0 40px">{{pointOfInterest.information}}</p>
                </div>
                <div class="vl"></div>
                <div class="mx-auto">
                    <h5>ADDRESS</h5>
                    <div>{{pointOfInterest.address}}</div>
                    <h5>TICKET INFORMATION</h5>
                    <div>{{pointOfInterest.ticket}}</div>
                    <h5>OPEN HOURS</h5>
                    <div>{{pointOfInterest.open}}</div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center title">
            <div>
            <h3 class="d-flex justify-content-center title">LIST OF ITINERARIES</h3>
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
        <div class="d-flex justify-content-center">
            <div>
            <h3 class="d-flex justify-content-center title">LIST OF EVENTS</h3>
            <div class="d-flex justify-content-center title" style="flex-wrap: wrap;">
        <card 
            v-for="(event, eventIndex) of events" 
          :key="`event-index-${eventIndex}`"
          :id="`${event.id}`"
          :typeOfPage="`event`"
          :title="`${event.title}`"
          :image="`${event.image}`"
          :description="`${event.description}`"></card>
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
            pointOfInterest : undefined,
            itineraries : undefined,
            events : undefined,
            activeCardIndex : undefined,
            defaultIFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92181.08820607656!2d11.170927917511499!3d43.77993676468868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a56a680d2d6ad%3A0x93d57917efc72a03!2sFirenze%20FI!5e0!3m2!1sit!2sit!4v1654259593216!5m2!1sit!2sit"
        }
    },
    async asyncData({ route, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/pointOfInterests/' + id)
        const itineraries = await $axios.get('/api/pointOfInterests/itinerariesInvolved/' + id)
        const events = await $axios.get('/api/pointOfInterests/eventsInvolved/' + id)
    return {
        pointOfInterest : data,
        itineraries : itineraries.data,
        events : events.data
    }
  }
}
</script>