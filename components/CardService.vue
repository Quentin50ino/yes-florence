<template>
        <div class="card" style="width: 28rem; margin : 20px 20px;" @click="clickedCard()">
          <img :src="`${image}`" class="card-img-top" alt="point of interest image" height="200px">
          <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
                <div style="margin-top : 20px" class="d-flex justify-content-between">
                    <h6>Description:</h6><p lass="card-text">{{description}}</p>
                </div>
                <div class="d-flex justify-content-between">
                    <h6>Address:</h6><p lass="card-text">{{address}}</p>
                </div>
                <div class="d-flex justify-content-between">
                    <h6>Open: </h6><p lass="card-text">{{open}}</p>
                </div>
          </div>
      </div>
</template>

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