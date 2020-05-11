
var http = require("http")
http.createServer(function(req,res){//回调函数
  if (req.url == '/posts') {
    const posts = [{
      id: 94800620,
      title: '获取header中content-type的值'
    }, {
      title: 'post请求头中常见content-type（非常重要）',
      id: 11634055
    }];

    
    var contentType = req.headers['content-type'];
    console.log(req.headers, '-------------------')
    if (contentType == 'text/json') {
      res.end(JSON.stringify(posts))
    } else {
      let postsHtml = posts.map(post => `
        <li>
          ${post.id} ${post.title}
        </li>
      `).join('');
      res.end(`
        <html>
          <body>
            <ul>
              ${postsHtml}
            </ul>
          </body>
        </html>
      `)
    }
    return;

  }
  console.log(req.httpVersion);
  console.log(req.headers);
  console.log(req.method);
  console.log(req.url);
//   console.log(req.trailers);
  console.log(req.complete);
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write("holloe  world")    
  res.end("fdsa");

}).listen(8001);