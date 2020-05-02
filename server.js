let app = require('./controller/app.js')

let server = app.listen(1337, function() {
    let port = server.address().port

    console.log("App sudah jalan pada port http://localhost:" + port)
})