const http = require('./http.js')
const trendings = (since, language) => new Promise((resolve, reject) => {
  if (language === "all") {
    language = ""
  }

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
});

const events = () => ({
  get: () => new Promise((resolve, reject) => {
    wx.request({
      url: 'https://api.github.com/events',
      data: {},
      method: 'GET',
      success: function(res){
        // success
        resolve(res.data)
      },
      fail: function(error) {
        // fail
        reject(error)
      }
    })
  })
});

module.exports = {
  trendings,
  events,
}