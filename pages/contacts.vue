<template>
    <div>
        <nav-bar/>
        <img class="main-img" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/dc/8a/caption.jpg?w=700&h=-1&s=1">
        <div  class="d-flex flex-column align-items-center">
            <div class="d-flex justify-content-center" style="margin-top : 60px">
                <h4>Contacts</h4>
            </div>
            <p>Let's keep in touch!</p>
            <div style="margin-top: 30px">
                <h6 class="d-flex justify-content-center">Telephone Number: </h6>
                <span class="d-flex justify-content-center"> +47 45 80 80 80</span>
            </div>
            <div style="margin-top: 30px">
                <h6 class="d-flex justify-content-center">Mail: </h6>
                <span class="d-flex justify-content-center"> info@yesflorence.it</span>
            </div>
        <div style="margin-top: 30px">
                <h6 class="d-flex justify-content-center">Download our app: </h6>
                <a href='https://play.google.com/store/apps/details?id=it.silfi.feelflorence&hl=it&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img width="150px" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
            </div>
            
            <div style="margin-top: 30px">
                <h6 class="d-flex justify-content-center">Follow us on our social: </h6>
                      <div class="d-flex justify-content-center">
        <ul class="list-inline social-buttons">
          <li class="list-inline-item">
            <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          </li>
          <li class="list-inline-item">
            <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          </li>
          <li class="list-inline-item">
            <a href="#">
            <i class="fab fa-linkedin-in"></i>
          </a>
          </li>
        </ul>
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
</style>

<script>
export default {
    
}
</script>