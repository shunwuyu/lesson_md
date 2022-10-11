var express = require('express');
var app = express();  // 引入express模块
var http = require('http').Server(app);
var io = require('socket.io')(http);
var users = [];
var usersInfo = [];  
// app.get('/', function(req, res){  // 路由为localhost:3000时向客户端响应“hello world”
//   res.send('<h1>Hello world</h1>');  // 发送数据
// });

app.use('/', express.static(__dirname + '/www'));

io.on('connection', function(socket){ // 用户连接时触发
  // console.log('a user connected');
  io.emit('disUser', usersInfo);

  socket.on('login', (user)=> {
    if(users.indexOf(user.name) > -1) { 
        socket.emit('loginError');
    } else {
        users.push(user.name);
        usersInfo.push(user);

        socket.emit('loginSuc');
        socket.nickname = user.name;
        io.emit('system', {
            name: user.name,
            status: '进入'
        });
        io.emit('disUser', usersInfo);
        console.log(users.length + ' user connect.');
    }
  });

  socket.on('sendMsg', (data)=> {
    var img = '';
    for(var i = 0; i < usersInfo.length; i++) {
        if(usersInfo[i].name == socket.nickname) {
            img = usersInfo[i].img;
        }
    }
    socket.broadcast.emit('receiveMsg', {
        name: socket.nickname,
        img: img,
        msg: data.msg,
        color: data.color,
        type: data.type,
        side: 'left'
    });
    socket.emit('receiveMsg', {
        name: socket.nickname,
        img: img,
        msg: data.msg,
        color: data.color,
        type: data.type,
        side: 'right'
    });
  });  
});


http.listen(3000, function(){  // 监听3000端口
  console.log('listening on *:3000'); 
}); 