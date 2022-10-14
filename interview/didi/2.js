// 为什么叫proxy?
// 2. 无操作转发代理
// let target = {};
// let p = new Proxy(target, {});
// p.a = 37; 
// console.log(target.a);

// 1. 基础示例
// var handler = {
//   get: function(target, name){
//     console.log('===',target,name);
//       return name in target ? target[name] : 37;
//   },
// };

// var p = new Proxy({}, handler);
// p.a = 1;
// p.b = undefined;
// console.log(p.a, p.b); // 1, undefined
// console.log('c' in p, p.c); // false, 37

// 3. 验证
let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }

    // The default behavior to store the value
    obj[prop] = value;

    // 表示成功
    return true;
  }
};

let person = new Proxy({}, validator);

person.age = 100;

console.log(person.age); 
// 100

person.age = 'young'; 
// 抛出异常: Uncaught TypeError: The age is not an integer

person.age = 300; 
// 抛出异常: Uncaught RangeError: The age seems invalid