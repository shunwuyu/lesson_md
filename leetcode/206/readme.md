[source](https://leetcode-cn.com/problems/reverse-linked-list/)

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
- 前置聊下数组push pop 地址连续
- 数组交换
- 创建listnode 并遍历
- 变量记录前驱pre, 一个变量记录后继next.
  - 链表的基本操作（交换）
  - 虚拟节点dummy 简化操作
  - 注意更新current和pre的位置， 

- 利用交换，将最大的数冒泡到最后