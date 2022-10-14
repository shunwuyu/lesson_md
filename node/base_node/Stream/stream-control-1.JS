const fs = require('fs')
// 创建一个可读流，把内容从目标文件里一块一块抠出来缓存
const rs = fs.createReadStream('./demo.MP4');
let n = 0
rs
  // 数据正在传递时，触发该事件（以 chunk 数据块为对象）
  // 每次 chunk 块最大是 64kb，如果凑不够 64kb，会缩小为 32kb
  .on('data', (chunk) => {
    // 记录一共获取到了多少次 chunk
    n++
    console.log(chunk.byteLength)
    console.log(Buffer.isBuffer(chunk))
    // console.log('data emits')
    // console.log(chunk.toString('utf8'))
    // 我们可以每次都暂停数据读取，做一些数据中间处理（比如压缩）后再继续读取数据
    rs.pause()
    console.log('暂停获取....')
    setTimeout(() => {
      console.log('继续获取....', n + 1)
      rs.resume()
    }, 100)
  })
  // 数据传递完成后，会触发 'end' 事件
  .on('end', () => {
    console.log(`传输结束，共收到 ${n} 个 Buffer 块`)
  })
  // 整个流传输结束关闭的时候会触发 close
  .on('close', () => {
    console.log('传输关闭')
  })
  // 异常中断或者出错时的回调处理
  .on('error', (e) => {
     console.log('传输出错' + e)
  })
  /**
   * 传输结束，共收到 5 个 Buffer 块
   * 一开始每次都是 64kb
   */