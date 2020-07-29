[source](https://github.com/azl397985856/leetcode/blob/master/problems/875.koko-eating-bananas.md)

N piles of bananas   i-th pile piles [i] bananas  K 

二分解决法

若干堆香蕉， 每小时可以吃某一堆的n个， 如果这一堆不足n个， 那么只能吃掉这一堆里剩下的苹果， 必需在H小时内吃完， 问n的最小值是多少？

最大的堆的香蕉数， 试一下能不能行？ 不行则返回上次计算的结果， 
【3， 6， 7， 11】

1. 最大值 Math.max
2. 中间值
3. 代码注释