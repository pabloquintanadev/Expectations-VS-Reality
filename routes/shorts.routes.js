const router = require("express").Router()

const Message = require('./../models/Message.model')
const Post = require('./../models/Post.model')
const Short = require('./../models/Short.model')
const User = require('./../models/User.model')

router.get('/masterpieces', (req, res, next) => {
    res.render('shorts/masterpieces')
})

router.get('/bullshits', (req, res, next) => {
    res.render('shorts/bullshits')
})


module.exports = router