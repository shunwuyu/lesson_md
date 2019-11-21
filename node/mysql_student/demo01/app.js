var mysql = require('mysql');

var connection = mysql.createConnection({
  host: '192.168.31.128',
  user: 'root',
  password: '1234567890',
  database: 'batschool'
});

connection.connect();

connection.query('SELECT * FROM students', function(error, results, fields) {
  if (error) throw error;
  console.log(results);
});