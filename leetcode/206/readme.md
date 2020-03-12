[source](https://leetcode-cn.com/problems/reverse-linked-list/)

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

- 变量记录前驱pre, 一个变量记录后继next.
  - 链表的基本操作（交换）
  - 注意更新current和pre的位置
  时间复杂度 O（n）
  空间复杂度O(1)

# 递归解法
  退出条件： 当下一结点为null时， 返回当前节点
  递归找到尾结点， 将其存储为头结点
  头结点的下一个结点就是第二层的结点
  时间复杂度