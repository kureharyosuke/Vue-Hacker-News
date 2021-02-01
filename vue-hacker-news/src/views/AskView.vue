<template>
  <div>
    <p v-for="ask in fetchedAsk" :key="ask">
      <a :href="ask.url">
        {{ask.title}}
      </a>
      <small>
        {{ask.time_ago}} by {{ask.user}}
      </small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {

      ...mapGetters([
        'fetchedAsk'
      ])
    },

    created() {
    this.$store.dispatch('FETCH_ASK')
    
      // #v2
      // const type = 'ask';
      // fetchList(type)
      // .then(response => {
      //   console.log(response)
      //   this.asklist = response.data;
      // })
      // .catch(error=> console.log(error));

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