[source](https://github.com/azl397985856/leetcode/blob/master/problems/25.reverse-nodes-in-k-groups-cn.md)

k个nodes为一组进行翻转， 返回翻转后的linked list.
从左到右扫遍linked-list 以k为单位把数组分为若干段， 对每一段进行翻转。 给定首尾nodes, 如何对链表进行翻转
null 的 previous node (prev) 遍历链表的同时， node 的下一个（next）指向前一个node(prev) 

1. 先分组 用一个count 变量记录当前节点的个数
2. 用一个start变量记录当前分组的起始节点位置的前一个节点
3. 用一个end变量记录要翻转的最后一个节点位置
4. 翻转一组(k个nodes)即(star, end)
5. 更新start
6. 更新end


1. 创建一个dummy node
2. 对链表以k为单位进行分组， 记录每一组的起始和最后节点位置
3. 对每一组进行翻转 更换起始和最后的位置
4. 返回dummy.next

