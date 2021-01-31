<template>
  <div>
      <div v-for="user in users" :key="user">{{user}}</div>
      <div v-for="user in users" :key="user">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js'

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    var vm = this;
    fetchNewsList()
    // axios.get('https://api.hnpwa.com/v0/news/1.json')
    //   .then(response => this.users = response.data)
    //   .catch()
      .then(function(response) {
        console.log(response)
        vm.users = response.data;
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}
</script>

<style>

</style>