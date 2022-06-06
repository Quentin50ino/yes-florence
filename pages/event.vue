<template>
    <div>
        <nav-bar/>
        <img class="main-img" src="https://cdn1.discovertuscany.com/img/florence/events/scoppio-del-carro06.jpg?auto=compress,enhance,format&w=">
        <div class="d-flex justify-content-center">
        <h1>Events</h1>
        </div>
          <div class="d-flex justify-content-center">
          <div class="d-flex flex-column align-items-center find-container">
            <h6>Start Date</h6>
            <input type="date"/>
          </div>
            <div class="d-flex flex-column align-items-center find-container">
            <h6>End Date</h6>
            <input type="date"/>
          </div>
          <div class="d-flex flex-column align-items-center find-container">
            <button type="button" class="btn btn-secondary" v-on:click="findAll()">Find</button>
          </div>
        </div>
          <div class="d-flex justify-content-center">
          <div class="d-flex flex-column align-items-center find-container">
            <h6>all events</h6>
            <button type="button" class="btn btn-default" v-on:click="findAll()">Find</button>
          </div>
          <div class="d-flex flex-column align-items-center find-container" v-for="(event, eventIndex) of typesEvent" :key="`type-index-${eventIndex}`" >
            <h6>{{event.type_name}}</h6>
            <button type="button" class="btn btn-default" v-on:click="findEvent(event.id)">Find</button>
          </div>
        </div>
      <div class="d-flex flex-row justify-content-center" style="flex-wrap : wrap"> 
        <card  v-for="(event, eventIndex) of eventList" 
          :key="`event-index-${eventIndex}`"
          :id="`${event.id}`"
          :typeOfPage="`event`"
          :title="`${event.title}`"
          :image="`${event.image}`"
          :description="`${event.description}`"></card>
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
          eventList : []
        }
     },
    async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/events')
    const typesEvent = await $axios.get('/api/eventsType')
    return {
      eventList: data,
      typesEvent : typesEvent.data
    }
  },
  methods : {
      async findEvent(typeEventId){
        const { data } = await this.$axios.post('/api/findEvents', { id : typeEventId });
        this.eventList = data;
      },
      async findAll(){
        const { data } = await this.$axios.get('/api/events');
        this.eventList = data;
      }
  }
}
</script>