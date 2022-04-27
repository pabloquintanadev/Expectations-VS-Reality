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
        .catch(err => console.log(err))
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
        .catch(err => console.log('ERROR ----', err))
})


// SHORT DETAILS


router.get('/details/:shortId', (req, res) => {

    Short
        .findById(req.params.shortId)
        .populate('author')
        .then(short => {
            res.render('shorts/short-details', short)
        })
        .catch(err => console.log(err))
})



//SHORT EDIT

router.get('/edit/:shortId', (req, res) => {

    Short
        .findById(req.params.shortId)
        .then(short => {
            res.render('shorts/edit-form', short)
        })
        .catch(err => console.log(err))
})

router.post('/edit/:shortId', (req, res) => {

    Short
        .findByIdAndUpdate(req.params.shortId, req.body)
        .then(short => {
            res.redirect(`/shorts/details/${short._id}`)
        })
        .catch(err => console.log(err))
})




// DELETE A SHORT

router.post('/delete/:shortId/', (req, res) => {

    Short
        .findOneAndDelete(req.params.shortId)
        .then(() => {
            res.redirect('/shorts')
        })
        .catch(err => console.log(err))
})

// SAVE (to do!!!)

router.post('/:shortId/save', (req, res) => {

    const { shortId } = req.params

    const { _id } = req.session.currentUser

    console.log(_id)

    User.findByIdAndUpdate(_id, { $addToSet: { savedShorts: shortId } })
        .then(() => res.redirect(`/shorts/details/${shortId}`))
        .catch(err => console.log(err))

})



//MASTERPIECE AND BULLSHIT LISTS

router.get('/masterpieces', (req, res, next) => {

    Short
        .find({ isMasterpiece: true })
        // .then(e => console.log(e))
        .then(masterpieces => res.render('shorts/masterpieces', { masterpieces }))
        .catch(err => console.log(err))

})

router.get('/bullshits', (req, res, next) => {
    Short
        .find({ isBullshit: true })
        // .then(e => console.log(e))
        .then(bullshits => res.render('shorts/bullshits', { bullshits }))
        .catch(err => console.log(err))
})


// LIKE A SHORT

router.post('/like/:userId/:shortId', (req, res, next) => {

    const { userId, shortId } = req.params

    User
        .findByIdAndUpdate(userId, { $inc: { likesCounter: 1 } })
        .then(() => res.redirect(`/shorts/details/${shortId}`))
        .catch(err => console.log(err))
})


module.exports = router