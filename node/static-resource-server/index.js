// 引入http内置模块
const http = require('http')

// 引入chalk 用于美化后台打印
const chalk = require('chalk')

const path = require('path')
const fs = require('fs')
// 引入基本配置
const conf = require('./config')

const mimeType = {
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.html': 'text/html'
}
// 创建一个server 实例
const server = http.createServer((rep, res) => {
  // 拿到路径
  const filePath = path.join(conf.root, rep.url)
  const url = rep.url;
  console.log('url', rep.url);
  // 判断是否为文件或者文件夹
  fs.stat(filePath, (err, stats) => {
    // 设置公共头部信息
    // res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
    if (err) {
      // 状态码
      res.statusCode = 404

      // 找不到提示文本
      res.end(`${filePath} is 404`)

      return
    }
    if (stats.isFile()) {
      // 如果是文件 返回文件内容
      res.statusCode = 200
      
      const extName = path.extname(filePath);
      console.log('filePath------', filePath, extName);
      res.writeHead(200, { 'Content-Type': `${mimeType[extName]}; charset=utf-8` })
      fs.createReadStream(filePath).pipe(res)
    } else if (stats.isDirectory()) {
      //  如果是文件夹，返回文件列表
      fs.readdir(filePath, (err, files) => {
        if (err) return
        res.statusCode = 200
        let fileLink = files.map(fileName => {
          return `<a href="${url === '/' ? '/' : url + '/'}${fileName}">${fileName}</a></br>`
        }).join('');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end(fileLink);
      })
    }
  })
})

// 监听 server 实例

server.listen(conf.port, conf.hostname, () => {
  const addr = `http:// ${conf.hostname}:${conf.port}`

  console.info(`server startd at ${chalk.green(addr)}`)
})

