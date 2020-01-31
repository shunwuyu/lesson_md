var http = require("http")
var fs   = require("fs")
var url  = require("url")

http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname
    var fsPath = __dirname + pathname
    fs.access(fsPath, fs.constants.R_OK, function(err){ //fs.constants.R_OK - path 文件可被调用进程读取
        if(err) {
          console.log(err) //可返回404，在此简略代码不再演示
        }else {
          var file = fs.statSync(fsPath) //文件信息
          var lastModified = file.mtime.toUTCString()
          var ifModifiedSince = req.headers['if-modified-since']
          //传回Last-Modified后，再请求服务器会携带if-modified-since值来和服务器中的Last-Modified比较
          var maxAgeTime = 60 //设置超时时间
          if(ifModifiedSince && lastModified == ifModifiedSince) { //客户端修改时间和服务端修改时间对比
              res.writeHead(304,"Not Modified")
              res.end()
          } else {
            fs.readFile(fsPath, function(err,file){
                if(err) {
                  console.log('readFileError:', err)
                }else {
                    res.writeHead(200,{
                        "Cache-Control": 'max-age=' + maxAgeTime,
                        "Last-Modified" : lastModified
                    })
                    res.end(file)
                }
            })
          }
        }
    })
}).listen(3030)