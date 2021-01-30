import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index.js';
// import VueRouter from 'vue-router';

Vue.config.productionTip = false

// Vue.use(VueRouter);

// const router = new VueRouter({
//   routes: [

//   ]
// })

new Vue({
  render: h => h(App),
  // router: router, 축약하는 문법은 router,
  router,
}).$mount('#app')
