require('dotenv').config()
// const APIAI_TOKEN = process.env.APIAI_TOKEN;
// const APIAI_SESSION_ID = process.env.APIAI_SESSION_ID;

const express = require('express');
const app = express();
app.use(express.static(__dirname + '/views')); 
app.use(express.static(__dirname + '/public'));


const server = app.listen(5000);

const io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log('a user connected');
});

const apiai = require('apiai')('11212121');

app.get('/', (req, res) => {
  res.sendFile('index.html');
});
