<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <nuxt-link to="/" class="nav-link active" aria-current="page" href="#">HOME</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/town" class="nav-link active" aria-current="page" href="#">TOWN</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/contacts" class="nav-link active" aria-current="page" href="/home">CONTACTS</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/services" class="nav-link active" aria-current="page" href="#">SERVICES</nuxt-link>
        </li>
        <a class="navbar-brand logo">YesFlorence</a>
        <li class="nav-item">
          <nuxt-link to="/interest" class="nav-link active" aria-current="page" href="#">INTERESTS</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="itinerary" class="nav-link active" aria-current="page" href="#">ITINERARIES</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/event" class="nav-link active" aria-current="page" href="#">EVENTS</nuxt-link>
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
.logo{
  margin : 0 20px;
}
</style>

<script>
export default {
    name : 'NavBar'
}
</script>