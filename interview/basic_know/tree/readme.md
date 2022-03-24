[source]()

- 为什么要研究树的遍历？
    1. 二叉树
    2. 非线性数据解构， 不简单
        遍历本身是一种线性操作， 数组或链表， 比较简单....
        要做什么事？
            - 把非线性关联的节点转化成一个线性的序列， 
            - 以不同的方式遍历，遍历的序列顺序也不同....
    3. 二叉树遍历方式有几种？
        四种
            root 节点的顺序
            1. 前序遍历 中左右 VLR
                ![](https://bkimg.cdn.bcebos.com/pic/3c6d55fbb2fb4316e5bfe05020a4462309f7d37c?x-bce-process=image/resize,m_lfit,w_440,limit_1/format,f_auto)
                ABDECF

            2. 中序遍历 LDR  左中右
                ![](https://bkimg.cdn.bcebos.com/pic/4034970a304e251f1510e448a586c9177e3e539e?x-bce-process=image/resize,m_lfit,w_220,h_220,limit_1/format,f_auto)
                DBEAFC
                找到第一个没有左孩子的节点 4

            3. 后序遍历  LRD 左右中
                ![](https://bkimg.cdn.bcebos.com/pic/4034970a304e251f1510e448a586c9177e3e539e?x-bce-process=image/resize,m_lfit,w_220,h_220,limit_1/format,f_auto)
                DEBFCA
            4. 层序遍历
                ![](https://bkimg.cdn.bcebos.com/pic/4034970a304e251f1510e448a586c9177e3e539e?x-bce-process=image/resize,m_lfit,w_220,h_220,limit_1/format,f_auto)

        还有别的分类方法吗？考试考什么？ 
            不局限于二叉树， 算法思想
            1. 深度优先 (前序遍历, 中序遍历, 后序遍历) 纵深  DFS
                 ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/66b7cfe365c84208a03bf2d59e7a5880~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)
                 一头扎到底 怎么理解
                 
            2. 广度优先 (层序遍历) BFS
        
- 如何实现？  
    用递归的思路可以非常简单的实现出来
    1.js
    层序遍历  ？ 样子是什么样的？ 输出应该什么样？ https://www.cnblogs.com/echolun/p/13328927.html
    从上到下，从左到右一层一层遍历的顺序
    ![](https://img2020.cnblogs.com/blog/1213309/202007/1213309-20200717112942883-1126465313.png)
    2.js  


- 递归的问题在那， 如何优化？
    搜索思想
    1. Depth_First_Search  深度优先遍历
        DFS 采用的是栈的形式, 即先进后出；
        简单来说，从根节点出发，然后依次向下继续搜索，直到遇到叶子节点，此时就会向上回溯，继续向为访问过的点继续深度搜索。
    2. Breadth-first search 广度优先遍历
        采用的是队列的形式, 即先进先出
        BFS是从根节点开始，沿着树的宽度遍历树的节点，如果发现目标，则演算终止。
