/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // 创建一个长度为 amount + 1 的数组，并初始化为 Infinity
    const dp = new Array(amount + 1).fill(Infinity);
    // 当金额为 0 时，需要 0 枚硬币
    dp[0] = 0;
    
    // 循环遍历金额从 1 到 amount 的所有情况
    for(let i=1; i<=amount; i++){
      // 再循环遍历所有硬币面值
      for(let j=0; j<coins.length; j++){
        // 只有当当前面值小于等于当前金额时，才可以进行状态转移
        if(coins[j] <= i){
          // 状态转移方程：
          // dp[i] 表示凑成金额 i 需要的最少硬币数量
          // dp[i - coins[j]] 表示凑成金额 i - coins[j] 需要的最少硬币数量
          // 因为最后添加一枚面值为 coins[j] 的硬币就可以凑成金额 i
          // 所以 dp[i] 取 dp[i] 和 dp[i - coins[j]] + 1 中的较小值
          dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
        }
      }
    }
  
    // 如果凑不出 amount，则返回 -1，否则返回 dp[amount]
    return dp[amount] === Infinity ? -1 : dp[amount];
};