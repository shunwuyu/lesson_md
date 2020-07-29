//index.js
const app = getApp();
const db = wx.cloud.database();
Page({
  data: {
    userInfo: {},
    goodListss: [
    ],
    isLogin: false
  },

  onLoad: function() {
    this.fetchGoodLists();
    const skey = wx.getStorageSync('skey');
    if (skey) {
      wx.checkSession({
        success: () => {
          console.log(1);
          this.setData({
            isLogin: true
          })
          this.handleFetchUser();
          //session_key 未过期，并且在本生命周期一直有效
        },
        fail: function () {
          this.setData({
            isLogin: false
          })
          // session_key 已经失效，需要重新执行登录流程
        }
      })
    } else {
      this.setData({
        isLogin: false
      })
    }
    
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          // wx.getUserInfo({
          //   success: res => {
          //     this.setData({
          //       avatarUrl: res.userInfo.avatarUrl,
          //       userInfo: res.userInfo
          //     })
          //   }
          // })
        }
      }
    })
  },
  fetchGoodLists() {
    db.collection('goodLists')
    .get()
    .then(res => {
      this.setData({
        goodLists: res.data
      })
    })
  },
  onGetUserInfo: function(e) {
    console.log('获取用户信息', e.detail);
    if (e.detail.userInfo) {
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
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  },
  onWeixinLogin: function(e) {
    const userInfo = e.detail.userInfo;
    if (userInfo) {
      this.handleLogin();
    } else {
      wx.showToast({
        title: '你拒绝了授权请求,请重新授权',
        icon: 'none'
      })
    }
  },
  handleFetchUser() {
    wx.showLoading({
      title: '正在获取用户信息',
    })
    wx.cloud.callFunction({
      name: 'login',
      success: res => {
        const { openid } = res.result;
        db.collection('user').where({
          openid, // 填入当前用户 openid
        }).get({
          success: (res) =>  {
            console.log(res);
            const {_id, ...userInfo} = res.data[0] || {};
            if (!openid) {
              this.setData({
                isLogin: false
              })
            }
            this.setData({
              userInfo
            })
            wx.hideLoading();
          }
        })
      },
      fail: err => {
        console.log(err);
      }
    })
  },
  handleGetLocalUserInfo() {
    return new Promise((resolve, reject) => {
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
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
      title: '正在登录中...',
    })
    this.handleGetLocalUserInfo()
    .then(userInfo => {
      console.log('用户信息', userInfo);
      wx.login({
        success: (loginRes) => {
          if (loginRes.code) {
            const code = loginRes.code;
            console.log('code', code);
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
                this.setData({
                  isLogin: true
                })
                this.handleFetchUser();
              },
              fail: err => {
                console.log(err);
              }
            })
          }
        }
      });
    })
  },
  onShareAppMessage() {
    return {
      title: '砍价',
      path: '/pages/index/index'
    }
  },
  onReducePrice(e) {
    const gid = e.currentTarget.dataset.gid;
    const { openid, avatarUrl  } = this.data.userInfo
    wx.cloud.callFunction({
      name: 'reducePrice',
      data: {
        avatarUrl,
        openid,
        gid
      },
      success: res => {
        wx.showToast({
          title: res.result.msg,
        })
        if (res.result.code === 200) {
          this.fetchGoodLists();
        }
      },
      fail: err => {

      }
    })
  }
})
