const fs = require('fs')
/** 

const rs = fs.createReadStream('./demo.MP4')
const ws = fs.createWriteStream('./demo_copy_safe.mp4')

rs.on('data', (chunk) => {
  // 看看是否缓冲数据被写入，写入是 true，未写入是 false
  if (ws.write(chunk) === false) {
    console.log('still cached');
    rs.pause()
  }
})
rs.on('end', () => {
  // 当没有数据再消耗后，关闭数据流
  ws.end()
})
ws.on('drain', () => {
  console.log('数据被消耗后，继续启动读数据')
  rs.resume()
})
*/
const rs = fs.createReadStream('./01.mp4');
const ws = fs.createWriteStream('./demo-copy.MP4');

rs.on('data', (chunk) => {
  // 当有数据流出时，写入数据
  ws.write(chunk)
})
rs.on('end', () => {
  // 当没有数据时，关闭数据流
  ws.end()
})