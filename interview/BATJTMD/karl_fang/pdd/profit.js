function maxProfit(prices) {
    const n = prices.length;
    // 状态转移方程 
    let hold = new Array(n).fill(-Infinity);
    let unhold = new Array(n).fill(0);
    hold[0] = -prices[0];
    for (let i = 1; i < n; i++) {
        // -prices[i] 只是用来表示在第 i 天购买
        // 股票时需要付出的成本，它是负数是因为这个成本实际上是一笔支出
//         假设我们已经知道了在前一天（即 i-1）结束时，手中持有股票的最大收益 hold[i-1]。那么在第 i 天结束后，手中持有股票的最大收益可以有两种情况：

// 在前一天就已经持有股票：此时 hold[i] 就等于前一天手中持有股票的最大收益 hold[i-1]，因为今天没有进行任何买卖操作。

// 在前一天不持有股票，并在今天购入了股票：此时 hold[i] 等于前一天手中不持有股票的最大收益 -prices[i]，即 hold[i] = -prices[i]。
        hold[i] = Math.max(hold[i-1], -prices[i]);
        // 前一天不持有股票的最大收益 和  前一天持有股票 今天卖出的收益
        unhold[i] = Math.max(unhold[i-1], hold[i-1]+prices[i]);
    }
    return unhold[n-1];
}

console.log(maxProfit([7,1,5,3,6,4]))