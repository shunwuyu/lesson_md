// 非严格模式下，LHR稍微比较特殊: 会自动创建一个全局变量
'use strict'; // 3
function func() {
  a = 1
}

// console.log(a);  1
// 2
func();
console.log(a);