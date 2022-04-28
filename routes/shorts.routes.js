const router = require("express").Router()

const fileUploader = require("../config/cloudinary.config")

const Message = require('./../models/Message.model')
const Post = require('./../models/Post.model')
const Short = require('./../models/Short.model')
const User = require('./../models/User.model')


// CRUD ---

router.get('/', (req, res) => {

    Short
        .find()
        .then(shorts => {
            res.render('shorts/shorts-list', { shorts })
        })
        .catch(err => next(err))
})

// CREATE


router.get('/new-short', (req, res) => {
    res.render('shorts/new-short-form')
})

router.post('/new-short', fileUploader.single('videoFile'), (req, res) => {

    const { title, summary, genre } = req.body
    console.log(req.file)
    const { path } = req.file
    const { currentUser } = req.session

    Short
        .create({ title, summary, genre, videoFile: path, author: currentUser })
        .then(newShort => res.redirect(`/shorts/details/${newShort._id}`))
        .catch(err => next(err))
})


// SHORT DETAILS


router.get('/details/:shortId', (req, res) => {

    const { shortId } = req.params

    const promises = [
        Short.findById(shortId)
            .populate('author'),
        Post.find({ movieOrShortId: shortId, type: 'COMMENT' })
            .populate('author'),
        Post.find({ movieOrShortId: shortId, type: 'SPOILER' })
            .populate('author'),
    ]

    Promise
        .all(promises)
        .then(([shortInfo, comments, spoilers]) => {
            const viewData = { shortInfo, comments, spoilers }
            res.render('shorts/short-details', viewData)
        })
        .catch(err => next(err))
})



//SHORT EDIT

router.get('/edit/:shortId', (req, res) => {

    Short
        .findById(req.params.shortId)
        .then(short => {
            res.render('shorts/edit-form', short)
        })
        .catch(err => next(err))
})

router.post('/edit/:shortId', (req, res) => {

    Short
        .findByIdAndUpdate(req.params.shortId, req.body)
        .then(short => {
            res.redirect(`/shorts/details/${short._id}`)
        })
        .catch(err => next(err))
})

// DELETE A SHORT

router.post('/delete/:shortId/', (req, res) => {

    Short
        .findOneAndDelete(req.params.shortId)
        .then(() => {
            res.redirect('/shorts')
        })
        .catch(err => next(err))
})

// SAVE 

router.post('/save/:shortId', (req, res) => {

    const { shortId } = req.params

    const { _id } = req.session.currentUser

    User.findByIdAndUpdate(_id, { $addToSet: { savedShorts: shortId } })
        .then(() => res.redirect(`/shorts/details/${shortId}`))
        .catch(err => next(err))

})

// UNSAVE A MOVIE

router.post('/unsave/:shortId', (req, res) => {

    const { shortId } = req.params

    User
        .findById(req.session.currentUser._id)
        .update({ $pull: { savedShorts: shortId } })
        .then(() => res.redirect(`/shorts/details/${shortId}`))
        .catch(err => next(err))
})



//MASTERPIECE AND BULLSHIT LISTS

router.get('/masterpieces', (req, res, next) => {

    Short
        .find({ isMasterpiece: true })
        .then(masterpieces => res.render('shorts/masterpieces', { masterpieces }))
        .catch(err => next(err))

})

router.get('/bullshits', (req, res, next) => {
    Short
        .find({ isBullshit: true })
        .then(bullshits => res.render('shorts/bullshits', { bullshits }))
        .catch(err => next(err))
})

module.exports = router