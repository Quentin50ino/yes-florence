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
          pointOfInterestList : [],
          typesPointOfInterest : [],
          allPoi : true,
          hisoricalPoi : false,
          naturalPoi : false,
          params : "All",
          selectedGroup : undefined
        }
     },
    async asyncData({ $axios }) {
      const { data } = await $axios.get('/api/pointOfInterests')
      const typesPointOfInterest = await $axios.get('/api/pointOfInterestsType')
      return {
        pointOfInterestList: data,
        typesPointOfInterest : typesPointOfInterest.data
      }
    },
    methods : {
      async findInterests(typePointOfInterestId){
        const { data } = await this.$axios.post('/api/findInterests', { id : typePointOfInterestId });
        this.pointOfInterestList = data;
        window.location.href = "#poi-cards";
        if(typePointOfInterestId==1){
          this.hisoricalPoi = true;
          this.allPoi = false;
          this.naturalPoi = false;
          this.params = "Historical";
        }
        if(typePointOfInterestId==2){
          this.hisoricalPoi = false;
          this.allPoi = false;
          this.naturalPoi = true;
          this.params = "Natural";
        }
      },
      async findAll(){
        const { data } = await this.$axios.get('/api/pointOfInterests');
        this.pointOfInterestList = data;
        window.location.href = "#poi-cards";
        this.allPoi = true;
        this.hisoricalPoi = false;
        this.naturalPoi = false;
        this.params = "All";
      }
    },
      created() {
   this.selectedGroup = this.$route.query.group;
    if(this.selectedGroup === "Historical"){
      this.findInterests(1);
    }
    if(this.selectedGroup === "Natural"){
      this.findInterests(2);
    }
    if(this.selectedGroup === "All"){
      this.findAll();
    }
},
}
</script>