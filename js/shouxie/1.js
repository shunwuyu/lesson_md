function Dog() {

}
Dog.prototype.sayHi = function() {
    console.log('hello, ~~~');
}
const dog = new Dog();
console.log(dog instanceof Dog) // 原型
console.log(dog instanceof Object) // 原型链