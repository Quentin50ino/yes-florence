<template>
<div>
    <nav-bar/>
    <img class="main-img" src="https://aws-tiqets-cdn.imgix.net/images/content/fa34dbee93874c79980ce5292032a119.jpg?auto=format&fit=crop&ixlib=python-3.2.1&q=70&s=2910a50d35dbb14685f8275475d4c9ae">
    <div class="card-container">
        <div style="flex-wrap : wrap;">
            <div class="d-flex justify-content-center">
            <h4>Discover Florence</h4>
            <!--<p> 
            The city is noted for its culture, Renaissance art and architecture and monuments.
            Due to Florence's artistic heritage,
            Forbes has ranked it as the most beautiful city in the world of 2010.</p>-->
            </div>
            <div class="d-flex justify-content-center interest-card-container">
            <card-no-button title="City of Florence"
          image="https://aws-tiqets-cdn.imgix.net/images/content/fa34dbee93874c79980ce5292032a119.jpg?auto=format&fit=crop&ixlib=python-3.2.1&q=70&s=2910a50d35dbb14685f8275475d4c9ae"
          description="Florence was a centre of medieval European trade and finance and one of the wealthiest cities of that era. It is considered by many academics to have been the birthplace of the Renaissance, becoming a major artistic, cultural, commercial, political, economic and financial center.">
        </card-no-button>
            <card-no-button
          title="History of Florence"
          image="https://www.tuscanypeople.com/wp-content/uploads/2020/10/firenze_drone-1829x1350.jpg"
          description="Florence was founded as a Roman military colony about the 1st century BCE, and during its long history it has been a republic, a seat of the duchy of Tuscany, and a capital (1865–70) of Italy. During the 14th–16th century Florence achieved preeminence in commerce and finance, learning, and especially the arts.">
          </card-no-button>
          <card-no-button 
          title="Art in Florence"
          image="https://www.florenceartmuseums.com/wp-content/uploads/2013/05/botticelli-birth-of-venus-uffizi-gallery-1024x661.jpg"
          description="The geniuses of Florence were backed by persons of towering wealth, and the city to this day gives testimony to their passions for religion, for art, for power, or for money. Among the most famous of the city’s cultural giants are Leonardo da Vinci, Michelangelo, Dante, Machiavelli, Galileo, and its most-renowned rulers, generations of the Medici family.">
          </card-no-button>
            </div>
            <div style="margin-top: 40px; flex-wrap : wrap">
                <h4 class="d-flex justify-content-center">City Map</h4>
            <div class="d-flex justify-content-around" style="margin-top:20px">
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d9621.253864197715!2d11.247794228986873!3d43.76987745991937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spunti%20di%20interesse%20florence!5e0!3m2!1sit!2sit!4v1654531536668!5m2!1sit!2sit" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
            </div>
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
    margin: 60px 0;
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