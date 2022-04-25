const router = require("express").Router()

const Message = require('../models/Message.model')
const Post = require('../models/Post.model')
const Short = require('../models/Short.model')
const User = require('../models/User.model')

router.post('/:postId/like', (req, res, next) => {

})

router.post('/:shortId/like', (req, res, next) => {

})

router.post('/:shortId/masterpiece', (req, res, next) => {

})

router.post('/:shortId/bullshit', (req, res, next) => {

})

router.post('/:shortId/masterpieceOut', (req, res, next) => {

})

router.post('/:shortId/bullshitOut', (req, res, next) => {

})




module.exports = router