<template>
    <div>
        <nav-bar/>
        <img class="main-img" src="https://www.the-travel-bunny.com/wp-content/uploads/2021/05/2-days-in-florence-itinerary.jpg">
        <div class="d-flex justify-content-center">
          <h1>Itineraries</h1>
        </div>
        <div class="d-flex justify-content-center align-items-center" style="flex-wrap : wrap">
          <div class="d-flex flex-column align-items-center find-container">
            <button type="button" class="btn btn-dark" v-on:click="findAll()">All Itineraries</button>
          </div>
          <div class="d-flex flex-column align-items-center find-container" v-for="(itinerary, itineraryIndex) of typesItinerary" :key="`type-index-${itineraryIndex}`" >
            <button type="button" class="btn btn-dark" v-on:click="findItinerary(itinerary.id)">{{itinerary.type_name}}</button>
          </div>
        </div>
        <div class="d-flex flex-row justify-content-center" style="flex-wrap : wrap">
        <card 
          v-for="(itinerary, itineraryIndex) of itineraryList" 
          :key="`itinerary-index-${itineraryIndex}`"
          :id="`${itinerary.id}`"
          :typeOfPage="`itinerary`"
          :title="`${itinerary.title}`"
          :image="`${itinerary.image}`"
          :description="`${itinerary.description}`">
          </card>
    </div>
    <footer-icon></footer-icon>
    </div>
</template>

<style>
.main-img{
    height: 25em;
    width: 100%;
    object-fit: cover;
}
.find-container{
  margin: 20px;
}
</style>

<script>
import Card from '~/components/Card.vue'
export default {
    components: {
      Card
    },
    data() {
        return {
          interestsList : undefined,
          typesItinerary : [],
          itineraryList : []
        }
     },
    async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/itineraries')
    const typesItinerary = await $axios.get('/api/itinerariesType')
    return {
      itineraryList: data,
      typesItinerary : typesItinerary.data
    }
  },
  methods : {
    async findItinerary(typeItineraryId){
        const { data } = await this.$axios.post('/api/findItineraries', { id : typeItineraryId });
        this.itineraryList = data;
      },
      async findAll(){
        const { data } = await this.$axios.get('/api/itineraries');
        this.itineraryList = data;
      }
  }
}
</script>