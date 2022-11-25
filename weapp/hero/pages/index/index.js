// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    heroNav: [],
    allHero: [],
    heroList: [],
    navIndex: 0
  },
  selectAear(e) {
    const index = e.target.dataset.index
    const slectItem = e.target.dataset.item
    let allHero = this.data.allHero
    if (slectItem.type === 'all') {
      this.setData({
        navIndex: 0,
        herolist: allHero
      })
    } else {
      let r = [];
      allHero.forEach(hero => {
        if (hero.camptype == slectItem.type) {
          r.push(hero)
        }
      })
      // let r = allHero.filter(item => item.camptype === slectItem.type)
      this.setData({
        navIndex: index,
        herolist: r
      })
    }
    this.setData({
      navIndex: index,
    })
  },
  toDetail(e) {
    let item = e.target.dataset.item
    let urlArr = item.infourl.split('?')
    let prams = {
      id: item.heroid,
      url: urlArr[0]
    }
    console.log(prams, '.......');
    wx.navigateTo({
      url: `../heroDetail/heroDetail?id=${item.heroid}&url=${urlArr[0]}`
    })
  },
  scroll() {},
  getData() {
    wx.request({
      url: 'https://www.fastmock.site/mock/3ddf189404196ed14cb6531bf3596081/vue/hero',
      success:  (res) => {
        // console.log(res)
        this.setData({
          heroNav: res.data.nav,
          allHero: res.data.heroList,
          herolist: res.data.heroList,
        })
      }
    })
  },
  onLoad() {
    this.getData();
  },
  
})
