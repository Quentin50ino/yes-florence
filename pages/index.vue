<template>
  <div>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <nav-bar/>
    <img class="main-img" src="https://wallpaperaccess.com/full/1127841.jpg">
    <div>
      <h3 class="d-flex justify-content-center" style="margin-top : 40px">Welcome to Florence!</h3>
      <br>
      <h5 class="d-flex justify-content-center" style="padding : 0 70px">Discover Florence and its Metropolitan Area</h5>
      <span class="d-flex justify-content-center" style="padding : 0 70px">The Official Tourism website of the Metropolitan City and of the Municipality of Florence. Find the descriptions of fascinating points of interest, find the opening times of museums and all the events taking place in Florence and around. Follow our tips and itineraries, try the most amazing experiences.</span>
      <div>
        <div class="d-flex justify-content-center">
          <hr>
        </div>
      <h1 class="d-flex justify-content-center" id="section1">POINTS OF INTEREST</h1>
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
  <nuxt-link to="/interest"><button type="button" class="btn btn-light">DISCOVER</button></nuxt-link>
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
  <nuxt-link to="/itinerary"><button type="button" class="btn btn-light">EXPLORE</button></nuxt-link>
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
  <nuxt-link to="/event"><button type="button" class="btn btn-light">HAVE FUN</button></nuxt-link>
</div>
<div class="d-flex justify-content-center">
  <hr>
</div>
    </div>
       <div>
      <h1 class="d-flex justify-content-center" id="section4">SERVICES</h1>
  <div id="carouselServices" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <carousel
    v-for="(service, serviceIndex) of services" 
    :key="`service-index-${serviceIndex}`"
    :image="service.image"
    :index="serviceIndex"
    :title="service.name"
    :description="service.description"
    ></carousel>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselServices" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselServices" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="d-flex justify-content-center" style="margin-top : 40px">
  <nuxt-link to="/services"><button type="button" class="btn btn-light">FIND</button></nuxt-link>
</div>
<div class="d-flex justify-content-center">
  <hr>
</div>
      <div class="d-flex justify-content-center img-container-2" style="margin-top : 40px; flex-wrap : wrap;">
        <nuxt-link to="/interest-details/2" style="overflow : hidden; margin : 0px 5px;"><img class="img-zoom" :src="`${pointOfInterests[1].image}`" width="400px" height="200px" style=""/></nuxt-link>
        <nuxt-link to="/itinerary-details/1" style="overflow : hidden;"><img class="img-zoom" :src="`${itineraries[0].image}`" width="400px" height="200px"/></nuxt-link>
        <nuxt-link to="/event-details/2" style="overflow : hidden; margin : 0px 5px;"><img class="img-zoom" :src="`${events[1].image}`" width="400px" height="200px" style=""/></nuxt-link>
      </div>
      <div class="d-flex justify-content-center img-container-2" style="margin-top : 40px; flex-wrap : wrap;">
        <nuxt-link to="/interest-details/3" style="overflow : hidden; margin : 0px 5px;"><img class="img-zoom" :src="`${pointOfInterests[2].image}`" width="400px" height="200px" style=""/></nuxt-link>
        <nuxt-link to="/itinerary-details/2" style="overflow : hidden;"><img class="img-zoom" :src="`${itineraries[1].image}`" width="400px" height="200px"/></nuxt-link>
        <nuxt-link to="/event-details/3" style="overflow : hidden; margin : 0px 5px;"><img class="img-zoom" :src="`${events[2].image}`" width="400px" height="200px" style=""/></nuxt-link>
      </div>
      <div class="d-flex justify-content-center img-container-2" style="margin-top : 40px; flex-wrap : wrap;">
        <nuxt-link to="/interest-details/5" style="overflow : hidden; margin : 0px 5px;"><img class="img-zoom" :src="`${pointOfInterests[4].image}`" width="400px" height="200px" style=""/></nuxt-link>
        <nuxt-link to="/itinerary-details/3" style="overflow : hidden;"><img class="img-zoom" :src="`${itineraries[2].image}`" width="400px" height="200px"/></nuxt-link>
        <nuxt-link to="/event-details/4" style="overflow : hidden; margin : 0px 5px;"><img class="img-zoom" :src="`${events[3].image}`" width="400px" height="200px" style=""/></nuxt-link>
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
@media screen and (max-width: 600px) {
  .img-container{
    margin-top : 40px;
  }
  .img-container-2{
    margin: 0px;
  }
  .img-zoom {
    margin : 10px 0px;
  }
}
.zoom {
  transition: transform .2s; /* Animation */
}

.zoom:hover {
  transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.img-zoom {
  transition: transform .2s; /* Animation */
  cursor: pointer;
}

.img-zoom:hover {
  transform: scale(1.25); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.main-img{
    height: 25em;
    width: 100%;
    object-fit: cover;
}
</style>

<style>
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
  components: { NavBar, Carousel, FooterIcon},
  name: 'IndexPage',
  data(){
    return{
      pointOfInterests : undefined,
      itineraries : undefined,
      events : undefined,
      services : undefined
    }
  },
  //In the asyncData function we simply retrieve all the data we need in the page from the database
  //and then we store them in the variables pointOfInterests, itineraries, events and services.
  async asyncData({ $axios }) {
    const pointOfInterests = await $axios.get('/api/pointOfInterests')
    const itineraries = await $axios.get('/api/itineraries')
    const events = await $axios.get('/api/events')
    const services = await $axios.get('/api/services')
    return {
      pointOfInterests: pointOfInterests.data,
      itineraries : itineraries.data,
      events : events.data,
      services : services.data
      }
    },
}
</script>
