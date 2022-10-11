const app = getApp()
Page({
  data: {
    files: [],
    success: true,
    progress: 0
  },
  chooseImage: function(e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
        console.log(res)
        // --------------------------------
        
        for (let i = 0; i < res.tempFilePaths.length; i++) {
          const filePath = res.tempFilePaths[i]
          let a = filePath.lastIndexOf('.')
          let b = filePath.lastIndexOf('.', filePath.length - 10)
          let c = filePath.substring(b+1, a)
          const cloudPath = c + filePath.match(/\.[^.]+?$/) //match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
          wx.cloud.uploadFile({
            cloudPath,
            filePath,
            success: res => {
              that.setData({
                success: true
              })
              console.log('[上传文件] 成功：', res)
              app.globalData.fileID = res.fileID
              app.globalData.cloudPath = cloudPath
              app.globalData.imagePath = filePath

              // 上传成功后，页面进行跳转，在详情页加载图片显示等操作
              // wx.navigateTo({
              //   url: '../storageConsole/storageConsole'
              // })
            },
            fail: e => {
              console.error('[上传文件] 失败：', e)
              wx.showToast({
                icon: 'none',
                title: '上传失败',
              })
              that.setData({
                success: true
              })
            },
            complete: () => {
              wx.hideLoading()
            }
          })
        }
        
        
        // ----------------------------------
      }
    })
  },
  previewImage: function(e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  }
});