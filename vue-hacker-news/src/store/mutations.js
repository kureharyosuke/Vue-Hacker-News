export default {
         //2. actions api -> mutations
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
}