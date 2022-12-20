// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "activeSizeIndex": -1,
    "show1": false,
    "current": 0,
    "headimg": [
      {
        "pic": "https://cdn.poizon.com/source-img/origin-img/20201205/b9b4c1ae79704617ae76125f76ad09b7.jpg?x-oss-process=image/format,webp"
      },
      {
        "pic": "https://cdn.poizon.com/source-img/origin-img/20201205/13f1e841c2ca48008cbbd8396b4386ac.jpg?x-oss-process=image/format,webp"
      },
      {
        "pic": "https://cdn.poizon.com/pro-img/20201016/a5e7e6b2a99f493c96af0d351c9977d5.png?x-oss-process=image/format,webp"
      },
      {
        "pic": "https://cdn.poizon.com/pro-img/20201016/7a00db74eb6949e09808466e760042cb.png?x-oss-process=image/format,webp"
      },
      {
        "pic": "https://cdn.poizon.com/pro-img/20201016/a87e84ec35744695a87ee7ff504d991d.png?x-oss-process=image/format,webp"
      },
    ],
    "size": [
      {
        "type": "0",
        "size": "XS",
        "price": "139"
      },
      {
        "type": "1",
        "size": "S",
        "price": "139"
      },
      {
        "type": "2",
        "size": "M",
        "price": "139"
      },
      {
        "type": "3",
        "size": "L",
        "price": "139"
      },
      {
        "type": "4",
        "size": "XL",
        "price": "139"
      },
      {
        "type": "5",
        "size": "XXL",
        "price": "139"
      },
      {
        "type": "6",
        "size": "XXXL",
        "price": "139"
      },
    ],
    "produceimg": [
      {
        "pic1": "https://cdn.poizon.com/source-img/origin-img/20201205/8394aac4264949ee8637758178088b61.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp",
        "title1": "Corade 荧光恐龙短袖T恤 情侣款",
        "price1": "￥159",
        "pic2": "https://cdn.poizon.com/source-img/origin-img/20201206/c3e96051e2474df6a434f18a87595be4.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp",
        "title2": "Corade 夜光恐龙系列 短袖T恤 情侣款",
        "price2": "￥179",
        "pic3": "https://cdn.poizon.com/pro-img/origin-img/20210524/1f14591ef2024e9ea85d2d0ba97b5e42.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp",
        "title3": "【七夕情侣款】Corade Sorsor系列 变色腰果花头巾恐龙短袖T恤 情侣款 白色",
        "price3": "￥159"
      },
      {
        "pic1": "https://cdn.poizon.com/source-img/origin-img/20201205/ef472dd500fe4e038bd1b4db90a4dc60.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp",
        "title1": "Corade Sorsor系列 恐龙恋歌 宽松短袖T恤 男女同款 藏青色",
        "price1": "￥149",
        "pic2": "https://cdn.poizon.com/source-img/origin-img/20201205/ae16eb6df1a3434a9d0af428d8f0882b.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp",
        "title2": "【七夕情侣款】Corade Sorsor系列 口红恐龙妹妹短袖T恤 情侣款 白色",
        "price2": "￥159",
        "pic3": "https://cdn.poizon.com/source-img/origin-img/20201205/3affb5ee928d4a4e87e367181f4aa29f.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp",
        "title3": "Corade Sorsor系列 口红恐龙妹妹短袖T恤 男女同款 黑色",
        "price3": "￥169"
      },
      {
        "pic1": "https://cdn.poizon.com/source-img/origin-img/20201205/cd7d29eac03c4f88aeb667de3325f543.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp",
        "title1": "【七夕情侣款】Corade 恐龙让梨系列 宽版Overisze 插肩短袖T恤 情侣款 多色",
        "price1": "￥179",
        "pic2": "https://cdn.poizon.com/pro-img/origin-img/20210413/a1bfb6c1a9164496aa5a3a27a70a7df0.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp",
        "title2": "Corade 宝葫芦 芭蕾舞恐龙短袖T恤 情侣款 白色",
        "price2": "￥159",
        "pic3": "https://cdn.poizon.com/source-img/origin-img/20201205/4de4d0e0da574f93865b63fe41180b72.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp",
        "title3": "Corade 抠鼻掌柜短袖T恤 情侣款 白色",
        "price3": "￥129"
      },
      {
        "pic1": "https://cdn.poizon.com/source-img/origin-img/20201205/193f725e01d44ce1ae3902354bc39590.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp",
        "title1": "Corade 铜钱系列 短袖T恤 男女同款 黑色",
        "price1": "￥109",
        "pic2": "https://cdn.poizon.com/source-img/origin-img/20201205/0a13deaafc1b4658b4a15c0de3db1d22.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp",
        "title2": "Corade x 《囧妈》套娃掌柜系列 短袖T恤 男女同款 黑色",
        "price2": "￥109",
        "pic3": "https://cdn.poizon.com/source-img/origin-img/20201205/f0e8edf1e2644c208c6240b8f6edf8ef.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp",
        "title3": "Corade 荧光恐龙短袖T恤 情侣款",
        "price3": "￥159"
      },
      {
        "pic1": "https://cdn.poizon.com/source-img/origin-img/20201205/96c2e4ddd07e4e49957cd0f7ad6130c2.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp",
        "title1": "【郭聪明同款】Corade Sorsor系列 偷看恐龙宽版 Oversize圆领短袖T恤 男女同款 白色",
        "price1": "￥149",
        "pic2": "https://cdn.poizon.com/source-img/origin-img/20201205/aa496cfdfa5747069b4bbda378187aa5.jpg?x-oss-process=image/resize,m_lfit,w_200/format,webp",
        "title2": "Corade 炒面掌柜系列 短袖T恤 男女同款 黄色",
        "price2": "￥109",
        "pic3": "https://cdn.poizon.com/source-img/origin-img/20201205/73cfd918b7404f9684da875e4859c695.jpg?x-oss-process=image/resize,m_lfit,w_200/format,webp",
        "title3": "Corade 长鼻毛掌柜短袖T恤 男女同款 黑色",
        "price3": "￥109"
      },
    ]
  },
  pickSize(e) {
    let flag = e.currentTarget.dataset.flag
    let index = e.currentTarget.dataset.index
    if(flag==index) {
      this.setData({
        activeSizeIndex: -1,
        flag: -1
      }) 
    }
    else {
      this.setData({
        activeSizeIndex: index,
        flag: index
      }) 
    }
  },
  gotoPay(e) {
    wx.navigateTo({
      url: '/pages/buy_page/page/pay/pay?id='+this.data.id,
    })
  },
  showPopup1() {
    this.setData({ 
      show1: true,
    });
  },
  onClose1() {
    this.setData({ 
      show1: false,
    });
  },
  monitorCurrent: function (e) {
    // console.log(e.detail.current)
    let current = e.detail.current;
    this.setData({
      current: current
    })
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