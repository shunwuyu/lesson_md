var express = require('express');
var bodyParser = require('body-parser')
const fs = require('fs');
const app = express();
var mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'blog'
});

connection.connect();



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/form', function(req, res, next){
  var form = fs.readFileSync('./form.html', {encoding: 'utf8'});
  res.send(form);
  
});

app.post('/login', function(req, res, next){
    console.log(req.body);
    let { username, password } = req.body
    console.log(username, password);
    // username = connection.escape((username));
    // password = connection.escape((password));
    // let sql = `select * from user where username='${username}' and password='${password}'`;
    let sql = `select * from user where username=${connection.escape(username)} and password=${connection.escape(password)}`;
    // let sql = "select * from user where username=" + username + " and password=" + password + "";
    console.log(sql, '---------------------');
    connection.query(
      sql, 
      function(err, results, f) {
        // console.log(err, results);
        console.log(err);
        res.send(results);
      }
    )
})

app.listen(8000);

