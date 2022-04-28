const router = require("express").Router()

const { findById } = require("./../models/Message.model")
const Message = require('./../models/Message.model')
const Post = require('./../models/Post.model')
const Short = require('./../models/Short.model')
const User = require('./../models/User.model')

const fileUploader = require("../config/cloudinary.config")

const APIHandler = require('./../public/js/APIHandler')
const imdb = new APIHandler()


//USERS LIST

router.get('/list', (req, res, next) => {
    User
        .find()
        .then(users => {
            res.render('profile/profiles-list', { users })
        })
        .catch(err => next(err))
})


//PROFILE PAGE

router.get('/details/:userId', (req, res, next) => {

    const { userId } = req.params

    const { _id } = req.session.currentUser

    if (userId === _id) {
        User
            .findById(_id)
            .then(user => res.render('profile/my-profile', user))
            .catch(err => next(err))
    } else {
        User
            .findById(userId)
            .then(user => res.render('profile/details', user))
            .catch(err => next(err))
    }

})

// MY PROFILE

router.get('/myprofile', (req, res, next) => {

    const { _id } = req.session.currentUser

    User
        .findById(_id)
        .then(user => res.render('profile/my-profile', user))
        .catch(err => next(err))

})


//EDIT

router.get('/edit/:userId', (req, res, next) => {

    const { userId } = req.params

    User
        .findById(userId)
        .then(user => {
            res.render('profile/edit-form', user)
        })
        .catch(err => next(err))
})

router.post('/edit/:userId', fileUploader.any('profileImage'), (req, res, next) => {

    const { userId } = req.params
    const { name, username, email } = req.body

    User
        .findByIdAndUpdate(userId, {name, username, email, profileImage: req.files[0].path})
        .then(() => {
            res.redirect(`/profile/myprofile/`)
        })
        .catch(err => next(err))
})


// INBOX PAGE

router.get('/inbox', (req, res, next) => {

    Message
        .find({ destination: req.session.currentUser._id })
        .populate('origin')
        .then(messages => {
            res.render('profile/inbox', { messages })
        })
        .catch(err => next(err))
})

// SAVED MOVIES PAGE

router.get('/saved-movies', (req, res, next) => {

    const { savedMovies } = req.session.currentUser

    User
        .findById(req.session.currentUser._id)
        .then(user => {
            const movieSavedArr = user.savedMovies.map(movie => imdb.getTrailer(movie))
            return Promise
                .all(movieSavedArr)
        })
        .then(responses => res.render('profile/saved-movies', { responses }))
        .catch(err => next(err))

})

//USER'S SHORTS

router.get('/user-shorts/:userId/', (req, res, next) => {

    const { userId } = req.params

    Short
        .find({ author: userId })
        .then(shorts => {
            res.render('profile/user-shorts', { shorts })
        })
        .catch(err => console.log(err))
})


//SAVED SHORTS

router.get('/saved-shorts', (req, res, next) => {

    const { _id } = req.session.currentUser

    User
        .findById(_id)
        .populate({
            path: 'savedShorts',
            populate: [
                { path: 'author' }
            ]
        })
        .then(user => res.render('profile/saved-shorts', user))
        .catch(err => next(err))

})


module.exports = router