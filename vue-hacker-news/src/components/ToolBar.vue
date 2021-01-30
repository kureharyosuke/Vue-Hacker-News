<template>
  <div class="header">
      <!-- a tag | to는 URl 입력  -->
      <router-link to="/news">News</router-link> |
      <router-link to="/ask">Ask</router-link> |
      <router-link to="/jobs">Jobs</router-link> |
      <router-link to="/show">Show</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .header{
   display: flex;
   padding: 8px;
   font-size: 2rem;
   font-weight: bold;
   color: #fff;
   background-color: #42b883;
 }
.header .router-link-exact-active {
  color: #35495e;
}
.header a {
  color: #fff;
}

 /* .header a:active {
   router-link-exact-active router-link-active
 } */
 /* .header a:active {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline; 
    }*/
</style>