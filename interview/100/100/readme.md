https://juejin.im/post/6844903917835436045

new绑定时讲了new操作符其实做了以下四步

1. var obj = new Object();  // 创建一个空对象
2. obj.__proto__ = F.prototype;   // obj的__proto__指向构造函数的prototype
3. var result = F.call(obj); // 把构造函数的this指向obj，并执行构造函数把结果赋值给result
4. if (typeof(result) === 'object') {
    objB = result; // 构造函数F的执行结果是引用类型，就把这个引用类型的对象返回给objB
} else {
    objB = obj; // 构造函数F的执行结果是值类型，就返回obj这个空对象给objB
}

https://juejin.im/post/6844903988018544648
- 函数对象 FunctionKind ("normal", "classConstructor", "generator", "async")
- ConstructorKind("base", "derived") 衍生的