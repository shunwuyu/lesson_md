// 拿到 stream 里面的可读可写流接口
const fs = require('fs');
const Readable = require('stream').Readable
const Writeble = require('stream').Writable
const rs = new Readable()
const ws = new Writeble()
let n = 0

// 一次次往流里面推数据
rs.push('I ')
rs.push('Love ')
rs.push('Juejin!\n')
// 推送 null 来告诉流可以 close 了
rs.push(null)

// 每一次 push 的内容在 pipe 的时候
// 都会走到 _write 方法，在 _write 里面可以再做处理
ws._write = function(chunk, ev, cb) {
  n++
  console.log('chunk' + n + ': ' + chunk)
  // chunk1: I
  // chunk2: Love
  // chunk3: Juejin!
  fs.appendFile('./demo.txt', chunk.toString(), () => {});
  cb()
}

// pipe 将两者连接起来，实现数据的持续传递，我们可以不去关心内部数据如何流动
rs.pipe(ws)