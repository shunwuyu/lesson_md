// CommonJS 模块
var counter = 3;
function incCounter() {
  ++counter;
}
// module.exports = {
//   counter: counter,
//   incCounter: incCounter,
// };
module.exports = {
    get counter() {
        return counter
    },
    incCounter: incCounter,
};

// lib.js模块加载以后，它的内部变化
// 就影响不到输出的mod.counter了。
// 这是因为mod.counter是一个原始类型的值，
// 会被缓存。除非写成一个函数，才能得到内
// 部变动后的值。