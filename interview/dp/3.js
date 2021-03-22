const climbStairs = function(n) {
  // 初始化状态数组
  const f = [];
  // 初始化已知值
  f[1] = 1;
  f[2] = 2;
  // 动态更新每一层楼梯对应的结果
  for(let i = 3;i <= n;i++){
      f[i] = f[i-2] + f[i-1];
  }
  // 返回目标值
  return f[n];
};

console.log(climbStairs(99));