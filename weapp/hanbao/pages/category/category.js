// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    intoview: null,
    currentGoods: [],
    name: '',
    page: 1,
    scrolltop: 0,
    activeCategory: 0,
    firstCategories:[{"icon":"https://cdn.it120.cc/apifactory/2019/04/09/f89753a227d26a3fe9ccc6f975857bb6.png","id":1872,"isUse":true,"key":"1","level":1,"name":"上装","paixu":0,"pid":0,"shopId":0,"type":"index","userId":951,"wxsph":"{\"id\": null, \"name\": null, \"first_cat_id\": 6706, \"third_cat_id\": 6722, \"qualification\": \"\", \"second_cat_id\": 6714, \"dialogFormVisible\": null, \"qualification_type\": 0, \"product_qualification\": \"《国家强制性产品认证证书》（CCC安全认证证书）或《强制性认证产品符合自我声明》、具有传真功能还需上传《电信设备进网许可证》\", \"product_qualification_type\": 1}","childs":[]},{"icon":"https://cdn.it120.cc/apifactory/2019/04/09/5bfffd6ad0d4483870f024a3ed936528.png","id":1873,"isUse":true,"key":"2","level":1,"name":"裤装","paixu":0,"pid":0,"shopId":0,"type":"","userId":951,"wxsph":"{\"id\": null, \"name\": null, \"audit_id\": \"RQAAAJtwENEBAA56hbATIA\", \"auditResult\": {\"status\": 0}, \"first_cat_id\": 7419, \"third_cat_id\": 7421, \"qualification\": \"1、国产商品需提供：申请主体的《食品经营许可证》或《食品生产许可证》或《预包装食品销售备案凭证》。 2、进口商品需提供：①申请主体的《食品经营许可证》或《预包装食品销售备案凭证》；②近一年内的《出入境检验检疫证明》或《出入境检验检疫卫生证书》；③供货协议或采购合同等材料。 （注：①若申请主体为办理出入境检验证的收货人，则无需提供供货协议或采购合同等材料；②自贸区企业若无法提供《食品经营许可证》，需要提供营业执照（经营范围需包含食品经营（预包装食品）））\", \"second_cat_id\": 7420, \"dialogFormVisible\": null, \"qualification_type\": 1, \"qualification_passed\": true, \"product_qualification\": \" （选填）1、若经营清真食品，需提供生产厂商的《清真食品生产经营许可证》或相关证件； 2、标记农产品产地的农产品，需提供《农产品地理标志登记证书》； 3、声称获得无公害农产品认证的农产品，需提供《无公害农产品认证证书》； 4、声称获得绿色食品认证的食品，需提供《绿色食品证书》； 5、声称获得有机食品认证的食品，需提供《有机产品认证证书》\", \"product_qualification_type\": 2}","childs":[]},{"icon":"https://cdn.it120.cc/apifactory/2019/04/09/8d32c254e2cb86d2d42c99b768d136b6.png","id":1875,"isUse":true,"key":"4","level":1,"name":"特价区","paixu":0,"pid":0,"shopId":0,"type":"","userId":951,"childs":[]},{"icon":"https://cdn.it120.cc/apifactory/2019/04/09/d800327091f216e2c83db8af7b6be306.png","id":1906,"isUse":true,"key":"5","level":1,"name":"裙装","paixu":0,"pid":0,"shopId":0,"type":"","userId":951,"childs":[]},{"icon":"https://cdn.it120.cc/apifactory/2019/04/09/cfee29650d6ae58a4bb1f84a3d899450.png","id":1907,"isUse":true,"key":"6","level":1,"name":"套装","paixu":0,"pid":0,"shopId":0,"type":"","userId":951,"childs":[]},{"icon":"https://cdn.it120.cc/apifactory/2019/04/09/6b3136cda73c99453ac93a1c5a9deebf.png","id":2016,"isUse":true,"key":"7","level":1,"name":"外套","paixu":0,"pid":0,"shopId":0,"type":"","userId":951,"wxsph":"{\"id\": null, \"name\": null, \"first_cat_id\": 6033, \"third_cat_id\": 517004, \"qualification\": \"\", \"second_cat_id\": 6057, \"dialogFormVisible\": null, \"qualification_type\": 0, \"product_qualification\": \"\", \"product_qualification_type\": 0}","childs":[]},{"icon":"https://cdn.it120.cc/apifactory/2019/04/09/9a7356187fce687ce568ba7381685299.png","id":2054,"isUse":true,"key":"8","level":1,"name":"秒杀","paixu":0,"pid":0,"shopId":0,"type":"","userId":951,"childs":[]},{"icon":"https://cdn.it120.cc/apifactory/2019/04/09/7773b4c204280ba194514594f7070ac9.png","id":2245,"isUse":true,"key":"9","level":1,"name":"内裤","paixu":0,"pid":0,"shopId":0,"type":"","userId":951,"childs":[]},{"icon":"https://cdn.it120.cc/apifactory/2019/04/09/60f41bf042d201b48a7115d22344320f.png","id":2246,"isUse":true,"key":"10","level":1,"name":"袜子","paixu":0,"pid":0,"shopId":0,"type":"","userId":951,"childs":[]},{"icon":"https://cdn.it120.cc/apifactory/2019/04/09/cdb16ac9c66bc211b82bd947452526f4.png","id":2787,"isUse":true,"key":"11","level":1,"name":"鞋","paixu":0,"pid":0,"shopId":0,"type":"","userId":951,"childs":[]}]
  },
  onCategoryClick(e) {
    const idx = e.target.dataset.idx
    if (idx == this.data.activeCategory) {
      this.setData({
        scrolltop: 0,
      })
      return
    }
    const categorySelected = this.data.firstCategories[idx]
    // console.log(categorySelected, '////')
    this.loadGoods(categorySelected.id, 1)
    this.setData({
      page: 1,
      scrolltop: 0,
      activeCategory: idx
    })
    
  },
  loadGoods(cid, page) {
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: 'https://api.it120.cc/tz/shop/goods/list/v2',
      method: "POST",
      'content-type': 'application/x-www-form-urlencoded',
      data: {
        categoryId: this.data.firstCategories[this.data.activeCategory].id,
        page: page,
        pageSize: 20
      },
      success:(res) => {
        console.log(res, '/////')
        wx.hideLoading();
        if (res.code === 700) {
          if (this.data.page === 1) {
            this.setData({
              currentGoods: null
            })
          } else {
            wx.showToast({
              title: '没有更多了',
              icon: "none"
            })
          }
          return
        }
        if (this.data.page == 1) {
          this.setData({
            currentGoods: res.data.data.result,
            page: page+ 1
          })
        } else {
          this.setData({
            currentGoods: this.data.currentGoods.concat(res.data.data.result),
            page:page+1
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.loadGoods(this.data.activeCategory, 1)
  },
  goodsGoBottom() {
    console.log(this.data.activeCategory, this.data.firstCategories);
    this.loadGoods(this.data.firstCategories[this.data.activeCategory].id, this.data.page);
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