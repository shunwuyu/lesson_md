var mysql = require('mysql2');
var $conf = require('../conf/db');

const connection = mysql.createConnection({
  host: $conf.mysql.host,
  user: $conf.mysql.user,
  database: $conf.mysql.database,
  password: $conf.mysql.password
});

async function searchSql($sql, params) {
  console.log($sql, '|||||', params);
  return   new Promise((resolve, reject) => {
    // console.log(id,'、、、、、');
    connection.query(
      $sql,
      params,
      function(err, results, fields) {
        // connection.release(); // results contains rows returned by server
        if(results.length) {
          resolve(results)
        }
      }
    );
  })
}

module.exports = {
    searchSql:searchSql
}