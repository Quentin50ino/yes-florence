<template>
    <div style="margin-left : 10px">
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><nuxt-link :to="{path : pageBack, query : { group : params}}"><a href="#" style="color : black">{{page1}}</a></nuxt-link></li>
    <li class="breadcrumb-item active" aria-current="page">{{page2}}</li>
  </ol>
</nav>
    </div>
</template>

<script>
export default {
    name : 'Breadcrumbs',
    props : {
      //name of the first page link of the breadcrumbs (passed from parent)
      page1: {
        type : String,
        required : true
      },
      //name of the second page link of the breadcrumbs (passed from parent)
      page2: {
        type : String,
        required : false
      },
      //path of the page that the active link has to reach (passed from parent)
      pageBack: {
        type : String,
        required : true
      },
      //params that the active link has to pass to the back page during the routing (passed from parent)
      params : {
        type : String,
        required : false
      }
    }
}
</script>