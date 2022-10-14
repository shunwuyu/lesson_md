const net = require('net');
const server = net.createServer();
const http = require('http');
const httpserver = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plan'
  });
  res.end('I am worker, pid: ' + process.pid + ', ppid: ' + process.ppid);
});
server.on('connection', (socket) => {
  socket.on('data', () => {
    socket.write('hi')
  })
  socket.on('end', () => {
    socket.write('end connection')
  })
  // socket.write('welcome to here')
  // httpserver.emit('connection', socket);
})
server.listen(8124, () => {
  console.log('server is running');
})