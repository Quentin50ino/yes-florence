<template>
<div>
    <nav-bar></nav-bar>
<breadcrumbs :page1="`${previousLink} Events`" :page2="event.title" pageBack="/event" :params="previousLink" style="margin-top : 15px"></breadcrumbs>
        <div class="d-flex justify-content-around grey-card" style="flex-wrap: wrap;">
            <div>
                <h1>{{event.title}}</h1>
                <h6>{{event.description}}</h6>
            </div>
            <img id="top-img" height="600px" :src="`${event.image}`"/>
        </div>
        <div class="info-card" style="padding : 0px 40px">
            <h3 class="d-flex justify-content-center title">DESCRIPTION & INFO</h3>
            <div class="d-flex justify-content-center" style="flex-wrap: wrap;">
                <div class="mx-auto" style="margin-bottom : 10px">
                    <p>{{event.information}}</p>
                </div>
                <!--<div class="vl"></div>-->
                <div class="mx-auto d-flex flex-column align-items-center">
                    <h5>TICKET INFORMATION</h5>
                    <p>{{event.ticket}}</p>
                    <h5 v-if="event.endDate==null">WHEN</h5>
                    <h5 v-if="event.endDate!=null">FROM</h5>
                    <p>{{parseDate(event.date)}}</p>
                    <h5 v-if="event.endDate!=null">TO</h5>
                    <p v-if="event.endDate!=null">{{parseDate(event.endDate)}}</p>
                </div>
            </div>
        </div>
        <h3 class="d-flex justify-content-center title">IS HOSTED HERE</h3>
        <info-box></info-box>
        <div class="d-flex justify-content-center title" >
            <div class="d-flex justify-content-center" style="flex-wrap: wrap;">
            <card :class="{'selected-card' : pointOfInterestIndex==activeCardIndex}" 
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
@media screen and (min-width: 600px) {
.vl {
  border-left: 1px solid black;
  height: 100px;
}
}

@media screen and (max-width: 600px) {
#top-img{
    width: 100%;
    height: 100%;
}
.descAndInfo{
    display: none;
}
}
.info-card {
    margin: 40px 0;
}
.title{
    margin-bottom : 20px
}
.selected-card{
    border : solid 3px #3b5998;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>

<script>
import InfoBox from '../../components/info-box.vue'
import NavBar from '../../components/NavBar.vue'
export default {
    components : {
        NavBar,
        InfoBox
    },
    data(){
        return {
            event : undefined, //variable in which will be stored the data of the specific selected event (retrieved from databse)
            pointOfInterests : undefined, //variable in which will be stored the list of all the points of interest that host the specific selected event (retrieved from databse)
            activeCardIndex : undefined, //represent the id of the selected card (the one highlighted with a blue border)
            previousLink : undefined, //variable in which is stored the active group, that has been sended to the router when the user has clicked on the details page
            //the default iFrame present before the user selects a specific card
            defaultIFrame : "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d9621.253864197715!2d11.247794228986873!3d43.76987745991937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spunti%20di%20interesse%20florence!5e0!3m2!1sit!2sit!4v1654531536668!5m2!1sit!2sit"
        }
    },
    //In the asyncData function we retrieved the data we need in this page from the database calling our APIs;
    //in this case we valorize the two variables event and pointOfInterests.
    async asyncData({ route, $axios }) {
        const { id } = route.params //this takes dinamically the id of the specific selected event, from the params of the router
        const { data } = await $axios.get('/api/events/' + id)
        const pointOfInterests = await $axios.get('/api/events/pointOfInterestsInvolved/' + id)
    return {
        event : data,
        pointOfInterests : pointOfInterests.data
    }
  },
  methods : {
    //Method called when the card child component emit the clickedCard event (so simply when the card is clicked).
      clickedCard(e){
        //we set this.activeCardIndex to the index emitted from the child compoent, in order to bind the class of the card
        //(as you can see at row 34) and make the clicked card evident in the page (with blue border)
          this.activeCardIndex = e;
          window.location.href = '#city-map' //redirect to the city-map element
      },
      //Method that simply parse the dates in the format GG/MM/YYYY
    parseDate(d){
      let date = new Date(d)
      let month;
      if(date.getMonth()+1<10){
        month = "0" + (date.getMonth()+1)
      }
      else {
        month = (date.getMonth()+1)
      }
      date = date.getDate() + "/" + month + "/" + date.getFullYear()
      return date;
  }
  },
    //The created hook allows you to add code which is run if the Vue instance is created. Also it will only run 
    //once after the data, methods and computed properties have been set up.
    created() {
        //This is the case in which the user arrive to this details page from the events page. When he/she clicked on the
        //arrow button of the card (to see the details of a specific event) the value of the group property of the query object is setted in the router: 
        //this value is nothing but the events group that he/she has selected in the previous page (so the events one)
        if(this.$route.query.group !== undefined)
            this.previousLink = this.$route.query.group;
        //This is the case in which the user arrive to this details page not from the events page. In this case we decide
        //simply to set as a default in the breadcrumbs the "All Events" link. For this reason we set in this case
        //the this.previousLink to "All"
        else
            this.previousLink = "All"
},
}
</script>