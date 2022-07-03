<template>
        <div class="card zoom" style="width: 30rem; margin : 20px 20px; cursor : pointer;" @click="clickedCard()">
          <img :src="`${image}`" class="card-img-top" alt="point of interest image" height="200px">
          <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <hr>
                <div style="margin-top : 20px" class="d-flex flex-column align-items-center">
                    <h6>Description:</h6><p lass="card-text">{{description}}</p>
                </div>
                <div style="margin-top : 20px" class="d-flex flex-column align-items-center">
                    <h6>Information:</h6><p lass="card-text">{{information}}</p>
                </div>
                <hr>
                <div class="d-flex justify-content-between">
                    <h6>Address:</h6><p lass="card-text">{{address}}</p>
                </div>
                <div class="d-flex justify-content-between">
                    <h6>Open: </h6><p lass="card-text">{{open}}</p>
                </div>
          </div>
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
    props: {
    //title of the object to display passed from the parent
    title: {
      type: String,
      required: true,
    },
    //image of the object to display passed from the parent
    image: {
      type: String,
      required: true,
    },
    //description of the object to display passed from the parent
    description: {
      type: String,
      required: true,
    },
    //information of the object to display passed from the parent
    information: {
      type: String,
      required: true,
    },
    //index of the for loop used in the parent for displayed the elements
    index: {
      required : false
    },
    //address of the object to display passed from the parent
    address: {
      type: String,
      required: true,
    },
    //open information of the object to display passed from the parent
    open: {
      type: String,
      required: true,
    },
  },
  methods : {
    //method called when the user clicks on the card
    clickedCard() {
      //in this method we emit an event, that will be used in the parent component in order to handle the click of the user
      //we also need to pass the index of the card that has been clicked
      this.$emit("child-clicked", this.index)
    }
  }
}
</script>