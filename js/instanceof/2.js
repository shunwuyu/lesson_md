// 借用构造函数实现继承  传参
// 借用构造函数实现继承
function Animal(name) {
    this.name = name
    // 由于方法必须定义在构造函数中，所以会导致每次创建子类实例都会创建一遍方法
    this.getName = function() {
        return this.name
    }
}

function Dog(name) {
    Animal.call(this, name)
}
// 解决了传参问题
// 解决了共享问题
// Dog.prototype =  new Animal()
let dog1 = new Dog('小白')
console.log(dog1.name);
console.log(dog1.getName());
let dog2 = new Dog('大白')  // dog2 受dog1 影响
console.log(dog2.name)
console.log(dog2.getName());
// console.log(Dog.prototype.constructor);
