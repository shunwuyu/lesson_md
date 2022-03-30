[漫画：什么是红黑树？](https://juejin.cn/post/6844904154385629198)

- ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/12/1720710feb7af731~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)
    这是一颗什么树？

    ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/12/172071104e0a7e29~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)
    这又是一颗什么树？

- 数据结构各种树列举下？
    n 叉树
    2叉树
    满二叉树
    完全二叉树
    二叉搜索树
    堆 大顶堆   小顶堆
    红黑树

- 请回忆二叉查找树  Binary Search Tree
    1. 左子树上所有结点的值均小于或等于它的根结点的值。
    2. 右子树上所有结点的值均大于或等于它的根结点的值。
    3. 左、右子树也分别为二叉查找树。

- BST 有什么好处？
    10 -> 9 -> 13 -> 11 -> 10
    查找过程优点像什么算法思想？  二分查找

- 查找次数等于什么？
    最大次数等于二叉查找树的高度

- 还有什么好处？
    插入新节点时也是，  通过一层层比较大小， 找到新节点适合插入的位置

- 有什么缺陷？
    - 插入新节点时
        ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/12/172071103a6e9496~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)
        依次插入 7,6,5,4,3 极端情况
        符合查找树的特性， 但是查找的性能大打折扣， 几乎变成了线性查找。

    - 如何解决二叉查找树多次插入新节点导致的不平衡呢？  红黑树....

- 红黑树 Red Black Tree
    下列附加特性
    1. 节点是红色或黑色
    2. 根节点是黑色
    3. 每个叶子节点都是黑色的空节点(NIL节点)
    4. 每个红色结点的两个子结点都是黑色。(从每个叶子到根的所有路径上不能有两个连续的红色结点)
    5. 从任一结点到其每个叶子的所有路径都包含相同数目的黑色结点。

- 什么情况会打破红黑树的规则？ 
    什么情况不会打破？

    ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/12/172071108b2c487a~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)
    为什么会打破规则呢？
    1. 如果用红色， 
        每个红色结点的两个子结点都是黑色
    2. 如果用黑色 叶子节点就不是黑色。

- 变色 和旋转（左旋转 右旋转）

    ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/12/172071109a3514e6~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

    X 变成黑色
    会有什么问题？
    仅仅把一个结点变色，会导致相关路径凭空多出一个黑色结点，这样就打破了规则5

    - 左旋转
        右孩子逆时针
        逆时针旋转红黑树的两个结点，使得父结点被自己的右孩子取代，而自己成为自己的左孩子。说起来很怪异，大家看下图：
        ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/12/17207110a6875e88~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

    - 右旋转
        左孩子顺时针
        顺时针旋转红黑树的两个结点，使得父结点被自己的左孩子取代，而自己成为自己的右孩子。大家看下图

- 红黑树插入新节点时有5种不同的局面
    1. 新结点（A）位于树根，没有父结点。
    ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/12/17207110c6aa65aa~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)
    怎么做？ 变色
    直接让新结点变色为黑色，规则2得到满足。同时，黑色的根结点使得每条路径上的黑色结点数目都增加了1，所以并没有打破规则5。
    2. 新结点（B）的父结点是黑色。
        新插入的红色结点B并没有打破红黑树的规则，所以不需要做任何调整。
    3. 新结点（D）的父结点和叔叔结点都是红色。
        两个红色结点B和D连续，违反了规则4
        - 先让结点B变为黑色
            后果 结点B所在路径凭空多了一个黑色结点，打破了规则5
        - 结点A变为红色
            后果 A和C又成为了连续的红色结点，我们再让结点C变为黑色
        经过上面的调整，这一局部重新符合了红黑树的规则。
        局部   A不是根
    
    4. 新结点（D）的父结点是红色，叔叔结点是黑色或者没有叔叔，且新结点是父结点的右孩子，父结点（B）是祖父结点的左孩子。
        以结点B为轴，做一次左旋转，使得新结点D成为父结点，原来的父结点B成为D的左孩子
        ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/12/17207110e74b60db~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

    5. 新结点（D）的父结点是红色，叔叔结点是黑色或者没有叔叔，且新结点是父结点的左孩子，父结点（B）是祖父结点的左孩子。
        结点A为轴，做一次右旋转，使得结点B成为祖父结点，结点A成为结点B的右孩子：

        ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/12/1720711107661c87~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

        我们让结点B变为黑色，结点A变为红色：

