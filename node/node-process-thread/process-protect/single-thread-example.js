const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plan'
  });
  res.end('I am worker, pid: ' + process.pid + ', ppid: ' + process.ppid);
  throw new Error('worker process exception!'); // 测试异常进程退出、重启
}).listen(3003)