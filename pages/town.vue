<template>
<div>
    <nav-bar/>
    <img class="main-img" src="https://aws-tiqets-cdn.imgix.net/images/content/fa34dbee93874c79980ce5292032a119.jpg?auto=format&fit=crop&ixlib=python-3.2.1&q=70&s=2910a50d35dbb14685f8275475d4c9ae">
    <div class="card-container">
        <div>
            <h4>Discover Florence</h4>
            <p> 
            The city is noted for its culture, Renaissance art and architecture and monuments.<br> 
            Due to Florence's artistic and architectural heritage,<br>
            Forbes has ranked it as the most beautiful city in the world of 2010.</p>
            <div class="d-flex interest-card-container">
            <card v-for="(interest, interestIndex) of pointOfInterestList" 
          :id="`${interest.id}`"
          :typeOfPage="`interest`"
          :key="`interest-index-${interestIndex}`"
          :title="`${interest.title}`"
          :image="`${interest.image}`"
          :description="`${interest.description}`"
          style="margin : 0px 4px"></card>
            </div>
        </div>
        <div>
        <card-no-button title="City of Florence"
          image="https://aws-tiqets-cdn.imgix.net/images/content/fa34dbee93874c79980ce5292032a119.jpg?auto=format&fit=crop&ixlib=python-3.2.1&q=70&s=2910a50d35dbb14685f8275475d4c9ae"
          description="Florence was a centre of medieval European trade and finance and one of the wealthiest cities of that era. It is considered by many academics to have been the birthplace of the Renaissance, becoming a major artistic, cultural, commercial, political, economic and financial center.">
        </card-no-button>
        </div>
    </div>
    <footer-icon></footer-icon>
</div>
</template>

<style scoped>
.main-img{
    height: 25em;
    width: 100%;
    object-fit: cover;
}
.card-container{
    display: flex;
    justify-content: center;
    margin: 60px 5em;
}
.town-card{
    width : 100%;
}
.interest-card-container{
    flex-wrap: wrap;
}
</style>

<script>
import CardNoButton from '../components/CardNoButton.vue'
export default {
  components: { CardNoButton },
    data() {
        return {
            pointOfInterestList : []
        }
    },
    async asyncData({ $axios }) {
        const { data } = await $axios.get('/api/pointOfInterests')
        console.log(data)
        return {
            pointOfInterestList: data,
        }
    },
}
</script>