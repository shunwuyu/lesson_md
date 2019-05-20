var _ = require('lodash')
var request = require('request')
var parser = require('./parser')
// 编码转换的库
var iconv = require('iconv-lite')

function spider (opts, callback, handlerMap) {
  // handlerMap 没传
  // handlerMap
  if (_.isObject(callback) && _.isUndefined(handlerMap)) {
    handlerMap = callback
    callback = opts.callback
  } else if (_.isString(opts)) {
    opts = {
      url: opts
    }
  }
  if (!_.isFunction(callback)) {
    callback = () => {}
  }
  opts.encoding = null

  return new Promise((resolve, reject) => {
    opts.callback = function (error, response, body) {
      if (!error) {
        body = iconv.decode(body, opts.decoding || 'utf8')
        // console.log('body', body);
      // 处理json
        try {
          // body = JSON.parse(body)
        } catch (e) {
        }
        console.log('body', body);
        var data = parser(body, handlerMap)
        callback(error, data, response)
        resolve(data, response)
      } else {
        callback(error, body, response)
        reject(error)
      }
    }
    request(opts)
  })
}
module.exports = spider

