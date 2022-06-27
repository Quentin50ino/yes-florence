<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand logo">
      <div class="d-flex justify-content-center">
        <img src="https://banner2.cleanpng.com/20180519/itf/kisspng-florence-flag-of-italy-clip-art-5b006f760452e7.4742771215267551900177.jpg" alt="" width="30px" height="24px">
      </div>
      </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
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
        <li class="nav-item">
          <nuxt-link to="/interest" class="nav-link active" aria-current="page" href="#">POINTS OF INTEREST</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/itinerary" class="nav-link active" aria-current="page" href="#">ITINERARIES</nuxt-link>
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