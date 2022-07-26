function Person(name) {
    this.name = name
}

const person = name => {
    this.name = name
}

// 两者的区别是什么?  
// 箭头函数与普通函数
console.dir(Person);
console.dir(person);
// 缺少arguments
// 缺少caller - 无法确定上下文
// 缺少prototype

// 没有单独的this
// 不绑定arguments
// 箭头函数不能用作构造器，和 new一起用会抛出错误
// 箭头函数没有prototype属性