class APIHandler {
    constructor(){
        this.axiosApp=axios.create({
            baseURL: 'https://imdb-api.com/'
        })
    }
    
    //APIKey = k_re2pw0li

    

    //get movie details
    getDetails(movieTitle){
        const movie = this.axiosApp.get(`https://imdb-api.com/en/API/SearchTitle/k_re2pw0li/${movieTitle}`)
        const {imDbId} = movie
        return this.axiosApp.get(`/en/API/Trailer/k_re2pw0li/${imDbId}`)
    }
}