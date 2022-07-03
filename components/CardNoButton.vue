<template>
        <div class="card shadow" style="width: 22rem; margin : 20px 20px;" @click="clickedCard()">
          <img :src="`${image}`" class="card-img-top" alt="point of interest image" height="200px">
          <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
                <p class="card-text">{{description}}</p>
          </div>
      </div>
</template>

<style scoped>
.shadow{
  box-shadow: none;
}
.shadow:hover {
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
    //index of the for loop used in the parent for displayed the elements
    index: {
      required : false
    }
  },
  //method called when the user clicks on the card
  methods : {
    clickedCard() {
      //in this method we emit an event, that will be used in the parent component in order to handle the click of the user
      //we also need to pass the index of the card that has been clicked
      this.$emit("child-clicked", this.index)
    }
  }
}
</script>