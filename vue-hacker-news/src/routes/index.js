import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import ShowView from '../views/ShowView.vue'


Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history", //*** http://localhost:8080/#/item -> #을 제거
  routes: [
    {
        path: '/',
        redirect: '/news', // vue router 기본속성기능
    },
    {
        // path: url 주소
        path: '/news',
        // component: url 주소가 갔을 때, 표시될 컴포넌트 (페이지)
        component: NewsView,
    },  
    {
        path: '/ask',
        component: AskView,
    },
    {
        path: '/jobs',
        component: JobsView,
    },
    {
      path: '/user',
      component: UserView,
    },
    {
      path: '/item',
      component: ItemView,
    },
    {
      path: '/show',
      component: ShowView,
    }
  ]
})