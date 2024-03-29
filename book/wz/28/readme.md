[堆和堆排序：为什么说堆排序没有快速排序快？](https://time.geekbang.org/column/article/69913)

- 堆的删除操作是个难点， 怎么搞

- 为什么一些公司考快排？
    性能更好
- 堆排序 时间复杂度 O(nlogn)  
    Heap
- 堆和树的关系是？
    特殊的树
- 堆和堆排序的关系是？
    堆排序是堆的经典应用场景
    原地   时间复杂度O(nlogn)
- 为什么堆排序没有快速排序快？
    1. 时间复杂度都是O(nlogn)
    2. 堆排序更稳定
    3. 快排性能更好

- 堆要满足哪些条件？
    1. 堆是一个完全二叉树
        何为完全二叉树？
        除了最后一层，其他层的节点个数都是满的，最后一层的节点都靠左排列。
    2. 堆中每一个节点的值都必须大于等于（或小于等于）其子树中每个节点的值。
        大顶堆   小顶堆
    3. 以下答案是？
    ![](https://static001.geekbang.org/resource/image/4c/99/4c452a1ad3b2d152daa2727d06097099.jpg)
    第1 个和第 2 个是大顶堆，第 3 个是小顶堆，第 4 个不是堆
    从 1  2 还可以看出什么？
     对于同一组数据，我们可以构建多种不同形态的堆。
    
- 如何存储一个堆？
    因为是完全二叉树，完全二叉树比较适合用数组来存储。节省空间。

- 通过下标，如何找到一个节点的左右子节点和父节点？
    0 空出来
    数组中下标为 i 的节点的左子节点，就是下标为 i∗2 的节点，右子节点就是下标为 i∗2+1 的节点，父节点就是下标为 2i​ 的节点
- 堆的操作
    1. 往堆中插入一个元素
    ![](https://static001.geekbang.org/resource/image/e5/22/e578654f930002a140ebcf72b11eb722.jpg)
    过程叫堆化  heapify
    堆化非常简单，就是顺着节点所在的路径，向上或者向下，对比，然后交换。
    如何？
    ![](https://static001.geekbang.org/resource/image/e3/0e/e3744661e038e4ae570316bc862b2c0e.jpg)

- 删除堆顶元素
    从堆的定义的第二条中，任何节点的值都大于等于（或小于等于）子树节点的值
    堆顶元素存储的就是堆中数据的最大值或者最小值。
    - 流程如何做
        1. 错误思想
        假设我们构造的是大顶堆，