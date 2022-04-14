function Person (name) {
  this.name = name;
}

var person = new Person('xiaoer')
console.log(Object(person, '++++'));
const isObject = obj => obj === Object(obj);
// console.log(isObject(undefined));
console.log(isObject(person));
// 这里巧妙的利用 !! 来进行布尔值的转换来判断是否为 Null 和 Undefined
// console.log()
const isPlainObject = (val) => !!val && typeof val === 'object' && val.constructor === Object;
console.log(isPlainObject(null));
// console.log(isPlainObject({a: 1}));

