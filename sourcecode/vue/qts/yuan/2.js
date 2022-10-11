Symbol(); // symbol
console.log(Symbol()); // 输出 "Symbol()" 至控制台
console.log(typeof Symbol() === 'symbol')
// new Symbol(); //Symbol is not a constructor
console.log(Symbol('foo').toString() === 'Symbol(foo)');