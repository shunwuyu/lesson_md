// <https://api.github.com/events?page=2>; rel="next", <https://api.github.com/events?page=10>; rel="last"
const http = require('./http.js');

const parseLinks = header => {
  if (!header || header.length == 0) {
    return {}
  }
  const links = {}

  const parts = header.split(',')
  parts.map(p => {
    const section = p.split(';')
    if (section.length != 2) {
      throw new Error("section could not be split on ';'")
    }
    // console.log(111, section[0].replace(/<(.*)>/, '$1'));
    // $1 正则里面的 代表分组
    // < 开头 > 结尾 中间是任意的字符串
    const url = section[0].replace(/[<>]/, '').trim()
    const name = section[1].trim()

    links[name] = url
  })

  return links
}

const wrap = (promise, reqHeaders = {}) => new Promise((resolve, reject) => {
  promise.then(({ status, headers, data }) => {
    if (status !== 200) {
      return reject(new Error('status !== 200'))
    }
    const links = parseLinks(headers.link || headers.Link)
    const nextUrl = links['rel="next"']
    if (nextUrl) {
      // 当前请求得到的数据
      // 下一个
      return resolve({
        data,
        next: () => wrap(http.get(nextUrl, { headers: reqHeaders }), reqHeaders)
      })
    }
    return resolve({ data, next: null })
  }).catch(error => reject(error))
})

module.exports = {
  wrap
}