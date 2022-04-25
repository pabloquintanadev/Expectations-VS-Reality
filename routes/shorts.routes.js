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

router.get('/:shortId', (req, res) => {

    const { id } = req.params

    Short
        .findById(id)
        .populate('author')
        .then(short => {
            res.render('shorts/short-details', short)
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
        .then(newShort => {
            res.redirect(`/shorts/${newShort._id}`)
        })
        .catch(err => console.log(err))
})

//EDIT

router.get('/:shortId/edit', (req, res) => {

    const { id } = req.params

    Short
        .findById(id)
        .then(short => {
            res.render('shorts/edit-form', short)
        })
        .catch(err => console.log(err))
})

router.post('/:shortId/edit', (req, res) => {

    const { id } = req.params

    Short
        .findByIdAndUpdate(id, req.body)
        .then(short => {
            res.redirect(`/shorts/${newShort._id}`)
        })
        .catch(err => console.log(err))
})

// DELETE

router.post('/:shortId/delete', (req, res) => {

    const { id } = req.params

    Short
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect('/shorts/')
        })
        .catch(err => console.log(err))
})

// SAVE/UNSAVE

router.post('/:shortId/save', (req, res) => {
    const { id } = req.params
    User
        .findById(req.session.currentUser.id)
        .then(user => user.savedShorts.push(id))
        .catch(err => console.log(err))


})

router.post('/:shortId/unsave', (req, res) => {

    const { id } = req.params
    User
        .findById(req.session.currentUser.id)
        .then(user => {
            if (user.savedShorts.includes(id)) {
                user.savedShorts.splice(user.savedShorts.indexOf(id), 1)
            }
        }
        )
        .catch(err => console.log(err))


})




module.exports = router