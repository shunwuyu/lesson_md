// 为什么？ 和 函数{} 冲突了
let func = (value, num) => {total: value * num};
console.log(func(1, 2));