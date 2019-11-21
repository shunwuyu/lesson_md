const http = require('http');
const fs = require('fs');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: '192.168.31.128',
  user: 'root',
  password: '1234567890',
  database: 'batschool'
});

connection.connect();

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == '/') {
    fs.createReadStream('./index.html').pipe(res);
  } else if (req.url == '/students') {
    // res.end({a:1});
    let data = [];

    connection.query('SELECT * FROM students', function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      data = results
      // for (let result of results) {
      //   data.push(result);
      // }
      // console.log(data);
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(data));
    });
  }
  // res.end('hello world');
});

server.listen(8000);