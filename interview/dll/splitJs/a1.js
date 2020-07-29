import b from './b.js';
console.log("this is a.js")
const btn = document.querySelector("#btn");
btn.onclick = ()=>{
  b();
}