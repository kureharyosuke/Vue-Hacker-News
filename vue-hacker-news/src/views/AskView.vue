<template>
  <div>
      <div v-for="ask in asklist" :key="ask">{{asklist}}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index'

export default {
    data() {
      return {
        asklist: []
      }
    },
    created() {
      var as = this;
      fetchAskList()
      .then(function(response){
        console.log(response)
        as.asklist = response.data
      })
      .catch(function (error) {
        console.log(error)
      }) 
    }
}
</script>

<style>

</style>