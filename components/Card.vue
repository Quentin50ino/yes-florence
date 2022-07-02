<template>
        <div class="card zoom" style="width: 18rem; margin : 15px 20px;">
          <img :src="`${image}`" class="card-img-top" alt="image" height="200px"  @click="clickedCard()">
          <div class="card-body">
            <div @click="clickedCard()">
            <h5 class="card-title">{{title}}</h5>
                <p class="card-text">{{description}}</p>
                <div v-if="typeOfPage==='event' && endDate=='null'" class="d-flex justify-content-between">
                  <h5>Date: </h5><span>{{date}}</span>
                </div>
                <div v-if="typeOfPage==='event' && endDate!='null'" class="d-flex justify-content-between">
                  <h5>Start date: </h5><span>{{date}}</span>
                </div>
                <div v-if="typeOfPage==='event' && endDate!='null'" class="d-flex justify-content-between">
                  <h5>End date: </h5><span>{{endDate}}</span>
                </div>
              </div>

          </div>
              <nuxt-link :to="{path : `/${typeOfPage}-details/${id}`, query : {group : params}}" class="d-flex justify-content-end" style="padding: 15px">
                <a @click="goToDetails()"><img width="50px" :src="arrow" @mouseover="arrow=`https://img.icons8.com/ios-filled/50/000000/circled-right-2.png`" @mouseleave="arrow=`https://img.icons8.com/ios/100/undefined/circled-right-2.png`"/></a>
              </nuxt-link>
      </div>
</template>

<style scoped>
.zoom {
  transition: transform .2s; /* Animation */
}

.zoom:hover {
  transform:  scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>

<script>
export default {
    name : 'Card',
    data(){
      return{
        arrow : "https://img.icons8.com/ios/100/undefined/circled-right-2.png"
      }
    },
    props: {
      id: {
        type : String,
        required : true
      },
      typeOfPage: {
        type: String,
        required : true
      },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: false,
    },
    endDate: {
      type: String,
      required: false,
    },
    index: {
      type : String,
      required : false
    },
    params : {
      type : String,
      required : false
    }
  },
  methods : {
    goToDetails() {
      this.$router.push(`/${this.typeOfPage}-details/${this.id}`)
    },
    clickedCard() {
      this.$emit("child-clicked", this.index)
    }
  }
}
</script>