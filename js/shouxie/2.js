function Dog() {

}
Dog.prototype.sayHi = function() {
    console.log('hello, ~~~');
}
const dog = new Dog();
function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left), // 获取对象的原型
        prototype = right.prototype;
    console.log(proto)
    while(true) {
        if (!proto) return false;
        if (proto === prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
}

// myInstanceof(dog, Dog);
console.log(myInstanceof(dog, Object));
