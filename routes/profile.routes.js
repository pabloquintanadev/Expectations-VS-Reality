const router = require("express").Router()

const Message = require('./../models/Message.model')
const Post = require('./../models/Post.model')
const Short = require('./../models/Short.model')
const User = require('./../models/User.model')

router.get('/details', (req, res, next) => {
    res.render('profile/details')
})


module.exports = router