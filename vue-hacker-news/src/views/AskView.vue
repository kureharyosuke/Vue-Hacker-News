<template>
  <div>
      <div v-for="ask in asklist" :key="ask">{{ask.title}}</div>
      <div v-for="ask in fetchedAsk" :key="ask">{{ask.id}}</div>
  </div>
</template>

<script>
// import { fetchAskList } from '../api/index'
// import { fetchList } from '../api/index';
import { mapState, mapGetters } from 'vuex'

export default {
    computed: {

      ...mapGetters([
        'fetchedAsk'
      ])

      // ...mapGetters({
      //   fetchlist :"fetchedAsk" 
      // })

      // #2
      // ...mapState({
      //   asklist: state => state.ask
      // })

      // #1
      // ask() {
      //   return this.$store.state.ask;
      // }
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