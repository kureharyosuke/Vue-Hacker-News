<template>
  <div>
    <p v-for="jobs in this.$store.state.jobs" :key="jobs">
      <a href="jobs.url">
        {{jobs.title}}
      </a>
      <small>
        {{jobs.time}} by {{jobs.user}}
      </small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedJobs'
    ])
  },
  created() {    
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style>

</style>