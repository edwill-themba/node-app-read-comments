const mysql = require('mysql');
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: '3306',
    database: 'bluebeetledb'
})

conn.connect(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("I am connected");
    }
});

module.exports = conn;