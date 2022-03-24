[source](https://juejin.cn/post/6861376131615227912)

- 网易面试题
    DFS 是什么?   Depth-First-Search
    深度优先搜索
        它的目的是要达到被搜索结构的叶结点
    1. 深度优先搜索是一种在开发爬虫早期使用较多的方法
        爬虫里的叶节点是什么？
            即那些不包含任何超链的HTML文件
            在一个HTML文件中，当一个超链被选择后，被链接的HTML文件将执行深度优先搜索，即在搜索其余的超链结果之前必须先完整地搜索单独的一条链
            深度优先搜索沿着HTML文件上的超链走到不能再深入为止，然后返回到某一个HTML文件，再继续选择该HTML文件中的其他超链。当不再有其他超链可选择时，说明搜索已经结束。
            理论上世界上所有的页面都会被连接起来  
    2. 深度优先搜索 属于图算法的一种 当然在二叉树里也可以用
        - 二叉树遍历有哪些？
            先序遍历  中序遍历   后序遍历  层序遍历
        - 根据深度优先， 哪些算？
            先序遍历  中序遍历   后序遍历

    BFS 是什么？  Breadth First Search
    广度优先搜索
    属于一种盲目搜寻法，目的是系统地展开并检查图中的所有节点，以找寻结果
    层序遍历 属于BFS 

- 用什么可以比较快的表示一棵树？  JSON对象 1.js
    树的形状是
               root
      c1                   c2
  c11     c12        c21        c22

  深度优先的方式遍历    ['root', 'c1','c11', 'c12', 'c2', 'c21', 'c22']         
    - 递归
        ```
        void PreorderRecursive(Bitree root){
            if (root) {
                visit(root);
                PreorderRecursive(root->lchild); 
                PreorderRecursive(root->rchild); 
            }
        }
     ```
    - 用栈模拟递归， 减少函数爆栈
        ```
        void PreorderNonRecursive(Bitree root){
            stack stk;
            stk.push(root);//节点入栈
            while(!stk.empty()){
                p = stk.top();//栈顶元素出栈并且访问该节点
                visit(p);
                stk.pop();
                if(p.lchild) stk.push(p.lchild);
                if(p.rchild) stk.push(p.rchild);//右边节点入栈
            }
        }

        ```
        ![](https://img-blog.csdn.net/20180107183556920?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzM4ODMzODk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
        ![1](https://img-blog.csdn.net/20180107190200381?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzM4ODMzODk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

         第一步：1号节点入栈。

          第二步：当栈不为空的时候弹出栈顶元素并且访问该节点，当栈为空的时候转第五步。
           第三步：弹出的栈顶元素的右和左节点入栈（如果存在的话）.
        ![2](https://img-blog.csdn.net/20180107190711327?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzM4ODMzODk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)


- 二叉树的最大深度
    给定一个二叉树，找出其最大深度。
    二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
    [3,9,20,null,null,15,7] 返回它的最大深度 3 。

    怎么做？  
    - 递归  子元素的深度+1   左右对比
    2.js
    - 还可以怎么做？ 非递归思想 
        - BFS，广度优先遍历
        - 每一次用一个数组temp保存上一层的所有节点，每次计数器count+1
        - 当temp为空的时候，也就是此时都是叶子节点情况
    3.js


-  BFS  层序遍历写法
    给你一个二叉树，请你返回其按 层序遍历 得到的节点值。
    [3,9,20,null,null,15,7]

    返回结果是
    [
        [3],
        [9,20],
        [15,7]
    ]
    4.js
    