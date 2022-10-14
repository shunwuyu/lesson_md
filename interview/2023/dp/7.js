function bag(weight, value, target) {
    const len = weight.length
    // 1.初始化dp数组
    const dp = Array(target + 1).fill(0)
    dp[0] = 0
    for (let i = weight[0]; i <= target; i++) {
        dp[i] = value[0]
    }
    // console.log(dp);
    // 2.状态转移方程
    for (let i = 1; i < len; i++) {
        // 使用一维数组存储，需逆序遍历
        for (let j = target; j >= weight[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
        }
    }
    return dp[target]
}
console.log(bag([2, 2, 6, 5, 4], [6, 3, 5, 4, 6], 10)); 

