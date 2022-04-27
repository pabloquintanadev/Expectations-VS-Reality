const router = require("express").Router()

const Message = require('../models/Message.model')
const Post = require('../models/Post.model')
const Short = require('../models/Short.model')
const User = require('../models/User.model')


// MAKE MASTERPIECE

router.post('/:shortId/masterpiece', (req, res) => {

    const { shortId } = req.params

    Short
        .findByIdAndUpdate(shortId, { isMasterpiece: true, isBullshit: false })
        .then(() => res.redirect(`/shorts/details/${shortId}`))
        .catch(err => console.log(err))

})

// MAKE BULLSHIT

router.post('/:shortId/bullshit', (req, res) => {

    const { shortId } = req.params

    Short
        .findByIdAndUpdate(shortId, { isMasterpiece: false, isBullshit: true })
        .then(() => res.redirect(`/shorts/details/${shortId}`))
        .catch(err => console.log(err))

})





module.exports = router