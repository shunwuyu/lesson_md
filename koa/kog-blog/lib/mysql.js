var mysql = require('mysql2');
var config = require('../config/default.js')

const connection = mysql.createConnection({
  host: config.database.HOST,
  user: config.database.USERNAME,
  database: config.database.DATABASE,
  password : config.database.PASSWORD,
});

let query = function( sql, values ) {
  // 使用连接
  connection.query( sql,values, function(err, rows) {
    // 使用连接执行查询
    console.log(rows)
    //连接不再使用，返回到连接池
  });
}

let users =
    `create table if not exists users(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL,
     pass VARCHAR(100) NOT NULL,
     avator VARCHAR(100) NOT NULL,
     moment VARCHAR(100) NOT NULL,
     PRIMARY KEY ( id )
    );`

console.log('----------------');
let createTable = function( sql ) {
  console.log(sql);
  return query( sql, [] )
}

// 建表
createTable(users)

module.exports = {
	query,
	createTable
}