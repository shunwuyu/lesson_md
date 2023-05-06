// math.js
let count = 0;

function add() {
  count++;
  return count;
}
// 在上面的代码中，我们每次调用 math.add() 
// 都会将 count 的值加 1，并返回当前的值。
// 由于 CommonJS 模块的导出是复制一份，
// 因此我们在 app.js 中每次调用 math.add() 
// 时得到的都是不同的 count。
module.exports = {
  add
};

