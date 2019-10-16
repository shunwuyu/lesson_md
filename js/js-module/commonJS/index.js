// const add  = require('./module.js');
// console.log(add(1, 2));
// main.js
var { counter, obj, changeValue} = require('./module.js');

console.log(counter);  // 3
console.log(obj.name);  //  'David'
changeValue();
console.log(counter);  // 3
console.log(obj.name);  //  'Peter'

// Or
console.log(require('./module.js').counter);  // 3
console.log(require('./module.js').obj.name);  //  'Peter'
