[source](https://leetcode-cn.com/problems/minimum-size-subarray-sum/)

数组  n positive integers and a positive integer s,
>= s 的长度最小的连续子数组。  如果不存在 返回0

s = 7,  nums = [2,3,1,2,4,3]
2  两个指针left 和right  分别记录数组的左右的边界位置 
- right 向右移， 子数组和大于等于给定值或者right 达到数组之尾
- 更新最短距离, 
