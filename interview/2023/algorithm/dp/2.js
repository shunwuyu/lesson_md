// 记忆化搜索来提效
const f = []
const climbStairs = function(n) {
  if(n==1) {
      return 1
  }
  if(n==2) {
      return 2
  }
  // 若f[n]不存在，则进行计算
  if(f[n]===undefined)  f[n] = climbStairs(n-1) + climbStairs(n-2)
  // 若f[n]已经求解过，直接返回
  return f[n]
};
console.log(climbStairs(30));