[source](https://github.com/paopao2/leetcode-js/blob/master/Best%20Time%20to%20Buy%20and%20Sell%20Stock%20with%20Cooldown.js)

[source](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)

给定一个数组， 它的第i个元素是一支给定股票第i天的价格。 
完成一笔交易，（即买入和卖出）， 设计一个算法来计算你所能获取的最大利润
不能在买入股票前卖出股票

[7,1,5,3,6,4]
卖出价格要大于买入价格

[7,6,4,3,1]

按动态规化来思考这道问题
有买入和卖出两种状态 
买， 卖出， 也可以不再进行股票交易
卖来说，卖出股票后不在进行股票交易（
只要考虑当天买和之前买哪个收益更高，当天卖和之前卖哪个收益更高

