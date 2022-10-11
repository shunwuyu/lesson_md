let maxW = -Infinity;
let weight = [2,2,4,6,3];
let n = 5;
let w = 9;
// let arr = [];
function f(i, cw) {
  if (cw == w || i == n) { // cw 表示装满了， i==n 表示物品都考察完了
    if (cw > maxW) maxW = cw;
    return;
  }
  f(i+1, cw); // 不装第一个物品
  if (cw + weight[i] <= w) {
    f(i + 1, cw + weight[i]) // 选择装第i 个物品
  }
}

// console.log(maxW > 10000);
f(0, 0);
console.log(arr);