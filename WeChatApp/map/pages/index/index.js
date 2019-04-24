//index.js
//获取应用实例
const app = getApp()
const Amap = require('../../libs/amap-wx.js');
const myAmap = new Amap.AMapWX({
  key: '94300080c3686f1fa70ec51a024e10e4'
});

Page({
  data: {
    // 默认经度纬度
    longitude: 116.397390,
    latitude: 39.908860,
    topText: '🍊单车改良版 by 行无忌',
    // 缩放比例
    scale: 18,
    markers: [],
    polyline: []
  },
  onReady() {
    // 创建map上下文  保存map信息的对象
    // MapContext
    this.mapCtx = wx.createMapContext('myMap');
  },
  //事件处理函数
  onLoad: function() {
    wx.showLoading({
      title: '加载中',
    })
    //获取位置信息
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        console.log('获取经度纬度', res);
        let longitude = res.longitude;
        let latitude = res.latitude;
        this.setData({
          longitude,
          latitude
        })
        //模拟请求单车数据
        setTimeout(() => {
          this.tocreate(res)
          // 获取当前地图中心的经纬度
          this.mapCtx.getCenterLocation({
            type: 'gcj02',
            success: (res) => {
              this.nearestBic(res)
            }
          })
          wx.hideLoading();
        }, 1000)
      }
    })
  },
  //随机函数，根据所在地  模拟单车经纬度数据伪造单车
  tocreate(res) {
    // 随机单车数量设置
    let markers = this.data.markers;
    console.log(markers)
    let ran = Math.ceil(Math.random() * 20);
    // console.log(ran);
    for (let i = 0; i < ran; i++) {
      // 定义一个临时单车对象
      var t_bic = {
        "id": 0, // 标记点 id
        "title": '去这里', // 标注点名
        "iconPath": "/images/map-bicycle.png", // 显示的图标
        "callout": {},  // 标记点上方的气泡窗口
        "latitude": 0, // 纬度
        "longitude": 0,  // 经度
        "width": 52.5,
        "height": 30
      }
      // 随机
      var sign_a = Math.random();
      var sign_b = Math.random();
      // 单车分布密集度设置
      // 经度 纬度 也有5位小数
      var a = (Math.ceil(Math.random() * 99)) * 0.00002;
      var b = (Math.ceil(Math.random() * 99)) * 0.00002;
      t_bic.id = i;
      t_bic.longitude = (sign_a > 0.5 ? res.longitude + a : res.longitude - a);
      t_bic.latitude = (sign_b > 0.5 ? res.latitude + b : res.latitude - b);
      markers.push(t_bic);
    }
    // console.log(markers)
    //将模拟的单车数据暂时存储到本地
    wx.setStorageSync('bicycle', markers);
    this.setData({
      markers
    })
  },
  // 自动判断距离最近的单车的方法
  nearestBic(res) {
    // 找出最近的单车
    let markers = this.data.markers;
    let min_index = 0;
    let distanceArr = [];
    for (let i = 0; i < markers.length; i++) {
      let lon = markers[i].longitude;
      let lat = markers[i].latitude;
      // 计算距离
      // 感觉不对 应该有公式，保留原作者的思维
      let t = Math.sqrt((lon - res.longitude) * (lon - res.longitude) + (lat - res.latitude) * (lat - res.latitude));
      let distance = t;
      // 将每一次计算的距离加入数组 distanceArr
      distanceArr.push(distance)
    }
    //从距离数组中找出最小值，js是弱类型，数字不能直接比较大小。需要进行转换用 parseFloat（小数）  | parseInt（整数）
    let min = distanceArr[0];
    for (let i = 0; i < distanceArr.length; i++) {
      if ((distanceArr[i]) < (min)) {
        min = distanceArr[i];
        min_index = i;
      }
    }
    console.log(distanceArr)
    let minNumber = Math.min(...distanceArr);
    let minNumberIndex = distanceArr.findIndex(num => num === minNumber);
    console.log(min_index, minNumberIndex)
    let callout = `markers[${min_index}].callout`;
    // console.log(callout);
    // 清楚旧的气泡，设置新气泡
    wx.getStorage({
      key: 'bicycle',
      success: (res) => {
        this.setData({
          markers: res.data,
          [callout]: {
            "content": '离我最近',
            "color": "#ffffff",
            "fontSize": "16",
            "borderRadius": "50",
            "padding": "10",
            "bgColor": "#0082FCaa",
            "display": 'ALWAYS'
          }
        })
      }
    })
  },
  toReset() {
    this.mapCtx.moveToLocation();
    this.setData({
      scale: 18
    })
  },
  // 跳转到个人中心
  toUser() {
    if (!app.globalData.loginStatus) {
      wx.showModal({
        title: '提示',
        content: '请先登录',
        success: (res) => {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/login/login'
            })
          }
        }
      })
    } else {
      wx.navigateTo({
        url: '/pages/userCenter/userCenter',
      })
    }
  },
  toVisit(e) {
    let bic = e.markerId;
    const { markers, longitude, latitude } = this.data;
    const tapMarker = markers[bic];
    console.log(tapMarker);
    myAmap.getDrivingRoute({
      origin: `${longitude},${latitude}`,
      destination: `${tapMarker.longitude},${tapMarker.latitude}`,
      success: (data) =>  {
        console.log('getDrivingRoute', data);
        var points = [];
        if (data.paths && data.paths[0] && data.paths[0].steps) {
          var steps = data.paths[0].steps;
          for (var i = 0; i < steps.length; i++) {
            var poLen = steps[i].polyline.split(';');
            for (var j = 0; j < poLen.length; j++) {
              points.push({
                longitude: parseFloat(poLen[j].split(',')[0]),
                latitude: parseFloat(poLen[j].split(',')[1])
              })
            }
          }
        }
        this.setData({
          polyline: [{
            points: points,
            color: "#0091ff",
            width: 6
          }]
        });
      }
    })
  }
})