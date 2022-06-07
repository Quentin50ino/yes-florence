<template>
    <div :class="{'carousel-item active' : index===0, 'carousel-item' : index!==0}" data-bs-interval="2000">
      <div class="d-flex justify-content-center">
          <img height="400px" :src="`${image}`">
      </div>
      <div class="carousel-caption d-block" >
        <h5 style="background-color : #fff">{{title}}</h5>
        <p style="background-color : #fff">{{description}}</p>
      </div>
    </div>
</template>

<style scoped>
@media screen and (max-width: 600px) {
    img{
        width : 100%;
        height: 300px;
    }
}
</style>


<script>
export default {
    name : 'Carousel',
    props : {
        image : {
            type : String,
            required : true
        },
        index : {
            type : Number,
            required : true
        },
        title : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
        }
    }
}
</script>