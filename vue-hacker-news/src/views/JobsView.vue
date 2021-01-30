<template>
  <div>
    <div v-for="job in jobs" :key="job">{{job}}</div>
  </div>
</template>

<script>
import { fecthJobsList } from '../api'
export default {
  data() {
    return {
      jobs: []
    }
  },
  created() {
    var jm = this;
    fecthJobsList()
      .then(function(response) {
        console.log(response)
        jm.jobs = response.data
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}
</script>

<style>

</style>