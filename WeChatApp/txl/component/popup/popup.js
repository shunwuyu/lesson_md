Component({
  options: {
    multipleSlots: true   
  },  
  properties: {    title: {                  type: String,          
  value: '标题' },        content: {      type: String,      value: '内容'    },       btn_no: {      type: String,      value: '取消'    },        btn_ok: {      type: String,      value: '确定'    }   },  data: {    flag: true,  },     methods: {        hidePopup: function () {      this.setData({        flag: !this.data.flag      })    },        showPopup () {      this.setData({        flag: !this.data.flag      })    },       _error () {           this.triggerEvent("error")    },    _success () {         this.triggerEvent("success");    }  }})
