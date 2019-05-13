// miniprogram/pages/index/index.js
import Notify from '../dist/notify/notify'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newGroupModal: false,
    groupName: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      num: Math.ceil(Math.random() * 10)
    })
    // wx.cloud.callFunction({
    //   // 云函数名称
    //   name: 'getGroup',
    //   // 传给云函数的参数
    //   data: {
    //     a: 1,
    //     b: 2,
    //   },
    //   success(res) {
    //     console.log(res.result) // 3
    //   },
    //   fail: console.error
    // })
  },
  showNewGroupModal () {
    this.setData({
      newGroupModal: true
    })
  },
  closeDialog() {
    this.setData({
      newGroupModal: false
    })
  },
  creatGroup() {
    // 异步关闭弹窗
    const self = this
    if (this.data.groupName === '') {
      Notify({
        text: '起个名字吧',
        duration: 1500,
        selector: '#notify-selector',
        backgroundColor: '#dc3545'
      })
      self.setData({
        newGroupModal: true
      })
      self.selectComponent("#new-group-modal").stopLoading()
      return
    }
    wx.cloud.callFunction({
      name: 'createGroup',
      data: {
        groupName: self.data.groupName
      },
      success(res) {
        console.log(res)
        self.setData({
          groupName: '',
          newGroupModal: false
        })
        Notify({
          text: '新建成功',
          duration: 1500,
          selector: '#notify-selector',
          backgroundColor: '#28a745'
        })
        setTimeout(() => {
          wx.switchTab({
            url: `/pages/group/group`,
          })
        },1500)
      },
      fail(error) {
        console.log('错误', error)
      }
    })
  },
  onGroupNameChange(event) {
    // console.log(event)
    this.setData({
      groupName: event.detail
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
  onShow: function () {

  },

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