const axios = require('axios')

const APIKey = 'k_re2pw0li'

class APIHandler {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://imdb-api.com/'
        })
    }

    //APIKey = k_re2pw0li



    //get movie details
    getDetails(movie) {
        return this.axiosApp.get(`https://imdb-api.com/en/API/SearchTitle/${APIKey}/${movie}`)
    }

    getTrailer(movieId) {
        return this.axiosApp.get(`https://imdb-api.com/en/API/Trailer/${APIKey}/${movieId}`)
    }


}

module.exports = APIHandler