// pages/home/home.js
// const WXAPI = require('apifm-wxapi')
const APP = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    miaoshaGoods:[],
    adPositionIndexPop: true,
    categories: [{"icon":"https://cdn.it120.cc/apifactory/2019/04/09/f89753a227d26a3fe9ccc6f975857bb6.png","id":1872,"isUse":true,"key":"1","level":1,"name":"上装","paixu":0,"pid":0,"shopId":0,"type":"index","userId":951,"wxsph":"{\"id\": null, \"name\": null, \"first_cat_id\": 6706, \"third_cat_id\": 6722, \"qualification\": \"\", \"second_cat_id\": 6714, \"dialogFormVisible\": null, \"qualification_type\": 0, \"product_qualification\": \"《国家强制性产品认证证书》（CCC安全认证证书）或《强制性认证产品符合自我声明》、具有传真功能还需上传《电信设备进网许可证》\", \"product_qualification_type\": 1}"},{"icon":"https://cdn.it120.cc/apifactory/2019/04/09/5bfffd6ad0d4483870f024a3ed936528.png","id":1873,"isUse":true,"key":"2","level":1,"name":"裤装","paixu":0,"pid":0,"shopId":0,"type":"","userId":951,"wxsph":"{\"id\": null, \"name\": null, \"audit_id\": \"RQAAAJtwENEBAA56hbATIA\", \"auditResult\": {\"status\": 0}, \"first_cat_id\": 7419, \"third_cat_id\": 7421, \"qualification\": \"1、国产商品需提供：申请主体的《食品经营许可证》或《食品生产许可证》或《预包装食品销售备案凭证》。 2、进口商品需提供：①申请主体的《食品经营许可证》或《预包装食品销售备案凭证》；②近一年内的《出入境检验检疫证明》或《出入境检验检疫卫生证书》；③供货协议或采购合同等材料。 （注：①若申请主体为办理出入境检验证的收货人，则无需提供供货协议或采购合同等材料；②自贸区企业若无法提供《食品经营许可证》，需要提供营业执照（经营范围需包含食品经营（预包装食品）））\", \"second_cat_id\": 7420, \"dialogFormVisible\": null, \"qualification_type\": 1, \"qualification_passed\": true, \"product_qualification\": \" （选填）1、若经营清真食品，需提供生产厂商的《清真食品生产经营许可证》或相关证件； 2、标记农产品产地的农产品，需提供《农产品地理标志登记证书》； 3、声称获得无公害农产品认证的农产品，需提供《无公害农产品认证证书》； 4、声称获得绿色食品认证的食品，需提供《绿色食品证书》； 5、声称获得有机食品认证的食品，需提供《有机产品认证证书》\", \"product_qualification_type\": 2}"},{"icon":"https://cdn.it120.cc/apifactory/2019/04/09/8d32c254e2cb86d2d42c99b768d136b6.png","id":1875,"isUse":true,"key":"4","level":1,"name":"特价区","paixu":0,"pid":0,"shopId":0,"type":"","userId":951},{"icon":"https://cdn.it120.cc/apifactory/2019/04/09/d800327091f216e2c83db8af7b6be306.png","id":1906,"isUse":true,"key":"5","level":1,"name":"裙装","paixu":0,"pid":0,"shopId":0,"type":"","userId":951},{"icon":"https://cdn.it120.cc/apifactory/2019/04/09/cfee29650d6ae58a4bb1f84a3d899450.png","id":1907,"isUse":true,"key":"6","level":1,"name":"套装","paixu":0,"pid":0,"shopId":0,"type":"","userId":951},{"icon":"https://cdn.it120.cc/apifactory/2019/04/09/6b3136cda73c99453ac93a1c5a9deebf.png","id":2016,"isUse":true,"key":"7","level":1,"name":"外套","paixu":0,"pid":0,"shopId":0,"type":"","userId":951,"wxsph":"{\"id\": null, \"name\": null, \"first_cat_id\": 6033, \"third_cat_id\": 517004, \"qualification\": \"\", \"second_cat_id\": 6057, \"dialogFormVisible\": null, \"qualification_type\": 0, \"product_qualification\": \"\", \"product_qualification_type\": 0}"},{"icon":"https://cdn.it120.cc/apifactory/2019/04/09/9a7356187fce687ce568ba7381685299.png","id":2054,"isUse":true,"key":"8","level":1,"name":"秒杀","paixu":0,"pid":0,"shopId":0,"type":"","userId":951},{"icon":"https://cdn.it120.cc/apifactory/2019/04/09/7773b4c204280ba194514594f7070ac9.png","id":2245,"isUse":true,"key":"9","level":1,"name":"内裤","paixu":0,"pid":0,"shopId":0,"type":"","userId":951},{"icon":"https://cdn.it120.cc/apifactory/2019/04/09/60f41bf042d201b48a7115d22344320f.png","id":2246,"isUse":true,"key":"10","level":1,"name":"袜子","paixu":0,"pid":0,"shopId":0,"type":"","userId":951},{"icon":"https://cdn.it120.cc/apifactory/2019/04/09/cdb16ac9c66bc211b82bd947452526f4.png","id":2787,"isUse":true,"key":"11","level":1,"name":"鞋","paixu":0,"pid":0,"shopId":0,"type":"","userId":951}],
    navHeight: 0,
    navTop: 0,
    name: '',
    shopInfo: {
      name: '蜜雪冰城东里店',
    },
    banners: [
      {
        id: '1',
        picUrl: 'https://m15.360buyimg.com/mobilecms/s1062x420_jfs/t1/168904/19/33042/40832/63885215Ea4af33f8/9aec6fd3279c03a0.jpg!cr_1053x420_4_0!q70.jpg'
      },
      {
        id: '2',
        picUrl: 'https://m15.360buyimg.com/mobilecms/jfs/t1/166718/6/32222/91324/637c2687E695da018/453755a5e5b193ca.jpg!cr_1125x449_0_166!q70.jpg'
      },
      {
        id: '3',
        picUrl: 'https://m15.360buyimg.com/mobilecms/s1062x420_jfs/t1/212225/6/11238/61871/61e50ff9E7f02c060/8d0f3065b0c27182.jpg!cr_1053x420_4_0!q70.jpg'
      }
    ],
    goodsDynamic: [
      {
        "id": 1,
        "avatarUrl":"https://p3-passport.byteimg.com/img/user-avatar/1e97b69802d5f79f166650b938f191b7~100x100.awebp",
        "nick": "EdurtIO",
        "goodsName":"毛衣"
      },
      {
        "id": 2,
        "avatarUrl":"https://p3-passport.byteimg.com/img/user-avatar/4632f7c01f0be0aca577ce5f8e1bfbc0~100x100.awebp",
        "nick": "franz150",
        "goodsName":"毛巾"
      },
      {
        "id": 3,
        "avatarUrl":"https://p3-passport.byteimg.com/img/user-avatar/a31b7b7d760bc05636860f0263da672b~100x100.awebp",
        "nick": "alive",
        "goodsName":"牙刷"
      },
    ],
    noticeList: {"dataList":[{"dateAdd":"2017-09-16 17:20:43","dateUpdate":"2019-03-18 11:05:17","id":161,"isRemind":false,"isShow":true,"remindUid":0,"title":"商城新开张，优惠多多，戳 戳 戳 我看详情。","userId":951}],"totalPage":1,"totalRow":1}
  },
  goNotice() {

  },
  tabClick() {

  },
  closeAdPositionIndexPop() {
    this.setData({
      adPositionIndexPop: false
    })
  },
  clickAdPositionIndexLive() {

  },
  goSearch(){
    wx.navigateTo({
      url: '/pages/search/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('load')
    // this.initBanners()
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
    this.setData({
      navHeight: APP.globalData.navHeight,
      navTop: APP.globalData.navTop,
      windowHeight: APP.globalData.windowHeight,
      menuButtonObject: APP.globalData.menuButtonObject //小程序胶囊信息
    })
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