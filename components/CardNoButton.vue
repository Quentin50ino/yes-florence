<template>
        <div class="card" style="width: 18rem;" @click="clickedCard()">
          <img :src="`${image}`" class="card-img-top" alt="point of interest image" height="200px">
          <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
                <p class="card-text">{{description}}</p>
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
    }
  },
  methods : {
    clickedCard() {
      this.$emit("child-clicked", this.index)
    }
  }
}
</script>