
const fs = require('fs');
const WebSocket = require('ws');

const wss = new WebSocket.Server({
  port: 3000
});

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log(message);
    let msgData = JSON.parse(message);  
    wss.clients.forEach(client => {
        // if (client.sessionId)
        client.send(message);
    })  
  });
});