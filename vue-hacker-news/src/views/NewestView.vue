<template>
  <div>
      <p v-for="newest in this.$store.state.newest" :key="newest">
          <a :href="newest.url">
              {{newest.title}}
          </a>
          <small>
             {{newest.time_ago}} by {{newest.user}}
          </small>
      </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {  
    computed: {
        ...mapGetters([
            "fetchedNewest"
        ])
    },
    created() {
        this.$store.dispatch('FETCH_NEWEST')
    }

}
</script>

<style>

</style>