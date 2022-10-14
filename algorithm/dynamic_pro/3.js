// n 个阶段， 一个物品是否放到背包中， 
// state[0][0]=true  state[0][2] = true

function knapsack(weight, n, w) {
  let states = [];
  for (let p = 0; p < n; p++) {
    states[p] = new Array();
    for (let q = 0; q < w+1; q++) {
      states[p][q] = false;
    }
  }
  states[0][0] = true;
  if (weight[0] <= w) {
    states[0][weight[0]] = true;
  }
  for (let i = 1; i < n; ++i) {
    for (let j = 0; j <= w; ++j) {// 不把第i个物品放入背包
      if (states[i-1][j] == true) states[i][j] = states[i-1][j];
    }
    for (let j = 0; j <= w-weight[i]; ++j) {//把第i个物品放入背包 if (states[i-1][j]==true) states[i][j+weight[i]] = true; }
      if (states[i-1][j]==true) states[i][j+weight[i]] = true;
    }
  }
  for (let i = w; i >= 0; --i) { // 输出结果
    if (states[n-1][i] == true) return i;
  }
  return 0;
}
console.log(knapsack([2, 2, 4, 6, 3], 5, 9 ))