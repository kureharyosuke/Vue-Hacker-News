<template>
  <div>
      <p v-for="news in this.$store.state.news" :key="news">
        <a :href="news.url">
          {{news.title}}
        </a>
        <small>
         {{news.time_ago}} by {{news.user}}
        </small>
      </p>
      <div v-for="news in this.$store.state.news" :key="news">{{ news }}</div>
      <div v-for="news in this.$store.state.news" :key="news">{{ news.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedNews'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>

<style>

</style>