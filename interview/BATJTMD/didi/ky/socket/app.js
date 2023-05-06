const WebSocket = require('ws');

const wss = new WebSocket.Server({
  port: 8080,
  verifyClient: function (info, cb) {
    console.log('Origin: ', info.origin);
    cb(true);
  },
});

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('Received: %s', message);
    ws.send('Hello Client!');
  });

  ws.on('close', function close() {
    console.log('WebSocket closed');
  });
});