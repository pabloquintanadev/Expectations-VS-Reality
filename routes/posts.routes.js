const router = require("express").Router()

const Message = require('../models/Message.model')
const Post = require('../models/Post.model')
const Short = require('../models/Short.model')
const User = require('../models/User.model')

const APIHandler = require('../public/js/APIHandler')
const imdb = new APIHandler()


//POSTS


//NEW POST

router.post('/:movieOrShortId/new-post', (req, res) => {

    const author = req.session.currentUser
    const { movieOrShortId } = req.params
    const { textContent, type } = req.body

    Post
        .create({ author, textContent, type, movieOrShortId })
        .then(() => res.redirect(`/movies/details/${movieOrShortId}`))
        .catch(err => console.log(err))

})

// //EDIT A POST


// router.get('/edit/:postId', (req, res) => {

//     const { post_id } = req.params

//     Post
//         .findById(post_id)
//         .then(post => {
//             res.render('posts/edit-form', post)
//         })
//         .catch(err => console.log(err))
// })

// router.post('/edit/:postId', (req, res) => {

//     const { post_id } = req.params

//     Post
//         .findByIdAndUpdate(post_id, req.body)
//         .find({ movieOrShortId: id })
//         .then(post => {
//             if (isShort) {
//                 res.render(`shorts/${movieOrShortId}/short-details`, post)
//             } else {
//                 res.render(`/movies/${movieOrShortId}/movie-details`, post)
//             }
//         })
//         .catch(err => console.log(err))
// })


// DELETE A POST

router.post('/:postId/delete/:movieId', (req, res) => {

    const { postId, movieId } = req.params

    Post
        .findByIdAndDelete(postId)
        .then(() => {
            res.redirect(`/movies/details/${movieId}`)
        })
        .catch(err => console.log(err))
})


//LIKE A POST

// router.post('/:userId/like', (req, res, next) => {

//     const { userId } = req.params

//     User
//         .findByIdAndUpdate(userId, { $inc: { key: likesCounter } })

// })



module.exports = router
