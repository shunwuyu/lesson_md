let dgram = require('dgram');
//创建socket
let socket = dgram.createSocket('udp4');
//发送消息
socket.send('hello',8080,function(){
    console.log('成功')
});
//接收消息
socket.on('message',function(data){
    console.log(data.toString());
})
