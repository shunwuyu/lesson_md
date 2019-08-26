[source](https://leetcode-cn.com/problems/gas-station/)
[answer](https://github.com/azl397985856/leetcode/blob/master/daily/answers/134.gas-station.js)

在一条环路上有 N 个加油站，其中第 i 个加油站有汽油 gas[i] 升。

你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。

如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1。

gas  = [1,2,3,4,5]
cost = [3,4,5,1,2]
4  -  1  =    3
3 + 5    = 8 - 2 + 1=  7+2 -3=  6
6-4+3=5
3  
  
- cost 总各一定小于等于gas 总和