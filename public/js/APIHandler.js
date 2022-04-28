const axios = require('axios')

// const APIKey = 'k_re2pw0li'
// const APIKey = 'k_io807sr8'
// const APIKey = 'k_9tehp781'
const APIKey = 'k_noh4ygyb'

class APIHandler {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://imdb-api.com/'
        })
    }

    //get movie details
    getDetails(movie) {
        return this.axiosApp.get(`https://imdb-api.com/en/API/SearchTitle/${APIKey}/${movie}`)
    }

    //get trailer
    getTrailer(movieId) {
        return this.axiosApp.get(`https://imdb-api.com/en/API/Trailer/${APIKey}/${movieId}`)
    }

}

module.exports = APIHandler