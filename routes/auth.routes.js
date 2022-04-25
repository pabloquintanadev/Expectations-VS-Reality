const router = require("express").Router()
const bcryptjs = require('bcryptjs')
const saltRounds = 10

const User = require('./../models/User.model')


router.get('/register', isLoggedOut, (req, res) => {
    res.render('auth/register-form')
})

router.post('/register', isLoggedOut, (req, res, next) => {

    const { username, email, plainPassword } = req.body

    bcryptjs
        .genSalt(saltRounds)
        .then(salt => bcryptjs.hash(plainPassword, salt))
        .then(hashedPassword => User.create({ username, email, password: hashedPassword }))
        .then(() => res.redirect('/'))
        .catch(error => next(error));
})


router.get('/loginsesion', isLoggedOut, (req, res) => {
    res.render('auth/login-form')
})


router.post('/login', isLoggedOut, (req, res, next) => {

    const { email, plainPassword } = req.body

    if (email.length === 0 || plainPassword.length === 0) {
        res.render('auth/login-form', { errorMessage: 'Rellena todos los campos' })
        return
    }

    User
        .findOne({ email })
        .then(user => {
            if (!user) {
                res.render('auth/login-form', { errorMessage: 'Usuario no reconocido' })
                return
            }

            if (!bcryptjs.compareSync(plainPassword, user.password)) {
                res.render('auth/login-form', { errorMessage: 'Contraseña no válida' })
                return
            }

            req.session.currentUser = user          // <= THIS means logging in a user
            res.redirect('/')
        })
        .catch(error => next(error));
})


router.post('/logout', (req, res, next) => {
    req.session.destroy(() => res.redirect('/'))
})


module.exports = router