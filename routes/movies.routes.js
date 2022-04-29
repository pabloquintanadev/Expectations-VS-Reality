const router = require("express").Router()

const Message = require('./../models/Message.model')
const Post = require('./../models/Post.model')
const Short = require('./../models/Short.model')
const User = require('./../models/User.model')

const APIHandler = require('./../public/js/APIHandler')
const imdb = new APIHandler()

const { isLoggedOut, isLoggedIn } = require('./../middleware/route-guard')

//SEARCH

router.post('/search', (req, res, next) => {

    imdb
        .getDetails(req.body.title)
        .then(({ data }) => { res.render('movies/search-list', { movies: data.results }) })
        .catch(err => next(err))
})


// SINGLE MOVIE PAGE

router.get('/details/:movieId', (req, res, next) => {

    const { movieId } = req.params

    const isAdmin = req.session.currentUser.role === 'ADMIN'


    const promises = [
        imdb.getTrailer(movieId),
        Post.find({ movieOrShortId: movieId, type: 'COMMENT' })
            .populate('author'),
        Post.find({ movieOrShortId: movieId, type: 'SPOILER' })
            .populate('author'),
        User
            .findById(req.session.currentUser._id)
    ]

    Promise
        .all(promises)
        .then(([movieInfo, comments, spoilers, user]) => {
            const viewData = { movieInfo: movieInfo.data, comments, spoilers }
            const isSaved = user.savedMovies.includes(movieId)
            res.render('movies/movie-details', { viewData, isAdmin, isSaved })
        })
        .catch(err => next(err))
})

// SAVE A MOVIE

router.post('/:movieId/save', (req, res, next) => {

    const { movieId } = req.params

    User
        .findById(req.session.currentUser._id)
        .update({ $addToSet: { savedMovies: movieId } })
        .then(() => res.redirect(`/movies/details/${movieId}`))
        .catch(err => next(err))
})

// UNSAVE A MOVIE

router.post('/:movieId/unsave', (req, res) => {

    const { movieId } = req.params

    User
        .findById(req.session.currentUser._id)
        .update({ $pull: { savedMovies: movieId } })
        .then(() => res.redirect(`/movies/details/${movieId}`))
        .catch(err => next(err))
})

module.exports = router