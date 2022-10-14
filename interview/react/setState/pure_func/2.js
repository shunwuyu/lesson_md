// 不可变数据类型 他们只能被替换，不能被修改
// var str = 'I am hero';
// console.log(str.toUpperCase());	// "I AM HERO"
// console.log(str);	//"I am hero"

// var str = 'I am hero';
// str = str.toUpperCase();
// 相同的输入，永远会得到相同的输出”

var a = 5; // const a = 5;
function A(b) {
  // 副作用 a会被改变
  return a + b;
}
A(5);