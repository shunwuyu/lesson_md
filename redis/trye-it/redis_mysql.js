const express = require('express');
const app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '192.168.31.128',
  user: 'root',
  password: '1234567890',
  database: 'batschool'
});
connection.connect();

var redis = require("redis"),
client = redis.createClient({
  host: '192.168.31.128'
});

app.get("/api/students", function (req, res) {
  client.get('students', (err, reply) => {
    if (err)
      throw error;
    if (reply) {
      res.json(JSON.parse(reply))
    } else {
      connection.query('SELECT * FROM students', function(error, results, fields) {
        if (error) throw error;
        client.set('students', JSON.stringify(results));
        return res.json(results);
      })
    }
    console.log(reply);

  })
  
});

app.listen(1314, function () {
  console.log("Example app listening on port 3000!");
});
