var maxProfit = function(prices) {
    let maxprofit = 0, dp = [] ;
    // dp[i]表示截止到i，价格的最低点是多少
    dp[0] = prices[0];
    for (let i = 0 ; i < prices.length ; i++) {
        dp[i] = (dp[i - 1] < prices[i]) ? dp[i - 1] : prices[i];
        maxprofit = (prices[i] - dp[i]) > maxprofit ? prices[i] - dp[i] : maxprofit;
    }
    return maxprofit;
};

console.time()
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.timeEnd()