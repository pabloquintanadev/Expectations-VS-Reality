const isLoggedIn = (req, res, next) => {
    !req.session.currentUser ? res.render('auth/login-form', { errorMessage: 'Desautorizado' }) : next()
}

const isLoggedOut = (req, res, next) => {
    req.session.currentUser ? res.redirect('/') : next()
}

const checkRole = (...rolesToCheck) => (req, res, next) => {
    if (rolesToCheck.includes(req.session.currentUser.role)) {
        next()
    } else {
        res.render('index', { errorMessage: 'Tu rol no puede hacer eso' })
    }
}


module.exports = { isLoggedIn, isLoggedOut, checkRole }