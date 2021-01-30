import axios from 'axios';

// HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

function fecthNewsList() {
    // return axios.get( config.baseUrl + 'news/1.json')
    return axios.get(`${config.baseUrl}news/1.json`);

 }

// function fecthNewsList() {
//    return axios.get('https://api.hnpwa.com/v0/news/1.json')
// }

// fecthNewsList()
//     .then()
//     .catch()

function fecthJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`)
    // return axios.get( config.baseUrl + 'jobs/1.json')
}
    function fecthShowList() {
        return axios.get(`${config.baseUrl}show/1.json`)
        // return axios.get(config.baseUrl + 'show/1.json')
    }

export {
    fecthNewsList,
    fecthJobsList,
    fecthShowList
}