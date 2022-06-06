<template>
    <div>
      <nav-bar/>
      <img class="main-img" src="https://i.ytimg.com/vi/6Iw-LM9K8SY/maxresdefault.jpg">
      <div class="d-flex justify-content-center">
      <h1>Services</h1>
      </div>
      <div>
      <div class="d-flex justify-content-center" style="flex-wrap : wrap">
        <card v-for="(service, serviceIndex) of serviceList" 
          :key="`service-index-${serviceIndex}`"
          :id="`${service.id}`"
          :typeOfPage="`service`"
          :title="`${service.type_name}`"
          :image="`${service.image}`"
          :description="``"></card>
    </div>
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
</style>

<script>
import Card from '~/components/Card.vue'
export default {
    components: {
      Card
    },
    data() {
        return {

        }
     },
    async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/servicesType')
    console.log(data)
    return {
      serviceList: data,
    }
  }
}
</script>