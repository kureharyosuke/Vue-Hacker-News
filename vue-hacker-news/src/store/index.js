import Vue from 'vue';
import Vuex from 'vuex';
// import { fetchList } from '../api/index.js';
import { fetchNewsList } from '../api/index.js'
import { fetchNewestList } from '../api/index.js'
import { fetchAskList } from '../api/index.js'


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: { // 3. mutations api -> state
        news: [],
        newest: [],
        ask: [],
    },
    mutations: { //2. actions api -> mutations
        SET_NEWS(state, news) { //(state, data)
            state.news = news;
        },
        SET_NEWEST(state, newest) {
            state.newest = newest;
        },
        SET_ASK(state, ask) {
            state.ask = ask;
        }

    },
    actions: { //1. backenc api  -> actions
        FETCH_NEWS(context) { // context 인자 제공된다. | context.commit
            fetchNewsList()
                .then(response => {
                    console.log(response)
                    context.commit('SET_NEWS', response.data);
                })
                .catch(error => {
                    console.log(error)
                })
        },
        FETCH_NEWEST(context) {
            fetchNewestList()
                .then(response => {
                    console.log(response)
                    context.commit('SET_NEWEST', response.data)
                })
        },
        FETCH_ASK(context) { //context 인자값을 context.commit -> mutations
            fetchAskList()
                .then(response => {
                    console.log(response)
                    context.commit('SET_ASK', response.data);
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