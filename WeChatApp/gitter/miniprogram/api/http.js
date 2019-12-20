const get = (url, { params = {}, headers = {} } = {}) => new Promise((resolve, reject) => {
  wx.request({
    url: url,
    data: params,
    // header: Object.assign({ 'Authorization': token() }, headers),
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: function (res) {
      const { statusCode, header, data } = res
      resolve({ status: statusCode, headers: header, data })
    },
    fail: function (res) {
      console.info({ res })
      reject(new Error(JSON.stringify(res)))
    },
    complete: function (res) { }
  })
})

module.exports = {
  get
}