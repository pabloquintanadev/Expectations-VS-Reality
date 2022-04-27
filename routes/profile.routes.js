const router = require("express").Router()

const Message = require('./../models/Message.model')
const Post = require('./../models/Post.model')
const Short = require('./../models/Short.model')
const User = require('./../models/User.model')

const APIHandler = require('./../public/js/APIHandler')
const imdb = new APIHandler()


//USERS LIST (needed?)

router.get('/list', (req, res, next) => {
    User
        .find()
        .then(users => {
            res.render('profile/profiles-list', { users })
        })
        .catch(err => console.log(err))
})


//PROFILE PAGE

router.get('/details/:userId', (req, res, next) => {

    const { userId } = req.params

    User
        .findById(userId)
        .then(user => res.render('profile/details', user))
        .catch(err => console.log(err))
})


//OWN PROFILE PAGE

router.get('/myprofile', (req, res, next) => {

    const { _id } = req.session.currentUser

    User
        .findById(_id)
        .then(user => res.render('profile/details', user))
        .catch(err => console.log(err))
})


//EDIT

router.get('/edit/:userId', (req, res) => {

    const { userId } = req.params

    User
        .findById(userId)
        .then(user => {
            res.render('profile/edit-form', user)
        })
        .catch(err => console.log(err))
})

router.post('/edit/:userId', (req, res) => {

    const { userId } = req.params


    User
        .findByIdAndUpdate(userId, req.body)
        .then(() => {
            res.redirect(`/profile/myprofile/`)
        })
        .catch(err => console.log(err))
})


// INBOX PAGE

router.get('/inbox', (req, res) => {

    Message
        .find({ destination: req.session.currentUser._id })
        .populate('origin')
        .then(messages => {
            res.render('profile/inbox', { messages })
        })
        .catch(err => console.log(err))
})

// SAVED MOVIES PAGE

router.get('/saved-movies', (req, res) => {

    const { savedMovies } = req.session.currentUser

    const movieSavedArr = savedMovies.map(movie => imdb.getTrailer(movie))



    Promise
        .all(movieSavedArr)
        .then(responses => res.render('profile/saved-movies', { responses }))
        .catch(err => console.log(err))

})

// //USER'S SHORTS

// router.get('/:userId/edit', (req, res) => {

//     const { id } = req.params

//     User
//         .findById(id)
//         .then(user => {
//             res.render('profile/edit-form', user)
//         })
//         .catch(err => console.log(err))
// })


// //SAVED SHORTS

// router.get('/:userId/edit', (req, res) => {

//     const { id } = req.params

//     User
//         .findById(id)
//         .then(user => {
//             res.render('profile/edit-form', user)
//         })
//         .catch(err => console.log(err))
// })


module.exports = router