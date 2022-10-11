const http = require('./http.js');
const pageable = require('./pageable.js')

const trendings = (since, language) => new Promise((resolve, reject) => {
  // https://github.com/huchenme/github-trending-api
  const url = 'https://github-trending-api.now.sh/repositories'
  http.get(url, { params: { since, language } }).then(({ status, headers, data }) => {
    if (status !== 200) {
      reject(new Error(data))
    }
    const trends = data.map(it => {
      it.stargazers_count = it.stars
      it.full_name = `${it.author}/${it.name}`
      return it
    })
    resolve(trends)
  }).catch(error => {
    reject(error)
  })
})
// 5分钟更新一次的事件
const events = () => ({
  get: () => {
    const promise = http.get('https://api.github.com/events')
    return pageable.wrap(promise)
  }
})
module.exports = {
  trendings,
  events,
}