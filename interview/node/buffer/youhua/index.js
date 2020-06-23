const http = require('http');

let hello = ''
for (var i = 0; i < 10240; i++) {
  hello += "a";
}

console.log(`Hello：${hello.length}`)
// hello = Buffer.from(hello);

http.createServer((req, res) => {
  res.writeHead(200);
  res.end(hello);
}).listen(8001);
