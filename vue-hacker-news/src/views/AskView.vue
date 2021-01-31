<template>
  <div>
      <div v-for="ask in asklist" :key="ask">{{asklist}}</div>
  </div>
</template>

<script>
// import { fetchAskList } from '../api/index'
import { fetchList } from '../api/index';

export default {
    data() {
      return {
        asklist: []
      }
    },
    created() {
      // #v2
      const type = 'ask';
      fetchList(type)
      .then(response => {
        console.log(response)
        this.asklist = response.data;
      })
      .catch(function(error){
        console.log(error)
      })

      // var as = this;
      // fetchAskList()
      // .then(function(response){
      //   console.log(response)
      //   as.asklist = response.data
      // })
      // .catch(function (error) {
      //   console.log(error)
      // }) 
    }
}
</script>

<style>

</style>