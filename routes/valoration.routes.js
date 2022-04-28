const router = require("express").Router()

const Message = require('../models/Message.model')
const Post = require('../models/Post.model')
const Short = require('../models/Short.model')
const User = require('../models/User.model')


// MAKE MASTERPIECE

router.post('/:shortId/masterpiece', (req, res) => {

    const { shortId } = req.params

    Short
        .findByIdAndUpdate(shortId, { isMasterpiece: true, isBullshit: false })
        .then(() => res.redirect(`/shorts/details/${shortId}`))
        .catch(err => next(err))

})

// MAKE BULLSHIT

router.post('/:shortId/bullshit', (req, res) => {

    const { shortId } = req.params

    Short
        .findByIdAndUpdate(shortId, { isMasterpiece: false, isBullshit: true })
        .then(() => res.redirect(`/shorts/details/${shortId}`))
        .catch(err => next(err))

})

// LIKE A SHORT or A POST IN A SHORT

router.post('/shortlike/:userId/:shortId', (req, res, next) => {

    const { userId, shortId } = req.params

    User
        .findByIdAndUpdate(userId, { $inc: { likesCounter: 1 } })
        .then(() => res.redirect(`/shorts/details/${shortId}`))
        .catch(err => next(err))
})


// LIKE A POST IN A MOVIE

router.post('/movielike/:userId/:movieId', (req, res, next) => {

    const { userId, movieId } = req.params

    User
        .findByIdAndUpdate(userId, { $inc: { likesCounter: 1 } })
        .then(() => res.redirect(`/movies/details/${movieId}`))
        .catch(err => next(err))
})

module.exports = router