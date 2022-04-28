const isLoggedIn = (req, res, next) => {
    !req.session.currentUser ? res.render('auth/login-form', { errorMessage: 'Desautorizado' }) : next()
}

const isLoggedOut = (req, res, next) => {
    req.session.currentUser ? res.redirect('/') : next()
}


module.exports = { isLoggedIn, isLoggedOut }