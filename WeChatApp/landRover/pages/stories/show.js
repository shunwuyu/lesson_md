const app = getApp()
const db = require('../../assets/db.js');

Page({
  data: {
    entity: null
  },
  onLoad(options) {
    const id = options.id
    const entity = db.vehicles.find((item) => {
      return item.id == id
    })
    
    if (entity) {
      this.setData({
        entity
      })

      wx.setNavigationBarTitle({
        title: this.data.entity.header
      })
    } else {
      wx.showToast({
        title: '暂无信息,即将返回上一个页面',
        icon: 'none',
        mask: true,
        duration: 1000
      })
      // A -> B -> C 
      setTimeout(() => {
        wx.navigateBack({
          delta: 1
        });
      }, 1000)
    }
  }
})
