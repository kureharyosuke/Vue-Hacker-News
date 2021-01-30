<template>
  <div id="app">
    <!-- url에 만약 news -->
    <!-- <news-view></news-view> -->
    <!-- <ToolBar></ToolBar> -->
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
// import NewsView from './views/NewsView.vue'
// /* eslint-disable */
export default {
  components: { ToolBar },
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
body {
  padding: 0; 
  margin: 0;
}
</style>
