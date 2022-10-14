// 左边可以是任意值，右边只能是函数
console.log('hello tuture' instanceof String)

function Person(name) {
  this.name = name
}
let ddc = new Person('滴滴陈');
console.log(ddc instanceof Person);