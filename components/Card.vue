<template>
        <div class="card" style="width: 18rem; margin : 10px 20px;" @click="clickedCard()">
          <img :src="`${image}`" class="card-img-top" alt="image" height="200px">
          <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
                <p class="card-text">{{description}}</p>
                <div v-if="typeOfPage==='event'" class="d-flex justify-content-between">
                  <h5>Date: </h5><span>{{date}}</span>
                </div>
                <nuxt-link :to="`/${typeOfPage}-details/${id}`" class="d-flex justify-content-end">
                  <a @click="goToDetails()"><img width="50px" src="https://img.icons8.com/ios/100/undefined/circled-right-2.png"/></a>
                </nuxt-link>
          </div>
      </div>
</template>

<script>
export default {
    name : 'Card',
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
    }
  },
  methods : {
    goToDetails() {
      this.$router.push(`/${this.typeOfPage}-details/${this.id}`)
    },
    clickedCard() {
      this.$emit("child-clicked", this.id - 1)
    }
  }
}
</script>