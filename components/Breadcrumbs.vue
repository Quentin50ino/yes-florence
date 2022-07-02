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
      page1: {
        type : String,
        required : true
      },
      page2: {
        type : String,
        required : false
      },
      pageBack: {
        type : String,
        required : true
      },
      params : {
        type : String,
        required : false
      }
    }
}
</script>