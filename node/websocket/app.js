// const path = require('path');
const http = require('http');
const fs = require('fs');
const WebSocket = require('ws');
const server = http.createServer((req, res) => {
  if (req.url == '/') {
    fs.createReadStream('index.html').pipe(res);
    return;
  }
  res.end('hello world');
})
const wss = new WebSocket.Server({ server: server });
wss.on('connection', (ws) => {
  console.log('heiheihei');
  ws.on('message', (message) => {
    console.log(message.sessionId);
    let msgData = JSON.parse(message);  
    wss.clients.forEach(client => {
        // if (client.sessionId)
        client.send(message);
    })  
  });
});
server.listen(3000);