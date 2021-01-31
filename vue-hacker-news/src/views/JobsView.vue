<template>
  <div>
    <div v-for="job in this.$store.state.jobs" :key="job">{{jobs}}</div>
  </div>
</template>

<script>
// import { fetchJobsList } from '../api'
// import { fetchList } from '../api/index'

export default {
  data() {
    return {
      jobs: []
    }
  },
  created() {
    
    this.$store.dispatch('FETCH_JOBS')
    
    
    // const type = 'jobs';
    // fetchList(type)
    // .then(response => {
    //   console.log(response)
    //   this.jobs = response.data
    // })
    // .catch(error => {
    //   console.log(error);
    // })

    // var jm = this;
    // fetchJobsList()
    //   .then(function(response) {
    //     console.log(response)
    //     jm.jobs = response.data
    //   })
    //   .catch(function(error) {
    //     console.log(error)
    //   })
  }
}
</script>

<style>

</style>