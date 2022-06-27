<template>
        <div class="card zoom" style="width: 30rem; margin : 20px 20px;" @click="clickedCard()">
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
    information: {
      type: String,
      required: true,
    },
    index: {
      required : false
    },
    address: {
      type: String,
      required: true,
    },
    open: {
      type: String,
      required: true,
    },
  },
  methods : {
    clickedCard() {
      this.$emit("child-clicked", this.index)
    }
  }
}
</script>