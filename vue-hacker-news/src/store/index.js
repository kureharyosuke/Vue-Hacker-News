import Vue from 'vue';
import Vuex from 'vuex';
// import { fetchList } from '../api/index.js';
import { fetchNewsList } from '../api/index.js'


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: { // 3. mutations api
        news: []
    },
    mutations: { //2. actions api
        SET_NEWS(state, news) { //(state, data)
            state.news = news;
        }
    },
    actions: { //1. backenc api 
        FETCH_NEWS(context) { // context 인자 제공된다. | context.commit
            fetchNewsList()
                .then(response => {
                    console.log(response)
                    context.commit('SET_NEWS', response.data);
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
})

// new Vuex.Store({
//   state,
//   getters,
//   mutations,
//   actions,
// })