import axios from 'axios';

// HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

function fetchNewsList() {
    // return axios.get( config.baseUrl + 'news/1.json')
    return axios.get(`${config.baseUrl}news/1.json`);

 }

// function fetchNewsList() {
//    return axios.get('https://api.hnpwa.com/v0/news/1.json')
// }

// fetchNewsList()
//     .then()
//     .catch()

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`)
    // return axios.get( config.baseUrl + 'jobs/1.json')
}
   
function fetchShowList() {
        return axios.get(`${config.baseUrl}show/1.json`)
        // return axios.get(config.baseUrl + 'show/1.json')
}

function fetchNewestList() {
        // return axios.get(config.baseUrl + 'newest/1.json')
        return axios.get(`${config.baseUrl}newest/1.json`)
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`)
}
 
export {
    fetchNewsList,
    fetchJobsList,
    fetchShowList,
    fetchNewestList,
    fetchAskList
}