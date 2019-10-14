
// const add = (a, b) => {
//   return a + b;
// }
// console.log(exports === module.exports);
// exports.add = add;
// exports = module.exports = add;
// module.exports = add;
// lib.js
// lib.js
var counter = 3;
var obj = {
    name: 'David'
};

function changeValue() {
    counter++;
    obj.name = 'Peter';
};
module.exports = {
    counter: counter,
    obj: obj,
    changeValue: changeValue,
};

