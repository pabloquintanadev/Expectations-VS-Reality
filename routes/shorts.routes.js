const router = require("express").Router()

const fileUploader = require("../config/cloudinary.config")

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

// ESTE SAVE??? HOLA?

router.post('/:shortId/save', (req, res) => {

    const { shortId } = req.params

    const { _id } = req.session.currentUser

    console.log(_id)

    User.findByIdAndUpdate(_id, { $addToSet: { savedShorts: shortId } })
        .then(() => res.redirect(`/shorts/details/${shortId}`))
        .catch(err => console.log(err))

    // const promises = [

    //     Short.findById(shortId),
    //     // User.findById(req.session.currentUser._id),

    // ]

    // Promise
    //     .all(promises)
    //     .then(([short, user]) => {
    //         User.findByIdAndUpdate(_id, { $push: { savedShorts: short } })
    //         res.redirect(`/shorts/details/${shortId}`)
    //     })
    //     .catch(err => console.log(err))


})

// router.post('/:shortId/unsave', (req, res) => {

//     User
//         .findById(req.session.currentUser._id)
//         .then(user => {
//             if (user.savedShorts.includes(req.params.shortId)) {
//                 user.savedShorts.splice(user.savedShorts.indexOf(req.params.shortId), 1)
//             }
//         }
//         )
//         .catch(err => console.log(err))


// })




module.exports = router