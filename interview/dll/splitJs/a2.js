console.log("this is a.js")
const btn = document.querySelector("#btn");
btn.onclick = ()=>{
    import('./b').then(function(module){
      const b = module.default;
      b();
    })
}
