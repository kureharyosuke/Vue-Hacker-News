import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js'
import actions from './actions.js'


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: { // 3. mutations api -> state
        news: [],
        newest: [],
        ask: [],
        show: [],
        jobs: [],
        user: {},
    },
    getters: {
        fetchedNews(state) {
            return state.news
        },
        fetchNewest(state) {
            return state.newest
        },
        fetchedAsk(state) {
            return state.ask
        },
        fetchedShow(state) {
            return state.show
        },
        fetchedJobs(state) {
            return state.jobs
        },
        fetchedUser(state) {
            return state.user
        }
    },
    mutations,
    actions,
})

// new Vuex.Store({
//   state,
//   getters,
//   mutations,
//   actions,
// })