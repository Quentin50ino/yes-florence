<template>
<div>
    <nav-bar></nav-bar>
    <breadcrumbs page1="Services" :page2="typeName" pageBack="/services" style="margin-top : 15px"></breadcrumbs>
        <div id="city-map" class="d-flex flex-column align-items-center grey-card">
            <div style="margin-bottom : 12px">
                <h1>{{typeName}}</h1>
            </div>
            <iframe :src="`${this.activeCardIndex!==undefined?services[this.activeCardIndex].iFrame:this.defaultIFrame}`" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div>
       <h3 class="d-flex justify-content-center">{{typeName}} List</h3>
       <info-box-service></info-box-service>
        <div class="d-flex justify-content-center" style="flex-wrap : wrap">
            <card-service
            @child-clicked="clickedCard"
            :class="{'selected-card' : serviceIndex===activeCardIndex}" 
            v-for="(service, serviceIndex) of services" 
          :key="`service-index-${serviceIndex}`"
          :image="service.image"
          :title="service.name"
          :description="service.description"
          :index="serviceIndex"
          :address="service.address"
          :open="service.open"
            ></card-service>
          </div>
        </div>
        <footer-icon></footer-icon>
</div>
</template>

<style scoped>
.grey-card{
    background-color: #dfdfdf;
}
.vl {
  border-left: 1px solid black;
  height: 100px;
}
.info-card {
    margin: 40px 0;
}
.title{
    margin-bottom : 40px
}
.selected-card{
    border : solid 3px #3b5998;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>

<script>
import CardNoButton from '../../components/CardNoButton.vue'
import CardService from '../../components/CardService.vue'
import InfoBoxService from '../../components/info-box-service.vue'
import NavBar from '../../components/NavBar.vue'
export default {
    components : {
        NavBar,
        CardNoButton,
        InfoBoxService,
        CardService,
    },
    data(){
        return {
            services : undefined,
            typeName : undefined,
            activeCardIndex : undefined,
            defaultIFrame : undefined
        }
    },
    async asyncData({ route, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/services/' + id)
        const typeName = await $axios.get('/api/servicesType/' + id)
        return {
            services : data,
            typeName : typeName.data.type_name,
            defaultIFrame:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d9620.824184419678!2d11.247427881111369!3d43.7725484936604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s" + typeName.data.type_name + "%20florence%20center!5e0!3m2!1sit!2sit!4v1654529521437!5m2!1sit!2sit"
        }
        
  },
  methods : {
      clickedCard(e) {
          this.activeCardIndex = e;
          window.location.href = '#city-map';
      }
  }
}
</script>