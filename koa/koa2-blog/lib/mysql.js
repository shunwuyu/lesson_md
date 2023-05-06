var mysql = require('mysql2');
var config = require('../config/default.js')
var pool  = mysql.createPool({
    host     : config.database.HOST,
    user     : config.database.USERNAME,
    password : config.database.PASSWORD,
    database : config.database.DATABASE,
    port     : config.database.PORT
  });
let query = ( sql, values ) => {
    return new Promise(( resolve, reject ) => {
        pool.getConnection( (err, connection) => {
        if (err) {
            reject( err )
        } else {
            connection.query(sql, values, ( err, rows) => {
            if ( err ) {
                reject( err )
            } else {
                resolve( rows )
            }
            connection.release()
            })
        }
    })
})

}

exports.findDataCountByName =  ( name ) => {
    let _sql = `select count(*) as count from users where name="${name}";`
    return query( _sql)
}

// 注册用户
exports.insertData = ( value ) => {
    let _sql = "insert into users set name=?,pass=?,avator=?,moment=?;"
    return query( _sql, value )
  }