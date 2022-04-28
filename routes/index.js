
module.exports = app => {

    //index route
    app.use('/', require('./index.routes'))

    // auth routes
    app.use('/auth', require('./auth.routes'))

    // movies routes
    app.use('/movies', require('./movies.routes'))

    // post routes
    app.use('/posts', require('./posts.routes'))

    // message routes
    app.use('/messages', require('./messages.routes'))

    // profile routes
    app.use('/profile', require('./profile.routes'))

    // shorts routes
    app.use('/shorts', require('./shorts.routes'))

    // valoration routes
    app.use('/valoration', require('./valoration.routes'))
}