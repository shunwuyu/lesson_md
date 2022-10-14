let http = require('http')

let server = http.createServer((req,res)=>{
  var method = req.method;
  
  if(method === 'POST') {
    const chunks = [];
    req.on('data',(buf)=>{ // 接收数据
      chunks.push(buf);
      console.log(buf, '------')
    })
    req.on('end',()=>{
      // 接收数据完成
      // console.log(buf, '++++++++')
      let buffer = Buffer.concat(chunks);
      console.log(buffer.toString(), '++++++++++++++=');
      res.end('ok')
    })
  }
})
server.listen(8000)
