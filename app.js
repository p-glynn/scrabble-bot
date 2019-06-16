'use strict'

const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(express.static('public'))


app.post('/', (req, res, next) => {
    const { body, params } = req
    console.log({body, params})
})


// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res) => res.sendStatus(404))
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res) => {
    res.send(404)
})

const listener = () => console.log(`Listening on port ${port}!`)
app.listen(port, listener)

module.exports = app