// 35. 为什么在调用这个函数时，代码中的b会变成一个全局变量?
// 从右到左的求值的
function myFunc() {
  // let a = (b = 0);
  // let a,b;
  // a = b = 0;
  let a = b = 0;
}

myFunc();

console.log(b);