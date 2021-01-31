import Vue from 'vue';
import Vuex from 'vuex';
// import { fetchList } from '../api/index.js';
import { fetchJobsList, fetchNewsList, fetchShowList , fetchAskList, fetchNewestList  } from '../api/index.js'
// import { fetchNewestList } from '../api/index.js'
// import { fetchAskList } from '../api/index.js'
// import { fetchShowList } from '../api/index.js'
// import { fetchJobsList } from '../api/index.js'


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: { // 3. mutations api -> state
        news: [],
        newest: [],
        ask: [],
        show: [],
        jobs: [],
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        }
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
        },
        SET_SHOW(state, show) {
            state.show = show;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs
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
                .catch(error => {
                    console.log(error)
                })
        },
        FETCH_SHOW({commit}) {
            fetchShowList()
                .then(({data}) => {
                    commit('SET_SHOW', data);
                    console.log(data)
                })
                .catch(error => console.log(error))

        },
        FETCH_JOBS(commit) {
            fetchJobsList()
                .then(({data}) => {
                    commit('SET_JOBS', data)
                })
                .catch(err => console.log(err))
        }
    }
})

// new Vuex.Store({
//   state,
//   getters,
//   mutations,
//   actions,
// })