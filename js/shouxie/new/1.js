function objectFactory() {
    var obj = new Object();
    var Constructor = [].shift.call(arguments);
    // console.log(Constructor);
    obj.__proto__ = Constructor.prototype;
    // Constructor.apply(obj, arguments);
    var ret = Constructor.apply(obj, arguments);
    // ret || obj 这里这么写考虑了构造函数显示返回 null 的情况
    return typeof ret === 'object' ? ret || obj : obj;
}

function person(name, age) {
    this.name = name
    this.age = age
    // return null;
    // return {
    //     name,
    //     age,
    //     bb:'11'
    // }
}
let p = objectFactory(person, '布兰', 12)
console.log(p)