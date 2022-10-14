// 寄生式组合继承
function Animal(name) {
    this.name = name
    this.colors = ['black', 'white']
}
Animal.prototype.getName = function() {
    return this.name
}
function Dog(name, age) {
    Animal.call(this, name)
    this.age = age
}
// Dog.prototype =  new Animal()
// 先注释, 看后面有什么问题
// Dog.prototype.constructor = Dog
// 不直接调用父类构造函数给子类原型赋值，
// 而是通过创建空函数 F 获取父类原型的副本
function F() {}
F.prototype = Animal.prototype
let f = new F()
f.constructor = Dog
Dog.prototype = f

let dog1 = new Dog('奶昔', 2)
dog1.colors.push('brown')
let dog2 = new Dog('哈赤', 1)
console.log(dog2)