// 双指针
var maxProfit = function (prices) {
    var minPrice = prices[0], maxProfit = 0;
    for (var i = 0; i < prices.length; i++) { // 一次遍历
      if (prices[i] < minPrice) {  // 最小值指针
        minPrice = prices[i] //  最低点
      } else if (prices[i] - minPrice > maxProfit) { // 比最小值大的， 售出 
        maxProfit = prices[i] - minPrice
      }
    }
    return maxProfit;
};
  