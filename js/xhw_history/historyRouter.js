class HistoryRouter{
  constructor(){
      //用于存储不同path值对应的回调函数
      this.routers = {};
      this.listenPopState();
      this.listenLink();
  }
  //监听popstate
  listenPopState(){
      window.addEventListener('popstate',(e)=>{
          let state = e.state || {},
              path = state.path || '';
          this.dealPathHandler(path)
      },false)
  }
  //全局监听A链接
  listenLink(){
      window.addEventListener('click',(e)=>{
          let dom = e.target;
          if(dom.tagName.toUpperCase() === 'A' && dom.getAttribute('href')){
              e.preventDefault()
              this.assign(dom.getAttribute('href'));
          }
      },false)
  }
  //用于首次进入页面时调用
  load(){
      let path = location.pathname;
      this.dealPathHandler(path)
  }
  //用于注册每个视图
  register(path,callback = function(){}){
      this.routers[path] = callback;
  }
  //用于注册首页
  registerIndex(callback = function(){}){
      this.routers['/'] = callback;
  }
  //用于处理视图未找到的情况
  registerNotFound(callback = function(){}){
      this.routers['404'] = callback;
  }
  //用于处理异常情况
  registerError(callback = function(){}){
      this.routers['error'] = callback;
  }
  //跳转到path
  assign(path){
      history.pushState({path},null,path);
      this.dealPathHandler(path)
  }
  //替换为path
  replace(path){
      history.replaceState({path},null,path);
      this.dealPathHandler(path)
  }
  //通用处理 path 调用回调函数
  dealPathHandler(path){
      let handler;
      //没有对应path
      if(!this.routers.hasOwnProperty(path)){
          handler = this.routers['404'] || function(){};
      }
      //有对应path
      else{
          handler = this.routers[path];
      }
      try{
          handler.call(this)
      }catch(e){
          console.error(e);
          (this.routers['error'] || function(){}).call(this,e);
      }
  }
}
