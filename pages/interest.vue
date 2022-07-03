<template>
    <div>
        <nav-bar/>
        <img class="main-img" src="https://image-service.web.oebb.at/www.nightjet.com/.imaging/default/dam/nightjet/hero-header/header-overlay-1422x800/laender-und-staedte-1422x800/florenz-santamaria-del-fiore.jpg/jcr:content.jpg?t=1618495685135&scale=1.0">
        <div class="d-flex justify-content-center">
        <h1>Points of Interest</h1>
        </div>
        <div class="d-flex justify-content-center" style="flex-wrap: wrap">
          <div class="d-flex flex-column align-items-center find-container">
            <h6></h6>
            <button type="button" :class="{'btn btn-light' : !allPoi, 'btn btn-dark' : allPoi}" v-on:click="findAll()">All Points</button>
          </div>
          <div class="d-flex flex-column align-items-center find-container" v-for="(interest, interestIndex) of typesPointOfInterest" :key="`type-index-${interestIndex}`" >
            <h6></h6>
            <button type="button" :class="{
              'btn btn-light' : !hisoricalPoi && interestIndex==0 || !naturalPoi && interestIndex==1, 
              'btn btn-dark' : hisoricalPoi && interestIndex==0 || naturalPoi && interestIndex==1}" v-on:click="findInterests(interest.id)">{{interest.type_name}} Points</button>
          </div>
        </div>
      <div class="d-flex justify-content-center" style="flex-wrap : wrap" id="poi-cards">
        <card v-for="(interest, interestIndex) of pointOfInterestList" 
          :id="`${interest.id}`"
          :typeOfPage="`interest`"
          :key="`interest-index-${interestIndex}`"
          :title="`${interest.title}`"
          :image="`${interest.image}`"
          :description="`${interest.description}`"
          :params="params"></card>
    </div>
    <footer-icon></footer-icon>
    </div>
</template>

<style scoped>
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
      Card,
    },
    data() {
        return {
          pointOfInterestList : [], //variable in which will be stored the list of all the points of interest (retrieved from databse)
          typesPointOfInterest : [], //variable in which will be stored the list of all the types points of interest (retrieved from databse)
          allPoi : true, //boolean for the group "All Points of Interest" that becames true when the group is activated
          hisoricalPoi : false, //boolean for the group "Historical Points of Interest" that becames true when the group is activated
          naturalPoi : false, //boolean for the group "Natural Points of Interest" that becames true when the group is activated
          params : "All", //variable in which is stored the active group, that will be send to the router when the user will click on the p.o.i details
          selectedGroup : undefined //variable in which is stored the active group, that is sended from the detail page to this page
        }
     },
     //In the asyncData function we retrieved the data we need in this page from the database calling out APIs;
     //in this case we valorize the two variables pointOfInterestList and typesPointOfInterest.
    async asyncData({ $axios }) {
      const { data } = await $axios.get('/api/pointOfInterests')
      const typesPointOfInterest = await $axios.get('/api/pointOfInterestsType')
      return {
        pointOfInterestList: data,
        typesPointOfInterest : typesPointOfInterest.data
      }
    },
    methods : {
      //Function called when the user applies the filters of the p.o.i. with the buttons on top (excepted for the "All Points" button).
      //When this happen it's simply called the API /findInterests that retrieve the filtered list of the p.o.i. from database. We need
      //to pass to this function the id of the type of point of interest that the user decided to use for filtering.
      async findInterests(typePointOfInterestId){
        const { data } = await this.$axios.post('/api/findInterests', { id : typePointOfInterestId });
        this.pointOfInterestList = data;
        window.location.href = "#poi-cards"; //redirect to the section of the poi-cards after the user click on the filter button
        //If the typePointOfInterestId is equal to 1 it means that the user clicked on the historical point filter (because in the db
        //the id associate to this type of poi is 1), so we set the historicalPoi to true and all the others boolean to false.
        if(typePointOfInterestId==1){
          this.hisoricalPoi = true;
          this.allPoi = false;
          this.naturalPoi = false;
          this.params = "Historical";
        }
        //If the typePointOfInterestId is equal to 2 it means that the user clicked on the natural point filter (because in the db
        //the id associate to this type of poi is 2), so we set the naturalPoi to true and all the others boolean to false.
        if(typePointOfInterestId==2){
          this.hisoricalPoi = false;
          this.allPoi = false;
          this.naturalPoi = true;
          this.params = "Natural";
        }
        //N.B.: we have to set properly these variables every time in order to apply the class binding to the buttons (so the one that is
        //clicked will become black and the others white). You can see the class bindingin action at row 15
      },
      //Function called when the user applies the "All points" filter of the p.o.i. with the button on top.
      //When this happen it's simply called the API /pointOfInterests that retrieve all the p.o.i. present in the database.
      async findAll(){
        const { data } = await this.$axios.get('/api/pointOfInterests');
        this.pointOfInterestList = data;
        window.location.href = "#poi-cards"; //redirect to the section of the poi-cards after the user click on the filter button
        //In this case we set the allPoi to true and all the others boolean to false, because we are in the case in which
        //the user clicked the "All Points" button.
        //N.B.: we have to set properly these variables every time in order to apply the class binding to the buttons (so the one that is
        //clicked will become black and the others white). You can see the class binding in action at row 11.
        this.allPoi = true;
        this.hisoricalPoi = false;
        this.naturalPoi = false;
        this.params = "All";
      }
    },
    //The created hook allows you to add code which is run if the Vue instance is created. Also it will only run 
    //once after the data, methods and computed properties have been set up.
      created() {
        //In the selectedGroup variable we store the value of the "group" field present in the "query" object that
        //we have setted in the router for pass the data from another page to this page
        this.selectedGroup = this.$route.query.group; 
        if(this.selectedGroup === "Historical"){
          this.findInterests(1); //in this case we call the findInterest() with the 1 as a param, that corrispondes to historical points
        }   
        if(this.selectedGroup === "Natural"){
          this.findInterests(2); //in this case we call the findInterest() with the 2 as a param, that corrispondes to natural points
        }
        if(this.selectedGroup === "All"){
          this.findAll(); //in this case we simply call the findAll() method
       }
    },
}
</script>