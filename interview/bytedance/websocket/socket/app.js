const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const WebSocket = require('ws');

const wss = new WebSocket.Server({ server: server });

wss.on('connection', (ws) => {
  
  // 监听客户端消息
  ws.on('message', (message) => {
    console.log(wss.clients.size);
    let msgData = JSON.parse(message);   
    if (msgData.type === 'open') {
      // 初始连接时标识会话
      ws.sessionId = `${msgData.fromUserId}-${msgData.toUserId}`;
    } else {
      let sessionId = `${msgData.toUserId}-${msgData.fromUserId}`;
      wss.clients.forEach(client => {
        if (client.sessionId === sessionId) {
          client.send(message);
        }
      })  
    }
  })

  // 连接关闭
  ws.on('close', () => {
    console.log('连接关闭');  
  });
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './src/client1.html'));
})
app.get('/2', function (req, res) {
  res.sendFile(path.join(__dirname, './src/client2.html'));
})

server.listen(9000, function () {
  console.log('http://localhost:9000');
});