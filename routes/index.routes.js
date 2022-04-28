const router = require("express").Router();
const User = require('../models/User.model')


/* GET home page */
router.get("/", (req, res, next) => {

  // const user = req.session.currentUser


  if (!req.session.currentUser) {
    res.render("index")
  } else if (req.session.currentUser) {
    User.
      findById(req.session.currentUser._id)
      .then(user => res.render("index", { user }))
      .catch(err => next(err))

  }
});

// // auth routes
// router.use('/auth', require('./auth.routes'))

// // movies routes
// router.use('/movies', require('./movies.routes'))

// // post routes
// router.use('/posts', require('./posts.routes'))

// // message routes
// router.use('/messages', require('./messages.routes'))

// // profile routes
// router.use('/profile', require('./profile.routes'))

// // shorts routes
// router.use('/shorts', require('./shorts.routes'))

// // valoration routes
// router.use('/valoration', require('./valoration.routes'))

module.exports = router;
