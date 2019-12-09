const WXAPI = require('apifm-wxapi')

Page({
  data: {
    inputVal: "",
    curPage: 1,
    pageSize: 20,
    inputShowed: false,
    noticeList: {},
    category_box_width: 750,
    categories: [],
    activeCategoryId: 0,
    banners: [],
    goods: []
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  toSearch: function() {
    this.setData({
      curPage: 1
    });
    this.getGoodsList(this.data.activeCategoryId);
    console.log('------------');
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  onLoad() {
    this.getNotice();
    WXAPI.goodsCategory().then((res) => {
      let categories = [];
      if (res.code == 0) {
        categories = categories.concat(res.data)
      }
      
      const _n = Math.ceil(categories.length / 2)
      // console.log(_n);
      this.setData({
        categories: categories,
        category_box_width: 150 * _n,
        activeCategoryId: 0,
        curPage: 1
      });
      this.getGoodsList(0);
    });
    WXAPI.banners({
      type: 'new'
    }).then((res) => {
      console.log(res);
      if (res.code == 700) {
        wx.showModal({
          title: '提示',
          content: '请在后台添加 banner 轮播图片，自定义类型填写 new',
          showCancel: false
        })
      } else {
        this.setData({
          banners: res.data
        });
      }
    }).catch(function(e) {
      wx.showToast({
        title: res.msg,
        icon: 'none'
      })
    })
  },
  getNotice() {
    WXAPI.noticeList({pageSize: 5}).then((res) => {
      console.log(res);
      if (res.code == 0) {
        this.setData({
          noticeList: res.data
        });
      }
    })
    
  },
  tabClick: function(e) {
    let offset = e.currentTarget.offsetLeft;
    if (offset > 150) {
      offset = offset - 150
    } else {
      offset = 0;
    }
    this.setData({
      activeCategoryId: e.currentTarget.id,
      curPage: 1,
      cateScrollTop: offset
    });
    this.getGoodsList(this.data.activeCategoryId);
  },
  getGoodsList (categoryId, append) {
    if (categoryId == 0) {
      categoryId = "";
    }
    wx.showLoading({
      "mask": true
    })
    WXAPI.goods({
      categoryId: categoryId,
      nameLike: this.data.inputVal,
      page: this.data.curPage,
      pageSize: this.data.pageSize
    }).then((res) => {
      wx.hideLoading()
      if (res.code == 404 || res.code == 700) {
        let newData = {
          loadingMoreHidden: false
        }
        if (!append) {
          newData.goods = []
        }
        this.setData(newData);
        return
      }
      let goods = [];
      if (append) {
        goods = this.data.goods
      }
      for (var i = 0; i < res.data.length; i++) {
        goods.push(res.data[i]);
      }
      this.setData({
        loadingMoreHidden: true,
        goods: goods,
      });
    })
  },
  onReachBottom: function() {
    console.log('bottom');
    this.setData({
      curPage: this.data.curPage + 1
    });
    this.getGoodsList(this.data.activeCategoryId, true)
  },
  onPullDownRefresh: function() {
    this.setData({
      curPage: 1
    });
    this.getGoodsList(this.data.activeCategoryId)
    wx.stopPullDownRefresh()
  },
})