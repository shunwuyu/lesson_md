[source](https://juejin.cn/post/6844904103504510990)

- 索引是什么？
    索引是一种数据结构

- 请建一张员工表
    1. 表名 employee
    2. 关系型mysql 数据表
    3. 字段 name、age 和address
        tinyint(1)  -128-127   
        ```
        create table if not exists employee(
            id  int(11) primary key  AUTO_INCREMENT,
            name varchar(30) NOT NULL,
            age  tinyint(1),
            address varchar(255)
        );
        ```

- 从这个表中查找出所有名字是‘ZhangSan’的雇员信息
    select name,age,address from employee where name='ZhangSan'

- 加入有上万行数据呢？ 大公司
    每一行查找？  
- 怎么办？
    由于我们想要得到每一个名字为ZhangSan的雇员信息，在查询到第一个符合条件的行后，不能停止查询，因为可能还有其他符合条件的行，所以必须一行一行的查找直到最后一行——这就意味数据库不得不检查上万行数据才能找到所有名字为ZhangSan的雇员。这就是所谓的全表扫描（参见前文“执行计划”中type=ALL），显然这种模式效率太慢，技术可能觉得无所谓，业务会拿刀砍你。
    加索引
- 索引的意义
    通过缩小一张表中需要查询的记录/行的数目来加快搜索的速度
    在关系型数据库中，索引是一种单独的、物理的对数据库表中一列或多列的值进行排序的一种存储结构，它是某个表中一列或若干列值的集合和相应的指向表中物理标识这些值的数据页的逻辑指针清单（定义真特么拗口）。大白话意思是索引的作用相当于图书的目录，可以根据目录中的页码快速找到所需的内容。

    1. 索引是在表的列上创建
        一个索引是存储的表中一个特定列的值数据结构
    2. 索引包含一个表中列的值
    3. 数据库表设计,从一开始就应该考虑添加索引,而不是到最后发现慢SQL了,影响业务了才来补救

- 显示索引
    show index from ;
        - PRIMARY    Seq_in_index 起始值 Collation 为 Ascend
    Index_type = BTREE ？

- BTREE
    - Hash哈希结构 查询/插入/修改/删除的平均时间复杂度都为O(1);
    - Tree 树 结构 让查询/插入/修改/删除的平均时间复杂度都为O(log(n))    

    即然不管读还是写，Hash这种类型比Tree树这种类型都要更快一些，那为什么MySQL的开发者既使用Hash类型做为索引，又使用了BTREE呢？

    话说回来，还是跟SQL应用场景有关系

    select name,age,address from employee where name='ZhangSan'

    确实用HASH索引更快，因为每次都只查询一条信息（重名的雇员姓名也才几条而已），但实际上业务对于SQL的应用场景是：

    - orderby 需要排个序
    - groupby 还要分个组
    - 还要比较大小 大于或小于等等

    如果继续用HASH类型做索引结构，其时间复杂度会从O(1)直接退化为O(n)
    相当于全表扫描了
    而Tree的特性保证了不管是哪种操作，依然能够保持O(log(n))的高效率，

- ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/26/171158b2f070027f~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

    -  如果索引数据很多，树的层次会很高（只有左右两个子节点），数据量大时查询还是会慢
    - 二叉树每个节点只存储一个记录，一次查询在树上找的时候花费磁盘IO次数较多

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/26/171158b2f0cf9f2a~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

-  不再是二叉搜索，而是N叉搜索，树的高度会降低，查询快
- 叶子节点，非叶子节点，都可以存储数据，且可以存储多个数据
- 通过中序遍历，可以访问树上所有节点

B 树是为了磁盘或其它存储设备而设计的一种多叉平衡查找树
B树又可以写成B-树/B-Tree，并不是B“减”树，横杠为连接符，容易被误导
![](https://upload-images.jianshu.io/upload_images/12058546-2ed176816eed54ad.png?imageMogr2/auto-orient/strip|imageView2/2/w/677/format/webp)

1.  x.n = 2 有俩个关键字
    分别为 x.key1 = 8  x.key2 = 12 且 8<12
    x.leaf = false为内部节点
2.  含有3个指向它孩子的指针P1 P2 P3
3.  关键字x.key1=8 它的左边指针P1 对 子树 3 5 分割 满足 3和5都小于8
    关键字x.key1=8 它的右边指针P2 对 子树 9 10 分割 满足 9和10都大于8（同为12的左指针）
    关键字x.key2=12 它的右边指针P3 对 子树 13 15 分割 满足 13和15都大于12

来模拟下查找文件29的过程：
    ![](https://upload-images.jianshu.io/upload_images/12058546-44a71668594a77d9.png?imageMogr2/auto-orient/strip|imageView2/2/w/654/format/webp)

本质上是一样的,区别就在与B+树的所有根节点都不带有任何数据信息,只有索引信息,所有数据信息全部存储在叶子节点里,这样,整个树的每个节点所占的内存空间就变小了,读到内存中的索引信息就会更多一些,相当于减少了磁盘IO次数,问题1就得到了解决。又由B树的性质可以得到,所有叶子节点都会在同一层,B+树会以一个链表的形式将所有叶子节点的信息全部串联起来,这样,想遍历所有数据信息只需要顺序遍历叶子节点就可以了,方便又高效,问题二就得到了解决。