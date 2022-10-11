function Animal() {
    this.colors = ['black', 'white']
}

Animal.prototype.getColor = function() {
    return this.colors
}

function Dog() {}
Dog.prototype =  new Animal()

// 存在什么问题?
// 问题1：原型中包含的引用类型属性将被所有实例共享；
// 问题2：子类在实例化的时候不能给父类构造函数传参；
// 问题3: 子类prototype  constructor  指向Animal
let dog1 = new Dog()
console.log(dog1.colors, dog1.getColor());
dog1.colors.push('brown')
let dog2 = new Dog()  // dog2 受dog1 影响
console.log(dog2.colors)
console.log(Dog.prototype.constructor);


