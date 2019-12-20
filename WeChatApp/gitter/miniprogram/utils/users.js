const signIn = token => new Promise((resolve, reject) => {
  wx.setStorageSync('token', token)
  wx.request({
    url: 'https://api.github.com/user',
    data: {},
    header: Object.assign({ 'Authorization': token}, 
    {}),
    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    // header: {}, // 设置请求的 header
    success: function(res){
      // success
      wx.setStorage({
        key: 'user',
        data: res.data
      })
      resolve(res.data);
    },
    fail: function(error) {
      // fail
      reject(error);
    },
    complete: function() {
      // complete
    }
  })
});

module.exports = {
  signIn
}