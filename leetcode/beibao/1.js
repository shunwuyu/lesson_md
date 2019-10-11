function knapsack(weights, values, W) {
  var n = weights.length - 1
  var f = [[]];
  for (var j = 0; j <= W; j++) {
    //如果容量不能放下物品0的重量, 价值为0
    if (j < weights[0]) {
      f[0][j] = 0;
    } else { //否则等于物体0的价值
      f[0][j] = values[0]
    }
  }
  for (var j = 0; j <= W; j++) {
    for (var i = 1; i <= n; i++) {
      if (!f[i]) {
        f[i] = []; //创建新的一行
      }
      if (j < weights[i]) { //等于之前的最优值
        f[i][j] = f[i-1][j];
      } else {
        f[i][j] = Math.max(f[i-1][j], f[i-1][j-weights[i]] + values[i]) 
      }
    }
  }
  return f[n][W];
  console.log(f);
}
console.log(knapsack([2, 2, 6, 5, 4], [6, 3, 5, 4, 6], 10));
