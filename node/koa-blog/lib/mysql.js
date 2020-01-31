var mysql = require('mysql');
var config = require('../config/default.js');
var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE
});
/**
 * 创建用户表：
 * create table if not exists users(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL,
     pass VARCHAR(100) NOT NULL,
     avator VARCHAR(100) NOT NULL,
     moment VARCHAR(100) NOT NULL,
     PRIMARY KEY ( id )
    );
 */
let query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release();
        })
      }
    })
  })
}
// 通过名字查找用户
let findDataByName =  ( name ) => {
  let _sql = `select * from users where name="${name}";`
  return query( _sql)
}
// 注册用户
let insertData = ( value ) => {
  let _sql = "insert into users set name=?,pass=?,avator=?,moment=?;"
  return query( _sql, value )
}
module.exports = {
  query,
  findDataByName,
  insertData
}