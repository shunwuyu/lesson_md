// http
const http = require('http');
const url = require('url');
const qs = require('querystring');

http.createServer((req, res) => {
  // 自己的 服务器
  if (req.url == '/favicon.ico') return;
  // 把 url 解析成一个对象
  const reqObj = url.parse(req.url);
  // get 请求 在 query 属性
  const queryObj = qs.parse(reqObj.query);
  console.log('正在请求', queryObj);
  // mime 类型
  // image/jpg 
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf-8',
  });
  res.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    ${JSON.stringify(queryObj)}
  </body>
  </html>
  `);
}).listen(3000, () => {
  console.log('服务正在 3000 端口运行');
})
