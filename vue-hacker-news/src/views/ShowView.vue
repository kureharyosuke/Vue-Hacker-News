<template>
  <div>
      <p v-for="show in fetchedShow" :key="show">
          <a :href="show.url">
              {{show.title}}
          </a>
          <small>
              {{show.time_ago}} by {{show.user}}
          </small>
      </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

    computed: {
        ...mapGetters([
            'fetchedShow'
        ])
    },
    created() {
        this.$store.dispatch('FETCH_SHOW')
    }
}
</script>

<style>

</style>