import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router';
import { router } from './routes/index.js';
// import Vuex from 'vuex';
import { store } from './store/index.js'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);


Vue.config.productionTip = false

// new Vuex.Store({
//   state,
//   getters,
//   mutations,
//   actions,
// })

// Vue.use(VueRouter);

// const router = new VueRouter({
//   routes: [

//   ]
// })

new Vue({
  render: h => h(App),
  // router: router, 축약하는 문법은 router,
  router,
  store,
}).$mount('#app')
