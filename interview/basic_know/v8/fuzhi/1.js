let a = { n: 1};

a.x = a = { n: 2}; // 从左往右赋值

console.log(a.x, a); // undefined