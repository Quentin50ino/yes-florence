<template>
        <div class="card zoom" style="width: 18rem; margin : 15px 20px;">
          <img :src="`${image}`" class="card-img-top" alt="image" height="200px"  @click="clickedCard()">
          <div class="card-body">
            <div>
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
              <nuxt-link :to="{path : `/${typeOfPage}-details/${id}`, query : {group : params}}" class="d-flex justify-content-end" style="padding: 15px; cursor : default;">
                <a @click="goToDetails()" style="cursor : pointer"><img width="50px" :src="arrow" @mouseover="arrow=`https://img.icons8.com/ios-filled/50/000000/circled-right-2.png`" @mouseleave="arrow=`https://img.icons8.com/ios/100/undefined/circled-right-2.png`"/></a>
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
      //id of the object displayed (poi, itinerary or event), that will be used for routing to the details page in the goToDetails() method
      id: {
        type : String,
        required : true
      },
      //type of page of the object (poi, itinerary or event), that will be used for routing to the correct details page in the goToDetails() method
      typeOfPage: {
        type: String,
        required : true
      },
      //title of the object to display passed from parent
    title: {
      type: String,
      required: true,
    },
    //image of the object to display passed from parent
    image: {
      type: String,
      required: true,
    },
    //description of the object to display passed from parent
    description: {
      type: String,
      required: true,
    },
    //date of the object to display passed from parent (only from event's object)
    date: {
      type: String,
      required: false,
    },
    //end date of the object to display passed from parent (only from event's object)
    endDate: {
      type: String,
      required: false,
    },
    //index of the for loop used in the parent for displayed the elements
    index: {
      type : String,
      required : false
    },
    //params we need to pass to the router when the user go to the details page
    params : {
      type : String,
      required : false
    }
  },
  methods : {
    //method called when the user clicks the arrow button in order to route to the details page
    goToDetails() {
      this.$router.push(`/${this.typeOfPage}-details/${this.id}`)
    },
    //method called when the user clicks on the card image
    clickedCard() {
      //in this method we emit an event, that will be used in the parent component in order to handle the click of the user
      //we also need to pass the index of the card that has been clicked
      this.$emit("child-clicked", this.index)
    }
  }
}
</script>