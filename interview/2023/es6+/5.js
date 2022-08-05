async function fn () {return 1}
console.log(fn) // [AsyncFunction: fn]
console.log(fn()) // Promise {<fulfilled>: undefined}
// 可以看出，async函数执行完会自动返回一个状态为
// fulfilled的Promise，也就是成功状态，
// 但是值却是undefined，那要怎么才能使值不是
// undefined呢？很简单，函数有return返回值就行了
// 总结：
// await只能在async函数中使用，不然会报错
// async函数返回的是一个Promise对象，有无值看有无return值
// await后面最好是接Promise，虽然接其他值也能达到排队效果
// async/await作用是用同步方式，执行异步操作
// async/await是一种语法糖  苦味是什么呢？ generator
// 你走路也能走到北京，但是你坐飞机会更快到北京。   
// ES6的class也是语法糖，因为其实用普通function也能实现同样效果