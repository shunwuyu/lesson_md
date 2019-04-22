// pages/profile/profile.js
const hobby = [
  { name: '篮球', value: 'basketball' },
  { name: '游泳', value: 'swim' },
  { name: '唱歌', value: 'sing'},
]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notSingle: true,
    date: '1995-11-02',
    formData: [],
    hobby: hobby,
    hobbyMap: {
      'basketball': '篮球',
      "swim": '游泳',
      'sing': '唱歌'
    }
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    const { formData } = this.data;
    let currentFormData = formData.slice(0);
    currentFormData.push(e.detail.value);
    if (e.detail.value.name.trim().length > 4) {
      wx.showToast({
        title: '姓名小于等于4',
        icon: 'none',
        duration: 2000
      })
    } else {
      this.setData({
        formData: currentFormData
      })
      wx.setStorageSync('profile', currentFormData);
    }
    
    
  },
  formReset() {
    console.log('form发生了reset事件')
  },
  singleChange(e) {
    const { notSingle } = this.data;
    this.setData({
      notSingle: !notSingle
    })
  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const currentFormData = wx.getStorageSync('profile') || [];
    this.setData({
      formData: currentFormData
    });
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