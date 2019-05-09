// component/countdown/countdown.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    start: {
      type: Boolean,
      value: false,
      observer(newVal){
        if (newVal === true) {
          console.log('========= count');
          this.countdownFunc()
        }
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    timerText: '获取验证码'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _getCountdownEvent(){
      this.triggerEvent("getCountdownEvent")
    },
    _setStartDataEvent() {
      this.triggerEvent("setStartDataEvent", this.data.start)
    },
    countdownFunc() {
      this.setData({
        timerText: 60
      })
      
      let countdownNum = this.data.timerText

      let timer = setInterval(() => {
        countdownNum--
        this.setData({
          timerText: countdownNum
        })
        if (countdownNum == 0) {
          this.setData({
            timerText: '重新发送',
            start: false
          })
          this._setStartDataEvent() //倒计时为0时，让父组件的start重新设置为false
          clearInterval(timer) //清除定时器
        }
      }, 1000)
    }
  }
})
