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
  fs.createReadStream('./index.html').pipe(res);
  // res.end('hello world');
});

server.listen(8000);