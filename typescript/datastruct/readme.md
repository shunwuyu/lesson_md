[](https://github.com/likaia/JavaScript-test/tree/master/src/LinkedListTest)

# [](https://mp.weixin.qq.com/s?__biz=MzA5NTcxOTcyMg==&mid=2247488031&idx=1&sn=cb421a958c25cec2c4afa9280b048e39&chksm=90ba4a5aa7cdc34cb73671758a2f60a8b8e23f80a0dd5f327072ff1dfe0fa0a097523df492c4&scene=21#wechat_redirect)
- 后进先出(LIFO)
- 当你需要经常获取刚存放进去的数据时
数组实现  对象实现 性能上却有着很大的差别
- 实现思路
  - 入栈，添加一个新元素至栈顶（数组的末尾）。  push
  - 出栈，将栈顶的元素移除并返回被移除的元素。  pop
  - 获取栈顶元素，获取当前栈顶元素返回。        peek
  - 判断栈是否为空，判断栈（数组）内是否有数据。 isEmpty
  - 清空栈，移除栈内所有的元素。 clear
  - 获取栈大小，返回栈里的元素个数。 size
  - 输出栈内数据，将栈中的所有元素以字符串的形式返回。 toString


- 在处理大量数据时，我们需要评估如何操作数据是最高效的。
- 在使用数组时，大部分方法的时间复杂度都为O(n)
  数组是元素的一个有序集合，为了保证元素排列有序，它会占用更多的内存空间
  直接获取元素，占用更少的内存空间，并且仍然保证所有元素都按照我们的需要进行排列，就属于最优解决方案了。
  
[soource](https://cloud.tencent.com/developer/article/1687729)
## 实现链表与变相链表
有序元素的集合。 通过指针连接， 添加或删除元素只需要修改指针的指向即可， 执行速度相比速度有得到显著的提升
链表中的元素在内存中并非连续存放
数据需要频繁修改时，使用链表作为数据结构是最优解决方案
数据需要频繁查询时，使用数组作为其数据结构是最优解决方案

