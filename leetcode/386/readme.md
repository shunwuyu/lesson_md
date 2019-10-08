[leetcode](https://leetcode-cn.com/problems/lexicographical-numbers/?utm_source=LCUS&utm_medium=ip_redirect_q_uns&utm_campaign=transfer2china)
[source](https://www.cnblogs.com/seniusen/p/10607642.html)

- 1, 10, 100 每次都乘以10
- 100, 101, 102, ... 109 每次都加1
- 109, 11 先除 10 直到不为9 再加1
- 找到n 了先除以10 再加1