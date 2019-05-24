[leetcode](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)

两两交换链表中的节点。  
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
- 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
- 设置一个虚拟头结点dummyHead
- 设置需要交换的两个节点分别为node1 、node2
  同时设置node2的下一个节点next
  将node2节点的next设置为node1节点
  将node1节点的next设置为next 节点
  将dummyHead 节点的next设置为node2
  结束本轮操作

- 返回的是头结点