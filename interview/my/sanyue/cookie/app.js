const http = require('http')

const server = http.createServer((req, res) => {
    // 获取cookie
    // const cookieStr = req.headers.cookie 
    // console.log(cookieStr)
    // 比如我想设置1天后过期
    const cookieExpires = () => {
        const d = new Date() // 获取当前时间
        d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
        return d.toGMTString()
      }
      
      res.setHeader('Set-Cookie', `msg=hello; expires=${cookieExpires()};`)
//   res.setHeader('Set-Cookie', 'msg=hello;')
  res.end('hello')
})

server.listen(8000)
