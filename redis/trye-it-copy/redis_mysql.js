const express = require('express');
const app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '192.168.1.143',
  user: 'root',
  password: '849072',
  database: 'koa_blog'
});
connection.connect();
console.log(connection, '--------');

var redis = require("redis"),
client = redis.createClient({
  host: '192.168.1.143'
});

app.get("/api/students", function (req, res) {
  client.get('students', (err, reply) => {
    if (err)
      throw error;
    if (reply) {
      console.log('from redis cache')
      res.json(JSON.parse(reply))
    } else {
      connection.query('SELECT * FROM users', function(error, results, fields) {
        if (error) throw error;
        client.set('students', JSON.stringify(results));
        // console.log('from mysql select')
        return res.json(results);
      })
    }
    console.log(reply);
  })
  
});

app.listen(1314, function () {
  console.log("Example app listening on port 3000!");
});
