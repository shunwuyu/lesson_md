const app = getApp();
 Page({
  onReady: function () {  
      //获得popup组件   
       this.popup = this.selectComponent("#popup");  },   
       showPopup() {    this.popup.showPopup();  }, 
        _error() {    
          console.log('你点击了取消');    this.popup.hidePopup(); 
           }, 
        _success() {    console.log('你点击了确定');    this.popup.hidePopup();  }})