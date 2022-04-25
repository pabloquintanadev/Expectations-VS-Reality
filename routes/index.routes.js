const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// auth routes
router.use('/auth', require('./auth.routes'))

// movies routes
router.use('/movies', require('./movies.routes'))

// profile routes
router.use('/profile', require('./profile.routes'))

// shorts routes
router.use('/shorts', require('./shorts.routes'))

// valoration routes
router.use('/valoration', require('./valoration.routes'))

module.exports = router;
