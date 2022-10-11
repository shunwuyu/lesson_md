// query-db.js
const mysql = require('mysql');
const pool = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '1234567890',
    database: 'user'
})

let query = function(sql) {
    return new Promise((resolve, reject) => {
        pool.query(sql, function(error, result, fields){
            if (error) throw error;
            resolve(result);
        })
    })
}

module.exports = { query };
