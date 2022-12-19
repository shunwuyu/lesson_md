// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    goods: {
      title: '美国伽力果（约680g/3个）',
      price: 2680,
      formatPrice: '',
      express: '免运费',
      remain: 19,
      thumb:
        'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
    },
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    const { goods } = this.data;
    const formatPrice = `¥${(goods.price / 100).toFixed(2)}`;
    this.setData({
      goods: {
        ...goods,
        formatPrice,
      },
    });
  },
  sorry() {
    wx.showToast({
      title: '暂无后续逻辑~',
      icon: 'none',
    });
  },
  onClickUser() {
    wx.showToast({
      title: '暂无后续逻辑~',
      icon: 'none',
    });
  }
})
