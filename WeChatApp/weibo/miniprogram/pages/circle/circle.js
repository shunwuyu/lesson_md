// miniprogram/pages/circle/circle.js
wx.cloud.init();
const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentPage: 'main',
    mainAreaHeight: "calc(100vh - 200rpx)",
    mainAreaMarginTop: "80rpx",
    pageMainData: [],
    addPosterBtnBottom: "190rpx"
  },
  onShow: function () {
    wx.showLoading({
      title: "加载中",
      mask: true
    })
    function cb(userId) {
      console.log('????');
      this.refreshMainPageData(userId)
      // this.refreshMePageData(userId)
    }
    this.getUserId(cb)
  },
  refreshMainPageData(userId) {
    try {
      userId = userId || this.data.userId || wx.getStorageSync("userId")
      if (!userId) {
        throw Error
      }
      wx.showLoading({
        title: "加载中",
        mask: true
      })
      this.getMainPageData(userId)
    } catch (e) {
      console.log(e)
      wx.hideLoading()
      wx.showToast({
        title: "获取用户信息失败，请重新授权登陆",
        image: "/images/error.png"
      })
      wx.navigateTo({
        url: "/pages/index/index"
      })
    }
  },
  getMainPageData (userId) {
    console.log('----------------------------');
    wx.cloud
      .callFunction({
        name: "getPost",
        data: {
          userId: userId,
          isEveryOne: true
        }
      })
      .then(res => {
        console.log(res.result, '++++++ssss')
        this.setData({
          pageMainData: res.result,
          pageMainLoaded: true
        })
      })
      .catch(err => {
        wx.showToast({
          title: "获取动态失败",
          image: "/images/error.png"
        })
        wx.hideLoading()
      })
  },
  getUserId(cb) {
    var value = this.data.userId || wx.getStorageSync("userId")
    // console.log(value, '++++++++');
    wx.getSetting({
      success:(res) => {
        if (res.authSetting["scope.userInfo"]) {
          wx.getUserInfo({
            withCredentials: true,
            success: (userData) => {
              wx.setStorageSync("userId", userData.signature)
              this.setData({
                userId: userData.signature
              })
              db.collection("poster_users")
                .where({
                  userId: userData.signature
                })
                .get()
                .then(searchResult => {
                  if (searchResult.data.length === 0) {
                    wx.showToast({
                      title: "新用户录入中"
                    })
                    db.collection("poster_users")
                      .add({
                        data: {
                          userId: userData.signature,
                          date: db.serverDate(),
                          name: userData.userInfo.nickName,
                          gender: userData.userInfo.gender
                        }
                      })
                      .then(res => {
                        console.log(res)
                        if (res.errMsg === "collection.add:ok") {
                          wx.showToast({
                            title: "录入完成"
                          })
                          if (cb) cb.call(this)
                        }
                      })
                      .catch(err => {
                        wx.showToast({
                          title: "录入失败，请稍后重试",
                          image: "/images/error.png"
                        })
                        wx.navigateTo({
                          url: "/pages/index/index"
                        })
                      })
                  } else {
                    console.log('+++++++++++');
                    if (cb) cb.call(this)
                  }
                })
            }
          })
        } else {
          wx.showToast({
            title: "登陆失效，请重新授权登陆",
            image: "/images/error.png"
          })
          wx.navigateTo({
            url: "/pages/index/index"
          })
        }
      }
    })
  },
  onAddPosterTap: function() {
    wx.navigateTo({
      url: "/pages/add-poster/add-poster"
    })
  },
  onPageMsgTap: function() {
    this.setData({
      currentPage: "msg"
    })
  },
  onPageMeTap: function() {
    this.setData({
      currentPage: "me"
    })
  },
  onPageMainTap: function() {
    this.setData({
      currentPage: "main"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "小圈圈"
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})