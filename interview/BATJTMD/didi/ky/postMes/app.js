const http = require('http');
const fs = require('fs')
// 创建 HTTP 服务器
const server = http.createServer(function(request, response) {
    if (request.url == '/') {
        fs.createReadStream('./1.html').pipe(response);
    }
});

// 监听端口并启动服务器
server.listen(3001, function() {
  console.log('Server is listening on port 8080');
});