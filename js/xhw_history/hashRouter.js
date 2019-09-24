class HashRouter{
  constructor(){
    //用于存储不同hash值对应的回调函数
    this.routers = {};
    window.addEventListener('hashchange',this.load.bind(this),false)
  }
  register(hash,callback = function(){}){
    this.routers[hash] = callback;
  }
  registerIndex(callback = function(){}){
    this.routers['index'] = callback;
  }
  registerNotFound(callback = function(){}){
    this.routers['404'] = callback;
  }
  registerError(callback = function(){}){
    this.routers['error'] = callback;
  }
  load(){
    let hash = location.hash.slice(1),
        handler;
    //没有hash 默认为首页
    if(!hash){
        handler = this.routers.index;
    }
    //未找到对应hash值
    else if(!this.routers.hasOwnProperty(hash)){
        handler = this.routers['404'] || function(){};
    }
    else{
        handler = this.routers[hash]
    }
    //执行注册的回调函数
    try{
        handler.apply(this);
    }catch(e){
        console.error(e);
        (this.routers['error'] || function(){}).call(this,e);
    }
  }
}