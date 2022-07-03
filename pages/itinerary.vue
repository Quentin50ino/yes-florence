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
          typesItinerary : [], //variable in which will be stored the list of all the types of itinerary (retrieved from databse)
          itineraryList : [], //variable in which will be stored the list of all the itineraries (retrieved from databse)
          all : true, //boolean for the group "All Itineraries" that becomes true when the group is activated
          halfDay : false, //boolean for the group "Half Day Itineraries" that becames true when the group is activated
          allDay : false, //boolean for the group "All Day Itineraries" that becomes true when the group is activated
          family : false, //boolean for the group "Family Itineraries" that becomes true when the group is activated
          params : "All", //variable in which is stored the active group, that will be send to the router when the user will click on the itinerary details
          selectedGroup : undefined //variable in which is stored the active group, that is sended from the detail page to this page
        }
     },
    //In the asyncData function we retrieved the data we need in this page from the database calling our APIs;
    //in this case we valorize the two variables itineraryList and typesItinerary.
    async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/itineraries')
    const typesItinerary = await $axios.get('/api/itinerariesType')
    return {
      itineraryList: data,
      typesItinerary : typesItinerary.data,
    }
  },
  methods : {
    //Function called when the user applies the filters of the itineraies with the buttons on top (excepted for the "All Itineraries" button).
    //When this happen it's simply called the API /finditineraries that retrieve the filtered list of the itineraries from database. We need
    //to pass to this function the id of the type of itinerary that the user decided to use for filtering.
    async findItinerary(typeItineraryId){
        const { data } = await this.$axios.post('/api/findItineraries', { id : typeItineraryId });
        this.itineraryList = data;
        window.location.href = "#itineraries-cards"; //redirect to the section of the itineraries-cards after the user click on the filter button
        //If the typItineraryId is equal to 1 it means that the user clicked on the half day itineraries filter (because in the db
        //the id associate to this type of itinerary is 1), so we set halfDay to true and all the others boolean to false.
        if(typeItineraryId==1){
          this.all = false;
          this.halfDay = true;
          this.allDay = false;
          this.family = false;
          this.params = "Half Day";
        }
        //If the typItineraryId is equal to 2 it means that the user clicked on the all day itineraries filter (because in the db
        //the id associate to this type of itinerary is 2), so we set allDay to true and all the others boolean to false.
        if(typeItineraryId==2){
          this.all = false;
          this.halfDay = false;
          this.allDay = true;
          this.family = false;
          this.params = "All Day";
        }
        //If the typItineraryId is equal to 3 it means that the user clicked on the family itineraries filter (because in the db
        //the id associate to this type of itinerary is 3), so we set family to true and all the others boolean to false.
        if(typeItineraryId==3){
          this.all = false;
          this.halfDay = false;
          this.allDay = false;
          this.family = true;
          this.params = "Family";
        }
        //N.B.: we have to set properly these variables every time in order to apply the class binding to the buttons (so the one that is
        //clicked will become black and the others white). You can see the class binding in action at row 13
      },
      //Function called when the user applies the "All itineraries" filter of the itineraries with the button on top.
      //When this happen it's simply called the API /itineraries that retrieve all the itineraries present in the database.
      async findAll(){
        const { data } = await this.$axios.get('/api/itineraries');
        this.itineraryList = data;
        window.location.href = "#itineraries-cards"; //redirect to the section of the itineraries-cards after the user click on the filter button
        //In this case we set the all to true and all the others boolean to false, because we are in the case in which
        //the user clicked the "All Itineraries" button.
        //N.B.: we have to set properly these variables every time in order to apply the class binding to the buttons (so the one that is
        //clicked will become black and the others white). You can see the class binding in action at row 10.
        this.all = true;
        this.halfDay = false;
        this.allDay = false;
        this.family = false;
        this.params = "All";
      }
  },
  //The created hook allows you to add code which is run if the Vue instance is created. Also it will only run 
  //once after the data, methods and computed properties have been set up.
  created() {
      //In the selectedGroup variable we store the value of the "group" field present in the "query" object that
      //we have setted in the router for pass the data from another page to this page
      this.selectedGroup = this.$route.query.group;
      if(this.selectedGroup === "Half Day"){
        this.findItinerary(1); //in this case we call the findItinerary() with the 1 as a param, that corrispondes to half day itineraries
      }
      if(this.selectedGroup === "All Day"){
        this.findItinerary(2); //in this case we call the findItinerary() with the 2 as a param, that corrispondes to all day itineraries
      }
      if(this.selectedGroup === "Family"){
        this.findItinerary(3); //in this case we call the findItinerary() with the 3 as a param, that corrispondes to family itineraries
      }
      if(this.selectedGroup === "All"){
        this.findAll(); //in this case we simply call the findAll() method
      }
  },
}
</script>