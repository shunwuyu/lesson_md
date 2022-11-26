// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    banners: [
      {
        id: 1,
        img: 'http://mpay.wpiao.cn/upload/Ad/202102/20210225154315526422.jpg' 
      },
      {
        id: 2,
        img: 'http://mpay.wpiao.cn/upload/Ad/202102/202102241736309012687.jpg' 
      },
      {
        id: 3,
        img: 'http://mpay.wpiao.cn/upload/Ad/202102/202102251714158534712.jpg'
      }
    ],
    movies: [
      {
        id: 1,
        image: 'https://p0.pipi.cn/mmdb/25bfd6922ffc7e50c8af3397dee2d43a3e265.jpg?imageMogr2/thumbnail/1246x1246%3E',
        title: '扫黑行动',
        subTitle: '真解气',
        actor: '林德禄',
        score: 4.0,
        action: '购买'
      },
      {
        id: 2,
        image: 'https://p0.pipi.cn/mmdb/25bfd692ddd7e13139313954ee2938728ad6a.jpg?imageMogr2/thumbnail/1246x1246%3E',
        title: '万里归途',
        subTitle: '英雄回家',
        actor: '张译，王俊凯，樱桃',
        score: 4.0,
        action: '购买'
      },
      {
        id:3,
        image: 'https://p0.pipi.cn/mmdb/25bfd692ddd7e13139313954ee2938728ad6a.jpg?imageMogr2/thumbnail/1246x1246%3E',
        title: '万里归途',
        subTitle: '英雄回家',
        actor: '张译，王俊凯，樱桃',
        score: 4.0,
        action: '购买'
      },
      {
        id: 4,
        image: 'https://p0.pipi.cn/mmdb/25bfd692ddd7e13139313954ee2938728ad6a.jpg?imageMogr2/thumbnail/1246x1246%3E',
        title: '万里归途',
        subTitle: '英雄回家',
        actor: '张译，王俊凯，樱桃',
        score: 4.0,
        action: '购买'
      },
      {
        id: 5,
        image: 'https://p0.pipi.cn/mmdb/25bfd692ddd7e13139313954ee2938728ad6a.jpg?imageMogr2/thumbnail/1246x1246%3E',
        title: '万里归途',
        subTitle: '英雄回家',
        actor: '张译，王俊凯，樱桃',
        score: 4.0,
        action: '购买'
      },
      {
        id: 6,
        image: 'https://p0.pipi.cn/mmdb/25bfd692ddd7e13139313954ee2938728ad6a.jpg?imageMogr2/thumbnail/1246x1246%3E',
        title: '万里归途',
        subTitle: '英雄回家',
        actor: '张译，王俊凯，樱桃',
        score: 4.0,
        action: '购买'
      },
      {
        id: 7,
        image: 'https://p0.pipi.cn/mmdb/25bfd692ddd7e13139313954ee2938728ad6a.jpg?imageMogr2/thumbnail/1246x1246%3E',
        title: '万里归途',
        subTitle: '英雄回家',
        actor: '张译，王俊凯，樱桃',
        score: 4.0,
        action: '购买'
      },
      {
        id: 8,
        image: 'https://p0.pipi.cn/mmdb/25bfd692ddd7e13139313954ee2938728ad6a.jpg?imageMogr2/thumbnail/1246x1246%3E',
        title: '万里归途',
        subTitle: '英雄回家',
        actor: '张译，王俊凯，樱桃',
        score: 4.0,
        action: '购买'
      },
      {
        id: 9,
        image: 'https://p0.pipi.cn/mmdb/25bfd692ddd7e13139313954ee2938728ad6a.jpg?imageMogr2/thumbnail/1246x1246%3E',
        title: '万里归途',
        subTitle: '英雄回家',
        actor: '张译，王俊凯，樱桃',
        score: 4.0,
        action: '购买'
      },
      {
        id: 10,
        image: 'https://p0.pipi.cn/mmdb/25bfd692ddd7e13139313954ee2938728ad6a.jpg?imageMogr2/thumbnail/1246x1246%3E',
        title: '万里归途',
        subTitle: '英雄回家',
        actor: '张译，王俊凯，樱桃',
        score: 4.0,
        action: '购买'
      },
      {
        id: 11,
        image: 'https://p0.pipi.cn/mmdb/25bfd692ddd7e13139313954ee2938728ad6a.jpg?imageMogr2/thumbnail/1246x1246%3E',
        title: '万里归途',
        subTitle: '英雄回家',
        actor: '张译，王俊凯，樱桃',
        score: 4.0,
        action: '购买'
      },
      {
        id: 12,
        image: 'https://p0.pipi.cn/mmdb/25bfd692ddd7e13139313954ee2938728ad6a.jpg?imageMogr2/thumbnail/1246x1246%3E',
        title: '万里归途',
        subTitle: '英雄回家',
        actor: '张译，王俊凯，樱桃',
        score: 4.0,
        action: '购买'
      }
    ]
  },
  lower(e) {
    // console.log(e, '////')
    this.setData({
      movies: [
        ...this.data.movies,
        ...this.data.movies
      ]
    })
  },
  swiperchange(event) {
    // console.log(event);
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
