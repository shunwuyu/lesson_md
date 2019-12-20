[source](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/)

给定一个仅包含数字2-9的字符串， 返回所有它能表示的字母组合。 

- 为空 退出
- 数字到字母的映射
- 一重for 循环拿到每组字符
  跟后面的排列组合
- 递归
  - 退出条件
    排列的它母数达到了数字的数量， 可以组合一次
    templList.length === digits.length
    list templList