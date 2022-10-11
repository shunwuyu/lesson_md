const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: '192.168.31.128',
  user: 'root',
  database: 'blog',
  password: '1234567890'
});
 
// simple query
connection.query(
  'SELECT * FROM `book`',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);
 
// with placeholder
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );