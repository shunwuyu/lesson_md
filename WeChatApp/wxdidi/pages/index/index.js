Page({
  data: {
    // 写死？
    // easy mock? 
    // json server
    navData: [],
    currentTab: 0,
    navScrollLeft: 500,
    address: '范家新村',
    destination: '万达',
    isLoading: true
  },
  onLoad() {
    var w = wx.getSystemInfoSync().windowWidth;
    this.setData({
      windowWidth: w
    })
    this.requestCart();
  },
  // 一个请求一个函数
  requestCart() {
    wx.request({
      url: 'http://localhost:3000/indexPage',
      success: (res) => {
        // console.log(this)
        // console.log(res.data)
        console.log(res);
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
  },
  switchNav (event) {
    const cart = event.currentTarget.dataset.name;
    const cur = event.currentTarget.dataset.current;
    let text = this.data.navData;
    var singleNavWidth = this.data.windowWidth / 6;
    // console.log((cur-1)*singleNavWidth);
    this.setData({
      cart,
      currentTab: cur,
      navScrollLeft: (cur-1)*singleNavWidth
    })
  }
})