const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {

  const user = req.session.currentUser

  if (!user) {
    res.render("index")
  } else {
    res.render("index", { user })
  }
});

// auth routes
router.use('/auth', require('./auth.routes'))

// movies routes
router.use('/movies', require('./movies.routes'))

// post routes
router.use('/posts', require('./posts.routes'))

// message routes
router.use('/messages', require('./messages.routes'))

// profile routes
router.use('/profile', require('./profile.routes'))

// shorts routes
router.use('/shorts', require('./shorts.routes'))

// valoration routes
router.use('/valoration', require('./valoration.routes'))

module.exports = router;
