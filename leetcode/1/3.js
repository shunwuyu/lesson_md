const map = new Map();
const obj = {p: 'Hello World'};

console.log(map.set(obj, 'OK'))
console.log(map.get(obj)) // "OK"

console.log(map.has(obj)) // true
console.log(map.delete(obj)) // true
console.log(map.has(obj)) // false