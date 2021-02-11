<template>
  <div id="app">
    <!-- url에 만약 news -->
    <!-- <news-view></news-view> -->
    <!-- <ToolBar></ToolBar> -->
    <tool-bar></tool-bar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
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

/* Router Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
