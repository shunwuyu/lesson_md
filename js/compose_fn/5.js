// 给你一个字符串，将这个字符串转化成大写，然后逆序.
let str = 'jspool';
function fn(str) {
  let upperStr = str.toUpperCase()
  return upperStr.split('').reverse().join('')
}

console.log(fn(str));

