<template>
  <div>
      <p v-for="newest in fetchedNewest" :key="newest">
          <a :href="fetchedNewest.url">
              {{fetchedNewest.title}}
          </a>
          <small>
             {{fetchedNewest.time_ago}} by {{fetchedNewest.user}}
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