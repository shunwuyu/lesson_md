"use strict";

function sayHi(){
    // 前端  this  window 
    // 严格模式  undefined 
    // node  undefined   
    // node中name并不是挂在全局对象上的
    console.log('Hello,', this.name);
}
// 前端 还是后端
var name = 'YvetteLau';
sayHi();