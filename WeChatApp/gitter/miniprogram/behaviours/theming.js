module.exports = Behavior({
  data: {
    theme: wx.getStorageSync('theme')
  },
  methods: {

    onShow: function () {
      wx.getStorage({
        key: 'theme',
        success: res => {
          const theme = res.data
          console.log(theme, '-------');
          if (theme !== this.data.theme) {
            this.setData({ theme })
            // this.updateTheme(theme)
          }
        },
      })
    }
  }
})