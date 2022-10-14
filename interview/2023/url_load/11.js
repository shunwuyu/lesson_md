// 使用回调函数就是在使用闭包

window.name = '林一一'
setTimeout(function timeHandler(){
  console.log(window.name);
}, 100)