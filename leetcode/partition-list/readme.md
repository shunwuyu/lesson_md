[leetcode](https://leetcode-cn.com/problems/partition-list/)
[wsx](https://juejin.im/post/5cef822ce51d454f71439c5e)

链表  一个特写的值x,  对链表进行分隔， 小于x的节点都在大于或等于x的节点之前

初始相对位置

head = 1->4->3->2->5->2   x = 3
1-> 2->2->4->3->5
给定值的节点都移动前面， 大于该值的节点顺序不变， 
相当于一个局部排序的问题。
dummyHead1  小于该值的链表， dummyHead2
保存大于或等于该值的链表

