let mysql = require('mysql');

let dbconnect = {
    getConnection: function() {
        let conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "batam"
        })
        return conn
    }
}
module.exports = dbconnect