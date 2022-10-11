var http = require("http")
http.createServer(function(req,res){//回调函数
    if (req.url == '/204') {
      res.writeHead(204);
      return;
      res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
      res.end(`
        <html>
          <head>
          </head>
          <body>
           204
          </body>
        </html>
      `);
      return;
    }
    console.log(req.httpVersion);
    console.log(req.headers);
    console.log(req.method);
    console.log(req.url);
    console.log(req.trailers);
    console.log(req.complete);
    res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
    res.write("holloe  world")    
res.end(`
  <html>
    <head>
    </head>
    <body>
      <a href="/204">去新的页面</a>
    </body>
  </html>
`);
}).listen(8000);