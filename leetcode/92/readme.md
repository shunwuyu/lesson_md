[source](https://leetcode.cn/problems/reverse-linked-list-ii/)

- ![](https://assets.leetcode.com/uploads/2021/02/19/rev2ex2.jpg)
    这个图想干什么？
    反转从位置 left 到位置 right 的链表节点

给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
```
输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]
```
1 <= left <= right <= n

1. 将链表分成三部分 左、需要反转的部分、右
2. 记录四个节点 待反转头节点 待反转头节点的前一个节点
    待反转尾节点 待反转尾节点的后一个节点
3. 反转需要反转的部分
4. 拼接 左 + 反转后的需要反转的部分 + 右

