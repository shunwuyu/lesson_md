const http = require('http');
const fs = require('fs');
const path = require('path');
const staticDir = './static/';

http.createServer((req, res) => {
  // koa-static public 
  // /static/a.png /static/b.png 
  // ^ 以。。。开头
  const reqUrl = req.url;
  console.log('reqUrl', reqUrl);
  if (reqUrl === '/favicon.ico') return false;
  const extname = path.extname(reqUrl);
  console.log('extname', extname);
  if (/^\/static\//.test(reqUrl) && extname) {
    staticServer(req, res);
    return false;
  }
  fs.readFile('./index1.html', 'binary',
  (err, file) => {
    res.write(file, 'binary')
    res.end();
  })

  // const redirPath = path.join(__dirname, staticDir, reqUrl)
  // const files = fs.readdirSync(redirPath);
  // res.end(`
  // <div>
  // ${files.map(fileName => {
  //   const stat = fs.statSync(path.join(redirPath, fileName));
  //   return `<div>
  //   <a href="${path.join(staticDir, fileName)}">${fileName}</a>
  //   </div>`
  // })}
  // </div>
  // `)
})
  .listen(9090, () => {
    console.log('server is running 9090');
  })
function staticServer(req, res) {
  // /static/1.png
  let url = req.url;
  const fileName = path.basename(url);
  const filePath = path.join(__dirname, staticDir, fileName);
  fs.exists(filePath, exists => {
    console.log('exists', exists);
    if (!exists) {
      // res.end('404');
      res.writeHead(404)
      res.end();
      return;
    }
    // fs.readFile(filePath, 'binary',
    // (err, file) => {
    //   if (err) {
    //     res.end(err);
    //   }
    //   res.write(file, 'binary')
    //   res.end();
    // })
    fs.createReadStream(filePath).pipe(res);
  })
}