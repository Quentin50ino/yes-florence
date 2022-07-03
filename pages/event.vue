<template>
    <div>
        <nav-bar/>
        <img class="main-img" src="https://cdn1.discovertuscany.com/img/florence/events/scoppio-del-carro06.jpg?auto=compress,enhance,format&w=">
        <div class="d-flex justify-content-center">
        <h1>Events</h1>
        </div>
          <div class="d-flex justify-content-center" style="flex-wrap : wrap">
          <div class="d-flex flex-column align-items-center find-container">
            <button type="button" :class="{'btn btn-light' : !all, 'btn btn-dark' : all}" v-on:click="findAll()">All Events</button>
          </div>
          <div class="d-flex flex-column align-items-center find-container" v-for="(event, eventIndex) of typesEvent" :key="`type-index-${eventIndex}`" >
            <button type="button" :class="{
              'btn btn-light' : !summer && eventIndex==0 || !winter && eventIndex==1, 
              'btn btn-dark' : summer && eventIndex==0 || winter && eventIndex==1}" v-on:click="findEvent(event.id)">{{event.type_name}}</button>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="d-flex flex-column align-items-center find-container">
            <input @change="startDateHandler" placeholder="Start Date" class="form-control" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date" :value="startDate!==undefined?startDateForInput:''"/>
            <input :disabled="!startDate" @change="endDateHandler" :min="startDateForInput" style="margin: 10px 0" placeholder="End Date" class="form-control" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date" :value="endDate!==undefined?endDateForInput:''"/>
            <div>
            <button :disabled="startDate===undefined || endDate===undefined" type="button" class="btn btn-danger" v-on:click="clearInputDate()">Clear</button>
            <button :disabled="startDate===undefined || endDate===undefined" type="button" class="btn btn-secondary" v-on:click="findEventByDate(startDate, endDate)">Find</button>
            </div>
          </div>
        </div>
      <div class="d-flex flex-row justify-content-center" style="flex-wrap : wrap" id="events-cards"> 
        <card  v-for="(event, eventIndex) of eventList" 
          :key="`event-index-${eventIndex}`"
          :id="`${event.id}`"
          :typeOfPage="`event`"
          :title="`${event.title}`"
          :image="`${event.image}`"
          :description="`${event.description}`"
          :date="`${event.date}`"
          :endDate="`${event.endDate}`"
          :params="params"></card>
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
          typesEvent : [], //variable in which will be stored the list of all the types of event (retrieved from databse)
          eventList : [], //variable in which will be stored the list of all the events (retrieved from databse)
          startDate : undefined,
          startDateForInput : undefined,
          endDate : undefined,
          endDateForInput : undefined,
          all : true, //boolean for the group "All Events" that becomes true when the group is activated
          summer : false, //boolean for the group "Summer Events" that becomes true when the group is activated
          winter : false, //boolean for the group "Winter Events" that becomes true when the group is activated
          params : "All", //variable in which is stored the active group, that will be send to the router when the user will click on the event details
          selectedGroup : undefined //variable in which is stored the active group, that is sended from the detail page to this page
        }
     },
    //In the asyncData function we retrieved the data we need in this page from the database calling out APIs;
    //in this case we valorize the two variables eventList and typesEvent.
    async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/events')
    const typesEvent = await $axios.get('/api/eventsType')
    //In this for loop we simply change the format of the dates that we retrieve from database for each element present
    //in the data constant (that contains the response of the /events API). We do this in order to better display these dates.
    for(var d of data){
      let date = new Date(d.date)
      let endDate = new Date(d.endDate)
      let month;
      let endDateMonth;
      if(date.getMonth()+1<10){
        month = "0" + (date.getMonth()+1)
        endDateMonth = "0" + (endDate.getMonth()+1)
      }
      else {
        month = (date.getMonth()+1)
        endDateMonth = (endDate.getMonth()+1)
      }
      d.date = date.getDate() + "/" + month + "/" + date.getFullYear()
      if(d.endDate!=null)
        d.endDate = endDate.getDate() + "/" + endDateMonth + "/" + endDate.getFullYear()
    }
    return {
      eventList: data,
      typesEvent : typesEvent.data
    }
  },
  methods : {
    //Function that when is called change the format of the date to GG/MM/YYYY
    parseDate(data){
      for(var d of data){
      let date = new Date(d.date)
      let endDate = new Date(d.endDate)
      let month;
      let endDateMonth;
      if(date.getMonth()+1<10){
        month = "0" + (date.getMonth()+1)
        endDateMonth = "0" + (endDate.getMonth()+1)
      }
      else {
        month = (date.getMonth()+1)
        endDateMonth = (endDate.getMonth()+1)
      }
      d.date = date.getDate() + "/" + month + "/" + date.getFullYear()
      if(d.endDate!=null)
        d.endDate = endDate.getDate() + "/" + endDateMonth + "/" + endDate.getFullYear()
    }
    },
      //Function called when the user applies the filters of the events with the buttons on top (excepted for the "All Events" button).
      //When this happen it's simply called the API /findEvents that retrieve the filtered list of the itineraries from database. We need
      //to pass to this function the id of the type of event that the user decided to use for filtering.
      async findEvent(typeEventId){
        const { data } = await this.$axios.post('/api/findEvents', { id : typeEventId });
        this.parseDate(data); //this function will parse every date present in the data object
        this.eventList = data;
        window.location.href = "#events-cards"; //redirect to the section of the events-cards after the user click on the filter button
        //If the typeEventId is equal to 1 it means that the user clicked on the summer events filter (because in the db
        //the id associate to this type of event is 1), so we set summer to true and all the others boolean to false.
        if(typeEventId==1){
          this.all = false;
          this.summer = true;
          this.winter = false;
          this.params = "Summer";
        }
        //If the typeEventId is equal to 2 it means that the user clicked on the winter events filter (because in the db
        //the id associate to this type of event is 2), so we set winter to true and all the others boolean to false.
        if(typeEventId==2){
          this.all = false;
          this.summer = false;
          this.winter = true;
          this.params = "Winter";
        }
        //N.B.: we have to set properly these variables every time in order to apply the class binding to the buttons (so the one that is
        //clicked will become black and the others white). You can see the class binding in action at row 13
        },
      //Function called when the user applies the date filter of the events clicking the "Find" button.
      //When this happen it's simply called the API /findEventsByDate that retrieve the filtered list of the itineraries from database. We need
      //to pass to this function the startDate and the endDate that the user set in the two date inputs.
      async findEventByDate(startDate, endDate){
        const { data } = await this.$axios.post('/api/findEventsByDate', { startDate, endDate });
        this.parseDate(data) //this function will parse every date present in the data object
        this.eventList = data;
        window.location.href = "#events-cards"; //redirect to the section of the events-cards after the user click on the filter button
        //Here we set to false all the boolean because we are not in any of these cases (so we will see all the buttons became white, so
        //they correctly will be not selected).
        this.all = false;
        this.summer = false;
        this.winter = false;
        let prettyStartDate = this.startDateForInput.replaceAll('-','/'); //simply replace all the "-" with a "/" in the input start date
        let prettyEndDate = this.endDateForInput.replaceAll('-','/'); //simply replace all the "-" with a "/" in the input end date
        this.params =  prettyStartDate + " - " + prettyEndDate;
      },
      //Function called when the user applies the "All Events" filter of the events with the button on top.
      //When this happen it's simply called the API /events that retrieve all the events present in the database.
      async findAll(){
        const { data } = await this.$axios.get('/api/events');
        this.parseDate(data) //this function will parse every date present in the data object
        this.eventList = data;
        window.location.href = "#events-cards"; //redirect to the section of the events-cards after the user click on the filter button
        //In this case we set the all to true and all the others boolean to false, because we are in the case in which
        //the user clicked the "All Events" button.
        //N.B.: we have to set properly these variables every time in order to apply the class binding to the buttons (so the one that is
        //clicked will become black and the others white). You can see the class binding in action at row 10.
        this.all = true;
        this.summer = false;
        this.winter = false;
        this.params = "All";
      },
      //Function called on the change of the start date input
      startDateHandler({target}) {
        this.startDate = new Date(target.value)
        let month;
        if( this.startDate.getMonth()+1<10){
          month = "0" + (this.startDate.getMonth() + 1)
        }
        else{
          month = this.startDate.getMonth() + 1;
        }
        this.startDateForInput = target.value;
      },
      //Function called on the change of the end date input
      endDateHandler({target}) {
        this.endDate = new Date(target.value)
        let month;
        if( this.endDate.getMonth()+1<10){
          month = "0" + (this.endDate.getMonth() + 1)
        }
        else{
          month = this.endDate.getMonth() + 1;
        }
        this.endDateForInput = target.value;
      },
      //Function called when the user clicked on the "Clear" button; this will set the stat date end the end date to undefined
      //and finally recall the findAll() method, in order to have no filter selected anymore.
      async clearInputDate(){
        this.startDate = undefined;
        this.endDate = undefined;
        this.findAll();
      }
    },
    //The created hook allows you to add code which is run if the Vue instance is created. Also it will only run 
    //once after the data, methods and computed properties have been set up.
    created() {
      //In the selectedGroup variable we store the value of the "group" field present in the "query" object that
      //we have setted in the router for pass the data from another page to this page
      this.selectedGroup = this.$route.query.group;
      if(this.selectedGroup === "Summer"){
        this.findEvent(1); //in this case we call the findEvent() with the 1 as a param, that corrispondes to summer events
      }
      else if(this.selectedGroup === "Winter"){
        this.findEvent(2); //in this case we call the findEvent() with the 2 as a param, that corrispondes to winter events
      }
      else if(this.selectedGroup === "All"){
        this.findAll(); //in this case we simply call the findAll() method
      }
     else{ //case in which selectedGroup is different from all the previous
        if(this.selectedGroup !== undefined){ //case in which we arrive from event-details page with setted in the breadcrumbs a date range
          //selectedGroup in this case will be equal to: "YYYY/MM/GG - YYYY/MM/GG", so we do this split in order to 
          //separate the two dates.
          let startDate = this.selectedGroup.split('-')[0]; 
          let endDate = this.selectedGroup.split('-')[1];
          this.startDate = startDate;
          this.endDate = endDate;
          this.startDateForInput = startDate;
          this.endDateForInput = endDate;
          this.findEventByDate(startDate, endDate); //in this case we call the findEventByDate() with the startDate and EndDate as params
        }
      }
    
    },
}
</script>