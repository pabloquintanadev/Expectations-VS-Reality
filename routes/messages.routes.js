const router = require("express").Router()

const Message = require('./../models/Message.model')
const Post = require('./../models/Post.model')
const Short = require('./../models/Short.model')
const User = require('./../models/User.model')

const APIHandler = require('./../public/js/APIHandler')
const imdb = new APIHandler()

const { isLoggedOut, isLoggedIn } = require('./../middleware/route-guard')



// NEW MESSAGE

router.post('/:destId/new-message', (req, res, next) => {

    const origin = req.session.currentUser._id
    const destination = req.params.destId
    const { textContent } = req.body

    Message
        .create({ origin, destination, textContent })
        .then(() => res.redirect(`/profile/details/${destination}`))
        .catch(err => next(err))
})

//ANSWER A MESSAGE

router.post('/:destId/message-answer', (req, res, next) => {

    const origin = req.session.currentUser
    let destination = req.params.destId
    const { textContent } = req.body

    Message
        .create({ origin, destination, textContent })
        .then(() => res.redirect(`/profile/inbox`))
        .catch(err => next(err))
})


// DELETE A MESSAGE

router.post('/:messageId/delete', (req, res, next) => {

    const { messageId } = req.params

    Message
        .findByIdAndDelete(messageId)
        .then(() => res.redirect(`/profile/inbox`))
        .catch(err => next(err))
})

module.exports = router