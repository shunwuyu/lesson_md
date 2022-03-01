[source](https://github.com/likaia/JavaScript-test/blob/master/src/BinarySearchTreeTest/BinarySearchTreeTest.js)

- 11  7  15  5  3  9  8  10 13  12  14  20 18  25  6
    用树结构来组织如何做？
    

- 此图什么意思？
    https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/21/168709bfa4d76032~tplv-t2oaga2asx-watermark.awebp
    先序遍历



- 此图是什么？
    ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/21/1686ec7e2fecdd97~tplv-t2oaga2asx-watermark.awebp)
    1. 树  与队列的区别是？
        根
        叶
        非线性的数据结构
    2. 二叉树
        最多两个孩子， 递归定义
        二叉树中任何一个结点的左子树既可以是一颗空树,也可以是一颗拥有左子树和右子树的二叉树;结点的右子树也既可以是一颗空树,也可以是一颗拥有左子树和右子树的二叉树,这样直到递归边界,递归定义结束。退出条件没有子节点
    3. 满二叉树
        ![](https://img2018.cnblogs.com/i-beta/1468919/201911/1468919-20191103194220076-925294362.png)
    4. 完全二叉树
        ![](https://img2018.cnblogs.com/i-beta/1468919/201911/1468919-20191103194739538-2034251878.png)
    3. 二叉搜索树
    ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/21/1686ec7e2fecdd97~tplv-t2oaga2asx-watermark.awebp)

- 二叉搜索树
    1. 进行查找非常快
    2. 添加或删除元素 也非常快
- 特点？
    每个节点的左节点永远都比自己小，右节点反之；
- 包含哪些技能点？
    添加节点、删除节点、查询节点（最大值、最小值，某一个指定值）
    中序遍历、先序遍历、后序遍历
- 删除节点
    如果左节点是 null 的 当前节点的右节点替换当前节点
    反之，右节点是 null 的，那么直接用当前节点的左节点替换当前节点；
    如果，当前要删除的节点，左右节点都存在的话
    那么就去遍历要删除节点的右侧节点，如果右侧节点不存
    这里其实简要概括一下，就是去找删除节点右节点树当中的最小值，来代替当前被删除节点的位置

- typescript 枚举有什么用？
    先写1 -1  后改
    如何写ICompareFunction