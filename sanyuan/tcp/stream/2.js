let fs = require('fs')
let path = require('path')
let rs = fs.createReadStream(path.resolve(__dirname,'1.txt'),{
  flags: 'r+',
  highWaterMark: 3,
})
rs.on('data',(data)=>{ // 接收数据
  console.log(data.toString())
})
rs.on('end',()=>{ // 接收数据完成
  console.log('end')
})
rs.on('error',(error)=>{
  console.log(error)
})