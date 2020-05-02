let db = require('./databaseConfig.js')
let userDB = {
    getUser: function(userid, callback) {
        let conn = db.getConnection()
        conn.connect(function(err) {
            if (err) {
                console.log(err)
                return callback(err, null)
            } else {
                console.log("Konek anjay!")
                let sql = "SELECT * FROM user WHERE userid = ?"
                conn.query(sql, [userid], function(err, result) {
                    conn.end()
                    if (err) {
                        console.log(err)
                        return callback(err, null)
                    } else {
                        return callback(null, result)
                    }
                })
            }
        })
    }
}

module.exports = userDB