let express = require('express')
let app = express()
let user = require('../model/user.js')

app.get('/api/user/:userid', function(req, res) {
    let id = req.params.userid

    user.getUser(id, function(err, result) {
        if (!err) {
            res.send(result)
        } else {
            res.status(500).send('Ada error!')
        }
    })
})

module.exports = app