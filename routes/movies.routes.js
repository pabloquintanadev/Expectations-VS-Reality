const router = require("express").Router()

const Message = require('./../models/Message.model')
const Post = require('./../models/Post.model')
const Short = require('./../models/Short.model')
const User = require('./../models/User.model')

const APIHandler = require('./../public/js/APIHandler')
const imdb = new APIHandler()

router.post('/search', (req, res) => {

    imdb
        .getDetails(req.body)
        .then(movie => {
            res.render('/movies/movie-details', movie)
        })
        .catch(err => console.log(err))
})

router.post('/:movieId/save', (req, res) => {
    const { id } = req.params
    User
        .findById(req.session.currentUser.id)
        .then(user => user.savedMovies.push(id))
        .catch(err => console.log(err))


})

router.post('/:movieId/unsave', (req, res) => {

    const { id } = req.params
    User
        .findById(req.session.currentUser.id)
        .then(user => {
            if (user.savedMovies.includes(id)) {
                user.savedMovies.splice(user.savedMovies.indexOf(id), 1)
            }
        }
        )
        .catch(err => console.log(err))


})



module.exports = router