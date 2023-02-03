function add(a, b) {
    // console.log(arguments, Object.prototype.toString.call(arguments));
    // not a function 
    // arguments.forEach((item) => {
    //     console.log(item);
    // })
    // 类数组
    // 还有哪些？
    // 用getElementsByTagName/ClassName()获得的HTMLCollection
    // 用querySelectorAll获得的nodeList
    // 如何转?
    // 最原始的方法就是再创建一个数组，用for循环把类数组的每个属性值放在里面，过于简单
    let args = Array.prototype.concat.apply([], arguments);
    // let args = [...arguments];
    // let args = Array.from(arguments);
    // let args = Array.prototype.slice.call(arguments);
    console.log(Object.prototype.toString.call(args));
    // 管它多少个参数把他们加起来
    console.log(args.reduce((sum, cur) => sum + cur));
}

add(1, 2, 4, 5)

const set = new Set([1,2,3]);
// 这种方法也可以用来转换Set
console.log(set, Object.prototype.toString.call(set), Array.from(set));
