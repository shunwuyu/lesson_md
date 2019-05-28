//index.js
const app = getApp()
const db = wx.cloud.database();
Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    isLogin: false
  },
  onWeixinLogin(e) {
    const userInfo = e.detail.userInfo;
    if (userInfo) {
      this.handleLogin();
    }
    else {
      wx.showToast({
        title: '你拒绝了授权，请重新登录',
        icon: 'none'
      })
    }
  },
  handleFetchUserInfo() {
    wx.cloud.callFunction({
      name: 'login',
      success: res => {
        const { openid } = res.result;
        db.collection('user')
        .where({
          openid
        })
        .get({
          success: res => {
            const { _id, ...userInfo } = res.data[0];
            this.setData({
              userInfo
            })
          }
        })
      }
    })
  },
  handleGetUserInfo() {
    // 回调地狱
    return new Promise((resolve, reject) => {
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: res => {
                console.log(res);
                const userInfo = res.userInfo;
                resolve(userInfo);
              },
              fail: err => {
                reject(err);
              }
            })
          }
        }
      })
    })
  },
  handleLogin() {
    wx.showLoading({
      title: '正在登录中...'
    })
    this.handleGetUserInfo()
    .then(userInfo => {
      this.setData({
        userInfo
      })
      wx.login({
        success: (loginRes) => {
          const { code } = loginRes;
          console.log(userInfo, code);
          wx.cloud.callFunction({
            name: 'getSessionKey',
            data: {
              code,
              ...userInfo
            },
            success: res => {
              console.log(res);
              const skey = res.result.skey;
              wx.setStorageSync('skey', skey);
              // 登录成功了
              this.handleFetchUserInfo();
              wx.hideLoading();
            },
            fail: err => {
              console.log(err);
            }
          })
        }
      })
    })
  },

  onLoad: function() {
    const skey = wx.getStorageSync('skey');
    if (skey) {
      wx.checkSession({
        success: () => {
          this.setData({
            isLogin: true
          })
          this.handleFetchUserInfo();
        },
        fail: () => {
          this.setData({
            isLogin: false
          })
        }
      })
    } else {
      this.setData({
        isLogin: false
      })
    }
  },

  onGetUserInfo: function(e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        
        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath
            
            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

})
