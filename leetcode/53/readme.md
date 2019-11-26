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
 一次，一旦被读入并处理，它就不需要在被记忆了。而在此处理过程中算法能对它已经读入的数据立即给出相应子序列问题的正确答案。

-2  1  -3  4  -1  2  1  -5  4
0
0
    1
    1      
       -2
       0
          4   
          4
             3
             4
                5
                5
                   6
                   6
                      1    5
                      6    、、
                      -  长度为n的序列，  一分为二变为两个长度为n/2的子序列， 一直一分， 只有一个整数
  - 左边序列的最大子序列各， 右边序列的最大只序列和， 和处于中间上的最大子序列和。 
  再将这些小问题合并， 