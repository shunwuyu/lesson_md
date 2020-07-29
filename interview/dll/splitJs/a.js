console.log("this is a.js")
const btn = document.querySelector("#btn");
btn.onclick = ()=>{
  import(/* webpackChunkName: "b" */ './b').then(function(module){
    const b = module.default;
    b();
  })
}

if (module.hot) {// 开启热替换
  module.hot.accept()
}
