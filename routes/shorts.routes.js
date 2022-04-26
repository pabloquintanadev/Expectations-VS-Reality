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

// CRUD

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

router.post('/new-short', (req, res) => {

    Short
        .create(req.body)
        .then(newShort => res.redirect(`/shorts/details/${newShort._id}`))
        .catch(err => console.log(err))
})


router.get('/details/:shortId', (req, res) => {

    // // const { id } = req.params

    Short
        .findById(req.params.shortId)
        .populate('author')
        .then(short => {
            res.render('shorts/short-details', short)
        })
        .catch(err => console.log(err))
})

//EDIT

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

// DELETE

router.post('/delete/:shortId/', (req, res) => {

    // const { id } = req.params

    Short
        .findOneAndDelete(req.params.shortId)
        .then(() => {
            res.redirect('/shorts')
        })
        .catch(err => console.log(err))
})

// SAVE/UNSAVE

router.post('/:shortId/save', (req, res) => {
    User
        .findById(req.session.currentUser._id)
        .then(user => user.savedShorts.push(req.params.shortId))
        .catch(err => console.log(err))


})

router.post('/:shortId/unsave', (req, res) => {

    User
        .findById(req.session.currentUser._id)
        .then(user => {
            if (user.savedShorts.includes(req.params.shortId)) {
                user.savedShorts.splice(user.savedShorts.indexOf(req.params.shortId), 1)
            }
        }
        )
        .catch(err => console.log(err))


})




module.exports = router