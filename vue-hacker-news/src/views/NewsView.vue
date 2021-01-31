<template>
  <div>
      <div v-for="news in this.$store.state.news" :key="news">{{ news }}</div>
      <div v-for="news in this.$store.state.news" :key="news">{{ news.title }}</div>
  </div>
</template>

<script>
// import { fetchNewsList } from '../api/index.js'
// import { fetchList } from '../api/index.js';

export default {
  // data() {
  //   return {
  //     newLists: []
  //   }
  // },
  created() {
    this.$store.dispatch('FETCH_NEWS')



    // // V2
    // const type = 'news';
    // fetchList(type)
    //   .then((response)=>{
    //   this.newLists = response.data;
    //   console.log(response);
    //   })
    //   .catch(function(error){
    //     console.log(error);
    //   })

    // var vm = this;
    // fetchNewsList()
    // // axios.get('https://api.hnpwa.com/v0/news/1.json')
    // //   .then(response => this.newlists = response.data)
    // //   .catch()
    //   .then(function(response) {
    //     console.log(response)
    //     vm.newlists = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error)
    //   })
  }
}
</script>

<style>

</style>