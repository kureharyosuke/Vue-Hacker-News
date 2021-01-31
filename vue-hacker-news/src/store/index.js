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
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        }
    },
    mutations: mutations,
    actions: actions
})

// new Vuex.Store({
//   state,
//   getters,
//   mutations,
//   actions,
// })