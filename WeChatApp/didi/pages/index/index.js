Page({
  showUser(){
    wx.navigateTo({
      url:  "/pages/login/login",
    })
  },
  data: {
    isLoading: true,
    interval: 5000,
    duration: 1000,
    waitingTimes: '两分钟',
    currentTab: 0,
    currentCost: 0,
    navData: null,
    imgUrls: null,
    cost: null,
    navScrollLeft: 0,
    callCart: true,
    address:'范家新村',
    destination: '万达',
    windowWidth:0,
  },
  switchNav (event) {
    const cart = event.currentTarget.dataset.name
    let text = this.data.navData;
    this.setData({
      cart,
      isLoading: true,
    })
    var cur = event.currentTarget.dataset.current; 
    var singleNavWidth = this.data.windowWidth / 6;
    this.setData({
      navScrollLeft: (cur - 1) * singleNavWidth,
      currentTab: cur,
    }) 
  },
  onLoad (options) {
    var w = wx.getSystemInfoSync().windowWidth;
    this.setData({
      windowWidth: w
    })
    this.requestCart();
  },
  requestCart() {
    wx.request({
      url: 'http://localhost:1234/indexPage',
      success: (res) => {
        // console.log(this)
        // console.log(res.data)
        // console.log(res);
        const navData = res.data.navData;
        const imgUrls = res.data.imgUrls;
        // const cost = res.data.data.cost
        // console.log(navData)
        this.setData({
          navData,
          imgUrls,
          // cost
        })
      }
    })
  }
})