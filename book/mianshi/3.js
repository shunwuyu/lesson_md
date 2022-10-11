typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol()
console.log(typeof BigInt(1n)); 

// typeof 对于对象来说，除了函数都会显示 object，所以说
//  typeof 并不能准确判断变量到底是什么类型
typeof [] // 'object'
typeof {} // 'object'
typeof console.log  // 不新建函数, 怎么搞?
