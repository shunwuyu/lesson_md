//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showLeft: false,  // 为 true 的时候 不可点击
    showRight: false, // 为 true 的时候 不可点击
    index: 1,
    num: 1,
    date: [
      {
        "id": "d22",
        "time": "05月15日"
      },
      {
        "id": "d23",
        "time": "05月13日"
      },
      {
        "id": "d24",
        "time": "05月24日"
      },
      {
        "id": "d25",
        "time": "06月07日"
      }
    ],
    agenda: {
    },
    result: [{
      id: 'd22',
      leftteam: "https://mat1.gtimg.com/sports/nba/logo/new/22.png",
      leftgrade: 119,
      leftname: '开拓者',
      rightteam: "https://mat1.gtimg.com/sports/nba/logo/1602/9.png",
      rightgrade: 120,
      rightname: '勇士',
    },
    {
      id: 'd23',
      leftteam: "https://mat1.gtimg.com/sports/nba/logo/1602/20.png",
      leftgrade: 90,
      leftname: '76人',
      rightteam: "https://img1.gtimg.com/sports/pics/hv1/133/21/2268/147482188.png",
      rightgrade: 92,
      rightname: '猛龙',
    },
    {
      id: 'd24',
      leftteam: "https://mat1.gtimg.com/sports/nba/logo/1602/9.png",
      leftgrade: 118,
      leftname: '勇士',
      rightteam: "https://mat1.gtimg.com/sports/nba/logo/1602/10.png",
      rightgrade: 113,
      rightname: '火箭',
    },
    {
      id: 'd25',
      leftteam: "https://mat1.gtimg.com/sports/nba/logo/1602/9.png",
      leftgrade: 95,
      leftname: '勇士',
      rightteam: "https://mat1.gtimg.com/sports/nba/logo/1602/15.png",
      rightgrade: 89,
      rightname: '雄鹿',
    }]
  },
  onLoad: function () {
    this.init();
  },
  init: function () {
    // let leftgrade = this.data.result[this.data.index].leftgrade;
    // let rightgrade = this.data.result[this.data.index].rightgrade;
    // let grade = leftgrade > rightgrade ? '1' : '2';
    this.setData({
      agenda: this.data.result[this.data.index],
      // light: grade,
    })
  },
  turnleft: function (e) {
    const index = this.data.index - this.data.num;
    // index === 0
    if (index <= -1) {
      return;
    } else if (index == 0) {  // index === 1 
      this.changeleft();
      this.setData({
        showLeft: true,
      })
    } else {
      this.changeleft();
      this.setData({
        showLeft: false,
        showRight: false,
      })
    }
  },
  turnright: function (e) {
    const index = this.data.index + this.data.num;
    if (index >= this.data.date.length) {
      return;
    } else if (index == this.data.date.length - 1) {
      this.changeright();
      this.setData({
        showRight: true,
      })
    }
    else {
      this.changeright();
      this.setData({
        showRight: false,
        showLeft: false,
      })
    }
  },
  // 改变 current 改变 swiper 
  changeleft: function () {
    const index = this.data.index - this.data.num;//获取改变后的那组数据下标
    this.setData({
      agenda: this.data.result[index],// 将球队名 球队分数传入
      // light: this.data.result[index].leftgrade > this.data.result[index].rightgrade ? '1' : '2', //比较分数大小 将分数高的color改变
      index: index,
      // current: index,
    })
  },
  changeright: function () {
    const index = this.data.index + this.data.num;
    this.setData({
      agenda: this.data.result[index],
      index: index,
      // light: this.data.result[index].leftgrade > this.data.result[index].rightgrade ? '1' : '2',
      // current: index,
    })
  },
  // 由 current 驱动 最后触发这个事件
  // swiperchange: function (e) {
  //   const current = e.detail.current;
  //   const ind = this.data.index;
  //   if (current - ind > 0) {
  //     this.turnright()
  //   } else if (current - ind < 0) {
  //     this.turnleft()
  //   }
  // },
  //事件处理函数
})
