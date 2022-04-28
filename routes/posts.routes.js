const router = require("express").Router()

const Message = require('../models/Message.model')
const Post = require('../models/Post.model')
const Short = require('../models/Short.model')
const User = require('../models/User.model')

const APIHandler = require('../public/js/APIHandler')
const imdb = new APIHandler()

//NEW POST ON MOVIE

router.post('/:movieId/new-post', (req, res, next) => {

    const author = req.session.currentUser
    const { movieId } = req.params
    const { textContent, type } = req.body

    Post
        .create({ author, textContent, type, movieOrShortId: movieId })
        .then(() => res.redirect(`/movies/details/${movieId}`))
        .catch(err => next(err))

})

// DELETE A POST ON MOVIE

router.post('/:postId/delete/:movieId', (req, res, next) => {

    const { postId, movieId } = req.params

    Post
        .findByIdAndDelete(postId)
        .then(() => {
            res.redirect(`/movies/details/${movieId}`)
        })
        .catch(err => next(err))
})


//NEW POST ON SHORT

router.post('/shorts/:shortId/new-post', (req, res, next) => {

    const author = req.session.currentUser
    const { shortId } = req.params
    const { textContent, type } = req.body

    Post
        .create({ author, textContent, type, movieOrShortId: shortId })
        .then(() => res.redirect(`/shorts/details/${shortId}`))
        .catch(err => next(err))

})


// DELETE A POST ON SHORT

router.post('/shorts/:postId/delete/:shortId', (req, res, next) => {

    const { postId, shortId } = req.params

    Post
        .findByIdAndDelete(postId)
        .then(() => {
            res.redirect(`/shorts/details/${shortId}`)
        })
        .catch(err => next(err))
})

module.exports = router
