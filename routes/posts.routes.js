const router = require("express").Router()

const Message = require('../models/Message.model')
const Post = require('../models/Post.model')
const Short = require('../models/Short.model')
const User = require('../models/User.model')

const APIHandler = require('../public/js/APIHandler')
const imdb = new APIHandler()


//POSTS

router.post('/:movieOrShortId/new-post', (req, res) => {

    const author = req.session.currentUser
    const { movieOrShortId } = req.params
    const { textContent, type } = req.body

    Post
        .create({ author, textContent, type, movieOrShortId })
        .then(() => res.redirect(`/movies/details/${movieOrShortId}`))
        .catch(err => console.log(err))


})

router.get('/:postId/edit', (req, res) => {

    const { post_id } = req.params

    Post
        .findById(post_id)
        .then(post => {
            res.render('posts/comment-edit-form', post)
        })
        .catch(err => console.log(err))
})

router.post('/:postId/edit', (req, res) => {

    const { post_id } = req.params

    Post
        .findByIdAndUpdate(post_id, req.body)
        .find({ movieOrShortId: id })
        .then(post => {
            if (isShort) {
                res.render(`shorts/${movieOrShortId}/short-details`, post)
            } else {
                res.render(`/movies/${movieOrShortId}/movie-details`, post)
            }
        })
        .catch(err => console.log(err))
})

router.post('/:postId/delete', (req, res) => {

    const { id } = req.params

    Post
        .findByIdAndDelete(id)
        .then(() => {
            next()
        })
        .catch(err => console.log(err))
})



module.exports = router
