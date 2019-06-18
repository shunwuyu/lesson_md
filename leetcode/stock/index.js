var maxProfit = function(prices) {
  var i,
    length = prices.length,
    low,
    high,
    max = 0,
    cur;
  
  if (length === 0) {
    return 0;
  }

  low = prices[0];
  high = low;

  for (i = 1; i < length; i++) {
    cur = prices[i];
    if (cur > high) {
      high = cur;//涨了
    } else if (cur < low) {
      // you need buy before you sell
      low = cur;// 跌了
      high = cur; //不可能在今天卖
    }
    //当天买和之前买哪个更高，当前卖和之前卖哪个高 哪个收益更高？ 
    if (high - low > max) {
      max = high - low // 最高-最小
    }
  }
  return max;
}