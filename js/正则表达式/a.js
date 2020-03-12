const ary = (fn, n) => (arg) => fn(...arg.slice(0, n));
const a = ary(Math.max, 2);
var b = [[1, 5, 'a'], [9, 8], [10]].map(a);
console.log(b); 