var net = require('net');
var tcp_server = net.createServer();

var Sockets = {};
var SocketID = 1;

tcp_server.listen(5678,function (){
  console.log('tcp_server listening 5678');
});

tcp_server.on('connection',function (socket){
  console.log(socket.address());
  Sockets[SocketID] =socket;
  SocketID++;
  DealConnect(socket)
})

tcp_server.on('error', function (){
  console.log('tcp_server error!');
})

tcp_server.on('close', function () {
  console.log('tcp_server close!');
})

function DealConnect(socket){
 
  socket.on('data',function(data){
      data = data.toString();
      // 向所有客户端广播消息
     for(var i in Sockets){
         Sockets[i].write(data);
     }
      // socket.write(data);
      console.log('received data %s',data);
  })

  // 客户端正常断开时执行
  socket.on('close', function () {
      console.log('client disconneted!');
  })
// 客户端正异断开时执行
  socket.on("error", function (err) {
      console.log('client error disconneted!');
  });
}
