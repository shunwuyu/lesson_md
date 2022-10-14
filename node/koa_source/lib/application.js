let http = require('http')
let EventEmitter = require('events')
let context = require('./context');
let request = require('./request');
let response = require('./response');
class Koa extends EventEmitter {
  constructor () {
    super()
    this.fn
    this.context = context;
    this.request = request;
    this.response = response;
  }
  use (fn) {
    this.fn = fn // 用户使用use方法时，回调赋给this.fn
  }

  createContext(req, res){
    const ctx = Object.create(this.context)
    const request = ctx.request = Object.create(this.request)
    const response = ctx.response = Object.create(this.response)
    ctx.req = request.req = response.req = req
    ctx.res = request.res = response.res = res
    request.ctx = response.ctx = ctx
    request.response = response
    response.request = request
    return ctx
  }

  handleRequest(req,res){ 
    
    let ctx = this.createContext(req, res) 
    this.fn(ctx)
    res.end(ctx.body)
  }

  listen (...args) {
    let server = http.createServer(this.handleRequest.bind(this)) // 放入回调
    server.listen(...args)
  }
}

module.exports = Koa