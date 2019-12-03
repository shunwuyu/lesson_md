const http = require('../http.js')
const pageable = require('../pageable.js')

const search = () => ({
  repos: ({ q, sort = '', order = 'desc' }) => {
    const url = `https://api.github.com/search/repositories?q=${q}&sort=${sort}&order=${order}`
    const promise = http.get(url)
    return pageable.wrap(promise)
  }
});

module.exports = search