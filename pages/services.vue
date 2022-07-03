<template>
    <div>
      <nav-bar/>
      <img class="main-img" src="https://i.ytimg.com/vi/6Iw-LM9K8SY/maxresdefault.jpg">
      <div class="d-flex justify-content-center">
      <h1>Services</h1>
      </div>
      <div>
      <div class="d-flex justify-content-center" style="flex-wrap : wrap">
        <card v-for="(service, serviceIndex) of serviceTypeList" 
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
          serviceTypeList : undefined //variable in which will be stored the list of all the types of service (retrieved from databse)
        }
     },
    //In the asyncData function we retrieved the data we need in this page from the database calling our APIs;
    //in this case we valorize the serviceTypeList variable.
    async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/servicesType')
    return {
      serviceTypeList: data,
    }
  }
}
</script>