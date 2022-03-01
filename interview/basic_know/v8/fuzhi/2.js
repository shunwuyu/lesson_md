let a = { n: 1};
let preA = a;
a.x = a = { n: 2 };
console.log(preA, '------', a);