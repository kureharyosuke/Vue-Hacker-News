<template>
  <div id="app">
    <!-- url에 만약 news -->
    <!-- <news-view></news-view> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import NewsView from './views/NewsView.vue'
// /* eslint-disable */
export default {
  // components: { NewsView },
  methods: {
    fetchData() {
      console.log('HI')
      console.log('G')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
