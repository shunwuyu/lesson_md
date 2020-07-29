// 模拟实现一个深拷贝，并考虑对象相互引用以及 Symbol 拷贝的情况

// var deepCopy = function(obj) {
//   if (typeof obj !== 'object') return;
//   var newObj = obj instanceof Array ? [] : {};
//   for (var key in obj) {
//       if (obj.hasOwnProperty(key)) {
//           newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
//       }
//   }
//   return newObj;
// }

function deepCopy(obj, hash = new WeakMap()) {
  // 递归优化
  if (hash.has(obj)) return obj;
  var cobj;
  if (obj === null) { return obj }
  let t = typeof obj;
  // 基本类型
  switch (t) {
    case 'string':
    case 'number':
    case 'boolean':
    case 'undefined':
        return obj;
  }
  if (Array.isArray(obj)) {
    cobj = [];
    obj.forEach((c, i) => { cobj.push(deepCopy(obj[i])) });
  } else {
    cobj = {};
    if (Object.prototype.toString.call(obj) === "[object Object]") {
      Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj)).forEach(c => {
        hash.set(obj, obj);
        cobj[c] = deepCopy(obj[c], hash);
      });
    } else {
      //内置Object
      cobj = obj;
    }
  }
  return cobj;
}

var a = {a: '1', b: [1,2,3,4,{t:'test'}], [Symbol()]: 'symbol', d: new Date(), r: RegExp('^\\d$')};
// a.c = {b: a};

var ss = deepCopy(a);
console.log(ss);