const router = require("express").Router()

const Message = require('./../models/Message.model')
const Post = require('./../models/Post.model')
const Short = require('./../models/Short.model')
const User = require('./../models/User.model')

const APIHandler = require('./../public/js/APIHandler')
const imdb = new APIHandler()

const { isLoggedOut, isLoggedIn } = require('./../middleware/route-guard')

router.post('/search', (req, res) => {

    imdb
        .getDetails(req.body.title)
        .then(({ data }) => { res.render('movies/search-list', { movies: data.results }) })
        .catch(err => console.log(err))
})

router.get('/details/:movieId', (req, res) => {



    const { movieId } = req.params

    const promises = [
        imdb.getTrailer(movieId),
        Post.find({ movieOrShortId: movieId, type: 'COMMENT' }),
        Post.find({ movieOrShortId: movieId, type: 'SPOILER' })
    ]

    Promise
        .all(promises)
        .then(([movieInfo, comments, spoilers]) => {
            const viewData = { movieInfo: movieInfo.data, comments, spoilers }
            res.render('movies/movie-details', viewData)
        })
        .catch(err => console.log(err))




})

// EL SAVE FUNCIONA PERO SE REPITEN. EL UNSAVE NI DE FLAIS

router.post('/:movieId/save', (req, res) => {

    const { movieId } = req.params

    console.log(movieId + 'HOLAAAAAAAAA' + req.session.currentUser.savedMovies)

    User
        .findById(req.session.currentUser._id)
        .update({ $addToSet: { savedMovies: movieId } })
        .then(() => res.redirect(`/movies/details/${movieId}`))
        .catch(err => console.log(err))




})

// router.post('/:movieId/unsave', (req, res) => {

//     const { movieId } = req.params

//     User
//         .findById(req.session.currentUser.id)
//         .then(user => {

//             user.savedMovies.splice(user.savedMovies.indexOf(movieId), 1)

//         }
//         )
//         .then(() => res.redirect(`/movies/details/${movieId}`))
//         .catch(err => console.log(err))


// })





module.exports = router