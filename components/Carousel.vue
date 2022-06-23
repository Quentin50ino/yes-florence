<template>
    <div :class="{'carousel-item active' : index===0, 'carousel-item' : index!==0}" data-bs-interval="2000">
      <div class="d-flex justify-content-center">
          <img  class="zoom" height="400px" :src="`${image}`">
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
.zoom {
  transition: transform .5s; /* Animation */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.zoom:hover {
  transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
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