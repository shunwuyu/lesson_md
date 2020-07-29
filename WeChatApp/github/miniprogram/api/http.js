const get = (url, { params = {} } = {}) => new Promise((resolve, reject) => {
  wx.cloud.callFunction({
    name: 'proxy',
    data: {
      method: 'GET',
      url,
      params
    }
  }).then(({ result: { status, headers = {}, data } }) => {
    resolve({ status, headers, data })
  }).catch(error => {
    reject(error)
  })
})

module.exports = {
  get
}