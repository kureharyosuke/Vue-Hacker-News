import { fetchJobsList, fetchNewsList, fetchShowList , fetchAskList, fetchNewestList  } from '../api/index.js'
//1. backenc api  -> actions
export default {
     
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