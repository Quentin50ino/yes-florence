<template>
    <div>
        <nav-bar/>
        <img class="main-img" src="https://cdn1.discovertuscany.com/img/florence/events/scoppio-del-carro06.jpg?auto=compress,enhance,format&w=">
        <div class="d-flex justify-content-center">
        <h1>Events</h1>
        </div>
          <div class="d-flex justify-content-center" style="flex-wrap : wrap">
          <div class="d-flex flex-column align-items-center find-container">
            <button type="button" class="btn btn-dark" v-on:click="findAll()">All Events</button>
          </div>
          <div class="d-flex flex-column align-items-center find-container" v-for="(event, eventIndex) of typesEvent" :key="`type-index-${eventIndex}`" >
            <button type="button" class="btn btn-dark" v-on:click="findEvent(event.id)">{{event.type_name}}</button>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="d-flex flex-column align-items-center find-container">
            <input @change="startDateHandler" placeholder="Start Date" class="form-control" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date"/>
            <input @change="endDateHandler" :min="startDateForInput" style="margin: 10px 0" placeholder="End Date" class="form-control" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date"/>
            <div>
            <button :disabled="startDate===undefined || endDate===undefined" type="button" class="btn btn-danger" v-on:click="clearInputDate()">Clear</button>
            <button :disabled="startDate===undefined || endDate===undefined" type="button" class="btn btn-secondary" v-on:click="findEventByDate(startDate, endDate)">Find</button>
            </div>
          </div>
          <!--
            <div class="d-flex flex-column align-items-center find-container">
            <h6>End Date</h6>
            <input type="date"/>
          </div>-->

        </div>
      <div class="d-flex flex-row justify-content-center" style="flex-wrap : wrap"> 
        <card  v-for="(event, eventIndex) of eventList" 
          :key="`event-index-${eventIndex}`"
          :id="`${event.id}`"
          :typeOfPage="`event`"
          :title="`${event.title}`"
          :image="`${event.image}`"
          :description="`${event.description}`"
          :date="`${event.date}`"
          :endDate="`${event.endDate}`"></card>
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
          typesEvent : [],
          eventList : [],
          startDate : undefined,
          startDateForInput : undefined,
          endDate : undefined
        }
     },
    async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/events')
    const typesEvent = await $axios.get('/api/eventsType')
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
      async findEvent(typeEventId){
        const { data } = await this.$axios.post('/api/findEvents', { id : typeEventId });
        this.parseDate(data);
          this.eventList = data;
        },
      async findEventByDate(startDate, endDate){
        const { data } = await this.$axios.post('/api/findEventsByDate', { startDate, endDate });
        this.parseDate(data)
        this.eventList = data;
      },
      async findAll(){
        const { data } = await this.$axios.get('/api/events');
        this.parseDate(data)
        this.eventList = data;
      },
      startDateHandler({target}) {
        this.startDate = new Date(target.value)
        this.startDateForInput = target.value;
      },
      endDateHandler({target}) {
        this.endDate = new Date(target.value)
      },
      clearInputDate(){
        this.startDate = undefined,
        this.endDate = undefined
      }
    }
}
</script>