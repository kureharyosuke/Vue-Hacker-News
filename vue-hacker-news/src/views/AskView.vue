<template>
  <div>
    <p v-for="ask in fetchedAsk" :key="ask">
      <router-link :to="`item/${ask.id}`" class="text-red-500 sm:text-orange-500 md:text-gray-500 lg:text-purple-500">
        {{ask.title}}
      </router-link>
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