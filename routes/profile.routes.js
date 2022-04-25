const router = require("express").Router()

const Message = require('./../models/Message.model')
const Post = require('./../models/Post.model')
const Short = require('./../models/Short.model')
const User = require('./../models/User.model')

router.get('/list', (req, res, next) => {
    User
        .find()
        .then(users => {
            res.render('profile/profiles-list', { users })
        })
        .catch(err => console.log(err))
})



router.get('/:userId', (req, res, next) => {

    User
        .findById(req.params)
        .then(user => res.render('profile/user-details', user))
        .catch(err => console.log(err))
})

//EDIT

router.get('/:userId/edit', (req, res) => {

    const { id } = req.params

    User
        .findById(id)
        .then(user => {
            res.render('profile/edit-form', user)
        })
        .catch(err => console.log(err))
})

router.post('/:userId/edit', (req, res) => {

    const { id } = req.params

    User
        .findByIdAndUpdate(id, req.body)
        .then(user => {
            res.redirect(`/user/${user._id}`)
        })
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
// //SAVED FILMS

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