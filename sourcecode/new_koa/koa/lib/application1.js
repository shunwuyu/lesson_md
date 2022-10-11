let http = require('http')
let EventEmitter = require('events')
let context = require('./context')
let request = require('./request')
let response = require('./response')

class Koa extends EventEmitter { // 事件派发器
  constructor () {
    super()
    this.fn
  }
  use (fn) {
    this.fn = fn // 用户使用use方法时，回调赋给this.fn
  }
  listen (...args) {
    let server = http.createServer(this.fn)
    server.listen(...args)
  }
}

module.exports = Koa