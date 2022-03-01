[source](https://github.com/likaia/JavaScript-test/blob/master/src/Heap/lib/Heap.ts)
[source](https://juejin.cn/post/7007610680891146271)

- BST 让最大值， 最小值求O(logN), 如果要更快呢？
    堆排序 O(1) 

-![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b1175ae00df148ba906997b915737d10~tplv-k3u1fbpfcp-watermark.awebp)
    这个是堆吗？  为什么？
    最后一层的节点都集中在左部连续位置

- 堆和二叉搜索树有什么区别
    1. 每个节点都大于等于其子树节点的堆
    2. 没二叉树 BST 那么严格
        10 9 8 5  6  7  4  3
        可以组成多少种大顶堆？
        不严格
        ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b569b963108b4ba0892ad21419e3e653~tplv-k3u1fbpfcp-watermark.awebp)

- 堆 是一种特殊的树，满足以下条件即为堆
    完全二叉树
    除了最后一层，其他层的节点个数都是满的，最后一层的节点都集中在左部连续位置
    堆中每一个节点的值都必须大于等于（或小于等于）其左右子节点的值
        每个节点都大于等于其子树节点的堆叫“大顶堆“，根是最大值
        每个节点都小于等于其子树节点的堆叫“小顶堆“，根是最小值
    
- 存储方式
    数组 为什么？ 

- 计算
    i 结点的父结点 par = floor((i-1)/2) 「向下取整」
    i 结点的左子结点 2 * i +1
    i 结点的右子结点 2 * i + 2

- 把数字5添加到堆中
    ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/2/24/17074e4e35613af5~tplv-t2oaga2asx-watermark.awebp)
    1 例如，将数字5添加到堆中

- 堆的操作主要有两种：插入、删除
    插入 会不满足   堆是一颗完全二叉树
    堆中每个节点都必须大于等于（或小于等于）其左右子节点
    在插入或删除操作后需要进行调整，让其重新满足堆的特性，这个调整的过程叫做堆化 heapify

    过程
    ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/499ad3942a0940fda7ca2c620862e688~tplv-k3u1fbpfcp-watermark.awebp)
    删除 ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ee8d8805dc14aa5b236800557dce148~tplv-k3u1fbpfcp-watermark.awebp)

    插入数据和删除堆顶元素的主要逻辑就是堆化，所以时间复杂度都是 O(logn)。


堆是一种数据结构，可以简单的理解为一个集合，支持几个操作，向集合插入一个数，获取最值，删除最值，获取最值可以常数时间完成，其他两个是logn级别，然后最简单的堆排序就是，先把所有数插进堆里，然后每次获取最小值，删除最小值，得到的序列就排好序了。具体实现还可以优化，比如已知n个数的话，是可以不一个一个插，直接建堆，复杂度线性，相当于每个元素平均用了常量时间，再比如建堆可以直接在原数组上建，取最值然后删除可以直接把元素放到数组最后(因为堆删除最值之后，占用空间就是少的最末尾一个地方)，这样可以只借助常量的额外空间(也就是循环变量之类的)完成排序，这些优化要求你彻底理解堆才能实现。快排主要缺点就是复杂度容易退化到平方，所以实际用的排序算法往往多种算法结合的，利用每种算法的优点来达到高效排序的目的
