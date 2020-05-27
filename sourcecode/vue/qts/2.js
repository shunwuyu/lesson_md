function isObject (obj) {
  return obj !== null && typeof obj === 'object' // 对象， 原始值
}

const _toString = Object.prototype.toString;

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

console.log(isRegExp(/123/));