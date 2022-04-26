const axios = require('axios')

class APIHandler {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://imdb-api.com/'
        })
    }

    //APIKey = k_re2pw0li



    //get movie details
    getDetails(movie) {
        console.log('LA BUSQUEDA SOBRE:' + movie)
        const search = this.axiosApp.get(`https://imdb-api.com/en/API/SearchTitle/k_re2pw0li/${movie}`)
        const { results } = search
        console.log('LOS RESULTADOS SON' + search[0])
        // const { imDbId } = foundMovie
        // return this.axiosApp.get(`/en/API/Trailer/k_re2pw0li/${imDbId}`)
    }
}

module.exports = APIHandler