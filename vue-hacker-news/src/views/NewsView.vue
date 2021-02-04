<template>
  <div>
      <p v-for="news in fetchedNews" :key="news">
        <a :href="news.url" class="text-red-500 sm:text-orange-500 md:text-gray-500 lg:text-purple-500">
          {{news.title}}
        </a>
        <small>
         {{news.time_ago}} by 
         <router-link v-bind:to="`/user/${news.user}`">{{news.user}}</router-link>
        </small>
      </p>
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