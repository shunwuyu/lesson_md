let EventEmitter = require('events')
let context = require('./context')
let request = require('./request')
let response = require('./response')
let http = require('http');
let Stream = require('stream')

class Koa extends EventEmitter {
  constructor () {
    super()
    this.fn
    this.context = context
    this.request = request
    this.response = response
  }
  use (fn) {
    this.fn = fn
  }
  createContext(req, res){ // 这是核心，创建ctx
    // 使用Object.create方法是为了继承this.context但在增加属性时不影响原对象
    const ctx = Object.create(this.context)
    const request = ctx.request = Object.create(this.request)
    const response = ctx.response = Object.create(this.response)
    // 请仔细阅读以下眼花缭乱的操作，后面是有用的
    ctx.req = request.req = response.req = req
    ctx.res = request.res = response.res = res
    request.ctx = response.ctx = ctx
    request.response = response
    response.request = request
    return ctx
  }
  handleRequest(req,res){ // 创建一个处理请求的函数
    res.statusCode = 404 // 默认404
    let ctx = this.createContext(req, res) // 创建ctx
    this.fn(ctx) // 调用用户给的回调，把ctx还给用户使用。
    console.log(ctx.body instanceof Stream, '++++++++')
    if(typeof ctx.body == 'object'){ // 如果是个对象，按json形式输出
      console.log('++++++++111')
      res.setHeader('Content-Type', 'application/json;charset=utf8')
      res.end(JSON.stringify(ctx.body))
    } else if (ctx.body instanceof Stream) {
      ctx.body.pipe(res)
    }  else if (typeof ctx.body === 'string' || Buffer.isBuffer(ctx.body)) {
      res.setHeader('Content-Type', 'text/htmlcharset=utf8')
      res.end(ctx.body)
    } else {
      res.end('Not found')
    }

    res.end(ctx.body) // ctx.body用来输出到页面，后面会说如何绑定数据到ctx.body
  }

  listen (...args) {
    let server = http.createServer(this.handleRequest.bind(this))
    // 这里使用bind调用，以防this丢失
    server.listen(...args)
  }

}

module.exports = Koa