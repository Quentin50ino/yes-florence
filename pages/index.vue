<template>
  <div>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <nav-bar/>
    <div>
      <h3 class="d-flex justify-content-center" style="margin-top : 40px">Welcome to Florence</h3>
      <div class="d-flex justify-content-around" style="margin-top : 40px; flex-wrap : wrap;">
        <div class="d-flex flex-column align-items-center" style="background-color : #343434; padding : 20px; border-radius: 10px">
          <img :src="`${pointOfInterests[0].image}`" width="400px" height="200px" style="border : 1px solid black; border-radius:10px;">
          <h6 style="margin-top : 20px; color : white">Point Of Interests</h6>
          <a style="margin-bottom : 15px" href="#section1"><button type="button" class="btn btn-success">DISCOVER</button></a>
        </div>
        <div class="d-flex flex-column align-items-center img-container"  style="background-color : #343434; padding : 20px; border-radius: 10px">
          <img :src="`${itineraries[0].image}`" width="400px" height="200px" style="border : 1px solid black; border-radius:10px;">
          <h6 style="margin-top : 20px; color : white">Itineraries</h6>
          <a style="margin-bottom : 15px" href="#section2"><button type="button" class="btn btn-success">EXPLORE</button></a>
        </div>
        <div class="d-flex flex-column align-items-center img-container"  style="background-color : #343434; padding : 20px; border-radius: 10px">
          <img :src="`${events[0].image}`" width="400px" height="200px" style="border : 1px solid black; border-radius:10px;">
          <h6 style="margin-top : 20px; color : white">Events</h6>
          <a style="margin-bottom : 15px" href="#section3"><button type="button" class="btn btn-success">HAVE FUN</button></a>
        </div>
      </div>
      <div>
        <div class="d-flex justify-content-center">
          <hr>
        </div>
      <h1 class="d-flex justify-content-center" id="section1">POINT OF INTERESTS</h1>
  <div id="carouselInterests" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <carousel
    v-for="(interest, interestIndex) of pointOfInterests" 
    :key="`interest-index-${interestIndex}`"
    :image="interest.image"
    :index="interestIndex"
    :title="interest.title"
    :description="interest.description"
    ></carousel>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselInterests" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselInterests" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="d-flex justify-content-center" style="margin-top : 40px">
  <nuxt-link to="/interest"><button type="button" class="btn btn-light">Learn More</button></nuxt-link>
</div>
<div class="d-flex justify-content-center">
  <hr>
</div>
      </div>
      <div>
      <h1 class="d-flex justify-content-center" id="section2">ITINERARIES</h1>
  <div id="carouselItineraries" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <carousel
     v-for="(itinerary, itineraryIndex) of itineraries" 
    :key="`itinerary-index-${itineraryIndex}`"
    :image="itinerary.image"
    :index="itineraryIndex"
    :title="itinerary.title"
    :description="itinerary.description"
    ></carousel>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselItineraries" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselItineraries" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    <div class="d-flex justify-content-center" style="margin-top : 40px">
  <nuxt-link to="/itinerary"><button type="button" class="btn btn-light">Learn More</button></nuxt-link>
</div>
  <div class="d-flex justify-content-center">
  <hr>
</div>
  </div>
   <div>
      <h1 class="d-flex justify-content-center" id="section3">EVENTS</h1>
  <div id="carouselEvents" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <carousel
    v-for="(event, eventIndex) of events" 
    :key="`event-index-${eventIndex}`"
    :image="event.image"
    :index="eventIndex"
    :title="event.title"
    :description="event.description"
    ></carousel>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselEvents" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselEvents" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="d-flex justify-content-center" style="margin-top : 40px">
  <nuxt-link to="/event"><button type="button" class="btn btn-light">Learn More</button></nuxt-link>
</div>
<div class="d-flex justify-content-center">
  <hr>
</div>
    </div>
    <footer-icon></footer-icon>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
  </div> 
</template>

<style scoped>
h1{
  margin : 40px 0;
}
hr{
  width : 80%;
  margin-top: 40px;
}
img{
    margin-top : 40px
  }
@media screen and (max-width: 600px) {

  .img-container{
    margin-top : 40px
  }
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
*{
  font-family: 'Roboto', sans-serif;
}
h1, h3{
  margin-top : 20px
}
</style>

<script>
import Carousel from '../components/Carousel.vue'
import FooterIcon from '../components/footer-icon.vue'
import NavBar from '../components/NavBar.vue'
export default {
  components: { NavBar, Carousel, FooterIcon },
  name: 'IndexPage',
  data(){
    return{
      pointOfInterests : undefined,
      itineraries : undefined,
      events : undefined
    }
  },
  async asyncData({ $axios }) {
    const pointOfInterests = await $axios.get('/api/pointOfInterests')
    const itineraries = await $axios.get('/api/itineraries')
    const events = await $axios.get('/api/events')
    return {
      pointOfInterests: pointOfInterests.data,
      itineraries : itineraries.data,
      events : events.data
      }
    },
}
</script>
