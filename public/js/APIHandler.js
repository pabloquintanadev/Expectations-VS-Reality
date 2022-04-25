class APIHandler {
    constructor(){
        this.axiosApp=axios.create({
            baseURL: 'https://imdb-api.com/'
        })
    }
    
    //APIKey = k_re2pw0li

    //get movie details
    getDetails(imdbId){
        return this.axiosApp.get(`/en/API/Trailer/k_re2pw0li/${imdbId}`)
    }
}