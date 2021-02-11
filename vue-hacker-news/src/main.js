import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js';
import { store } from './store/index.js'
import './assets/styles/index.css';
import VueMdijs from 'vue-mdijs'
import { mdiMagnify } from '@mdi/js'

VueMdijs.add({ mdiMagnify })
Vue.use(VueMdijs)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
