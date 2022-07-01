<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand logo">
      <div class="d-flex justify-content-center mt-auto mb-auto" style="margin-top : 12px">
        <img src="https://raw.githubusercontent.com/Quentin50ino/itineraries_image/main/GIGLIO.png" alt="" height="60px">
        <div class="d-flex flex-column align-items-center mt-auto mb-auto">
          <span style="margin-left : 6px">YesFlorence</span>
          <span style="margin-left : 6px; font-size : 10px">YOUR CITY GUIDE</span>
        </div>
      </div>
      </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav" >
        <li class="nav-item">
          <nuxt-link to="/" class="nav-link" aria-current="page" href="#">HOME</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/town" class="nav-link" aria-current="page" href="#">TOWN</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/interest" class="nav-link" aria-current="page" href="#">POINTS OF INTEREST</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/itinerary" class="nav-link" aria-current="page" href="#">ITINERARIES</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/event" class="nav-link" aria-current="page" href="#">EVENTS</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/services" class="nav-link" aria-current="page" href="#">SERVICES</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/contacts" class="nav-link" aria-current="page" href="/home">CONTACTS</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</template>

<style scoped>
.nav-flex{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
li{
  margin : 0 20px;
}
li:hover{
  color : red;
}
.logo{
  margin : 0 20px;
}
</style>

<script>
export default {
    name : 'NavBar'
}
</script>