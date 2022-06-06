<template>
    <div>
        <nuxt-link to="/itinerary"><img src="https://img.icons8.com/ios-filled/250/undefined/circled-left-2.png" width="50px"/></nuxt-link>
                <div class="d-flex justify-content-around grey-card">
            <div>
                <h1>{{itinerary.title}}</h1>
                <h6>{{itinerary.description}}</h6>
                <p>{{itinerary.information}}</p>
            </div>
            <img width="700px" :src="`${itinerary.image}`"/>
        </div>
        <div class="info-card">
            <h3 class="d-flex justify-content-center title">DESCRIPTION & INFO</h3>
            <div class="d-flex justify-content-around">
                <div>
                    <p>{{itinerary.description}}</p>
                    <p>{{itinerary.information}}</p>
                </div>
                <div class="vl"></div>
                <div>
                    <h5>TICKET INFORMATION</h5>
                    <h5>PUBLIC TRANSPORT</h5>
                    <h5>SERVICES</h5>
                </div>
            </div>
        </div>
        <h3 class="d-flex justify-content-center title">POINT OF INTERESTS LIST</h3>
        <div class="d-flex justify-content-center title">
            <div class="d-flex justify-content-center">
            <card 
            :class="{'selected-card' : pointOfInterestIndex==activeCardIndex}" 
            @child-clicked="clickedCard"
            v-for="(pointOfInterest, pointOfInterestIndex) of pointOfInterests" 
          :key="`pointOfInterest-index-${pointOfInterestIndex}`"
          :id="`${pointOfInterest.id}`"
          :typeOfPage="`interest`"
          :title="`${pointOfInterest.title}`"
          :image="`${pointOfInterest.image}`"
          :description="`${pointOfInterest.description}`">
          </card>
          </div>
        </div>
        <h3 class="d-flex justify-content-center title">MAP</h3>
        <div class="d-flex justify-content-center title">
            <iframe :src="`${this.activeCardIndex!==undefined?pointOfInterests[this.activeCardIndex].iFrame:this.defaultIFrame}`" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <footer-icon></footer-icon>
    </div>
</template>

<style scoped>
.grey-card{
    background-color: #dfdfdf;
}
.vl {
  border-left: 1px solid black;
  height: 100px;
}
.info-card {
    margin: 40px 0;
}
.title{
    margin-bottom : 40px
}
.selected-card{
    border : solid 2px blue;
}
</style>

<script>
import Card from '../../components/Card.vue'
import CardNoButton from '../../components/CardNoButton.vue'
import Carousel from '../../components/Carousel.vue'
export default {
  components: { Carousel, Card, CardNoButton },
    data() {
        return {
            pointOfInterests : undefined,
            itinerary : undefined,
            activeCardIndex : undefined,
            defaultIFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92181.08820607656!2d11.170927917511499!3d43.77993676468868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a56a680d2d6ad%3A0x93d57917efc72a03!2sFirenze%20FI!5e0!3m2!1sit!2sit!4v1654259593216!5m2!1sit!2sit"
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
      }
  }
} 
</script>