[source](https://github.com/azl397985856/leetcode/blob/master/problems/53.maximum-sum-subarray-cn.md)

- integer array nums  contiguous subarray  has the largest sum and return its sum. 
  连续最大子序列和， 从时间复杂度分析
  首尾位置， 用2个for 循环所有子序列的首尾位置， O（n^3）

- 暴力美学  O(n3)
  i => j 时间复杂度太大， 不是一个好算法。
  O(n^3) 
  O(1)空间复杂度

- 前缀和+暴力解
  以空间换时间

- 简化求和
  i 就是开始， j 就是结束  

- 联机算法 动态规划
  求和，然后判断和是否小于0，因为只要前面的和小于0，那么后面的数加上前面的和就一定比自身小，所以又重新求和，并和之前的最大子序和比较，取最大值。
  

  - 左边序列的最大子序列各， 右边序列的最大只序列和， 和处于中间上的最大子序列和。 
  再将这些小问题合并， 