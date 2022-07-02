<template>
    <div>
        <nav-bar/>
        <img class="main-img" src="https://a.cdn-hotels.com/gdcs/production92/d1146/87b98bdb-666a-4ae3-964a-5872d4580ef4.jpg">
        <div class="d-flex justify-content-center">
          <h1>Itineraries</h1>
        </div>
        <div class="d-flex justify-content-center align-items-center" style="flex-wrap : wrap">
          <div class="d-flex flex-column align-items-center find-container">
            <button type="button" :class="{'btn btn-light' : !all, 'btn btn-dark' : all}" v-on:click="findAll()">All Itineraries</button>
          </div>
          <div class="d-flex flex-column align-items-center find-container" v-for="(itinerary, itineraryIndex) of typesItinerary" :key="`type-index-${itineraryIndex}`" >
            <button type="button" :class="{
              'btn btn-light' : !halfDay && itineraryIndex==0 || !allDay && itineraryIndex==1 || !family && itineraryIndex==2, 
              'btn btn-dark' : halfDay && itineraryIndex==0 || allDay && itineraryIndex==1 || family && itineraryIndex==2}" v-on:click="findItinerary(itinerary.id)">{{itinerary.type_name}}</button>
          </div>
        </div>
        <div class="d-flex flex-row justify-content-center" style="flex-wrap : wrap" id="itineraries-cards">
        <card 
          v-for="(itinerary, itineraryIndex) of itineraryList" 
          :key="`itinerary-index-${itineraryIndex}`"
          :id="`${itinerary.id}`"
          :typeOfPage="`itinerary`"
          :title="`${itinerary.title}`"
          :image="`${itinerary.image}`"
          :description="`${itinerary.description}`"
          :params="`${params}`">
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
          itineraryList : [],
          all : true,
          halfDay : false,
          allDay : false,
          family : false,
          params : "All",
          selectedGroup : undefined
        }
     },
    async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/itineraries')
    const typesItinerary = await $axios.get('/api/itinerariesType')
    return {
      itineraryList: data,
      typesItinerary : typesItinerary.data,
    }
  },
  methods : {
    async findItinerary(typeItineraryId){
        const { data } = await this.$axios.post('/api/findItineraries', { id : typeItineraryId });
        window.location.href = "#itineraries-cards";
        this.itineraryList = data;
        if(typeItineraryId==1){
          this.all = false;
          this.halfDay = true;
          this.allDay = false;
          this.family = false;
          this.params = "Half Day";
        }
        if(typeItineraryId==2){
          this.all = false;
          this.halfDay = false;
          this.allDay = true;
          this.family = false;
          this.params = "All Day";
        }
        if(typeItineraryId==3){
          this.all = false;
          this.halfDay = false;
          this.allDay = false;
          this.family = true;
          this.params = "Family";
        }
      },
      async findAll(){
        const { data } = await this.$axios.get('/api/itineraries');
        this.itineraryList = data;
        window.location.href = "#itineraries-cards";
        this.all = true;
        this.halfDay = false;
        this.allDay = false;
        this.family = false;
        this.params = "All";
      }
  },
  created() {
   this.selectedGroup = this.$route.query.group;
    if(this.selectedGroup === "Half Day"){
      this.findItinerary(1);
    }
    if(this.selectedGroup === "All Day"){
      this.findItinerary(2);
    }
    if(this.selectedGroup === "Family"){
      this.findItinerary(3);
    }
    if(this.selectedGroup === "All"){
      this.findAll();
    }
},
}
</script>