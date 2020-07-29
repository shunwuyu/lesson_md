class Page {
  constructor(callBack) {
      this.className = 'Page'
      this.MessageCallBack = callBack // 
      this.MessageCallBack('发给注册页面的信息') // 执行PageA的回调函数
  }
}
class PageA {
  constructor() {
      this.className = 'PageA'
      this.pageClass = new Page(this.handleMessage) // 注册页面 传递回调函数 问题在这里
  }
  // 与页面通信回调
  handleMessage(msg) {
      console.log('处理通信', this.className, msg) //  'Page' this指向错误
  }
}
new PageA()