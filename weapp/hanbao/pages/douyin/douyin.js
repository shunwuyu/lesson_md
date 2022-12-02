// pages/douyin/douyin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playState: true,
    animation: null,
    videos: [
      {
        videoUrl: "http://video.microc.cn/dG1wL3d4MzkwNjg3YjY3OTZjZTMzYS5vNnpBSnMzYTJqaDJHUWRGVllDV2JhaHhjTUFzLkFaeGE2d1NIVTV3cjkyNGFlOGIyMjMxYTgwNjYyOTVhZjY2YTJjN2VjY2MwLm1wNA==",
        durations: 10,
        poster: "https://p3.pstatp.com/large/131040001488de047292a.jpg",
        likenum: 10,
        commnetnum: '20',
        rewardNum: '6'
      },
      {
        videoUrl: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200fce0000bg36q72j2boojh1t030g&line=0",
        durations: 10,
        poster: "https://p99.pstatp.com/large/12c5c0009891b32e947b7.jpg",
        likenum: 10,
        commnetnum: '20',
        rewardNum: '6'
      },
      {
        videoUrl: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0300fd10000bfrb9mlpimm72a92fsj0&line=0",
        durations: 10,
        poster: "https://p99.pstatp.com/large/12246000525d4c87900e7.jpg",
        likenum: 10,
        commnetnum: '20',
        rewardNum: '6'
      },
      {
        videoUrl: "http://video.microc.cn/lecturer_iOS_201903181745504660A5DxJE9a.mp4",
        durations: 10,
        poster: "http://video.microc.cn/lecturer_iOS_201903181745504660A5DxJE9a.mp4?vframe/jpg/offset/0",
        likenum: 10,
        commnetnum: '20',
        rewardNum: '6'
      }
    ]
  },
  changePlayStatus() {
    console.log('changePlayStatus')
    let playState = !this.data.playState

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})