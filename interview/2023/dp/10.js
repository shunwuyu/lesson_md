var maxProfit = function(prices) {
    // 暴力法提示 超出时间限制
    let maxprofit = 0 ;
    for (let i = 0 ; i < prices.length - 1; i++) {
        for (let j = i + 1 ; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            if (profit > maxprofit) {
                maxprofit = profit;
            }
        }
    }
    return maxprofit;
};
console.time()
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.timeEnd()