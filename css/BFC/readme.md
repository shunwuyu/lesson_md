[source](https://juejin.cn/post/6950082193632788493)
-  如何让三个盒子 在一行？ 
    1. inline  但是设置不了高度
    2. inline-block
    3. 加个父容器   display: flex
    2-3  感觉在改变原有规则， 那这是什么规则呢？  

- KFC  是什么？
    BFC 是  Block Formatting Context   块级格式化上下文

    BFC它决定了元素如何对其内容进行定位， 以及与其它元素的关系和相互作用，当涉及到可视化布局时，Block Formatting Context提供了一个环境，HTML在这个环境中按照一定的规则进行布局。

    1. BFC是一个完全独立的空间（区别于传统文档流）， 让空间里的子元素不会影响到外面的布局
    2. 怎么使用BFC呢，BFC可以看做是一个CSS元素属性

- 怎么触发BFC?
    使用以下CSS属性
    - overflow: hidden
    - display: inline-block
    - position: absolute
    - position: fixed
    - display: table-cell
    - display: flex

- 规则
    1. BFC就是一个块级元素，块级元素会在垂直方向一个接一个的排列   
        内部的Box会在垂直方向上一个接一个的放置
        body 是一个BFC 
    2. BFC就是页面中的一个隔离的独立容器，容器里的标签不会影响到外部标签
    3. 垂直方向的距离由margin决定， 属于同一个BFC的两个相邻的标签外边距会发生重叠， 与方向无关
    4. 计算BFC的高度时，浮动元素也参与计算
        1.html
    5. BFC的区域不会与float的元素区域重叠
    6. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然

- 1.html
    看到上面效果给box设置完float结果脱离文档流，使container高度没有被撑开，从而背景颜色没有颜色出来，解决此问题可以给container触发BFC，上面我们所说到的触发BFC属性都可以设置。

- 2.html  Margin边距重叠
    可以看到上面我们为两个盒子的margin外边距设置的是10px，可结果显示两个盒子之间只有10px的距离，这就导致了margin塌陷问题，这时margin边距的结果为最大值，而不是合，为了解决此问题可以使用BFC规则（为元素包裹一个盒子形成一个完全独立的空间，做到里面元素不受外面布局影响），

    既然它是说垂直相邻，那么我们是不是只要让它们不相邻是不是就可以了

    1. s 

- 两栏布局
    3.html

    可以看到上面元素，第二个div元素为300px宽度，但是被第一个div元素设置Float脱离文档流给覆盖上去了，解决此方法我们可以把第二个div元素设置为一个BFC。

    4.html
        .aside和.mian重叠了。试分析一下，由于两个box都处在同一个BFC中，都是以BFC边界为起点，
        每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
        - BFC的区域不会与float box重叠
            触发main生成BFC， 来实现自适应两栏布局


https://juejin.cn/post/6844903855847637005

-   ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/5/29/16b021a4682f916a~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp) 从上图看到了什么？

    当浏览器对页面进行渲染时， 会根据基础盒模型（css basic box model） 将所有元素化成一个个矩形的盒子， 这些盒子的外观， 由css决定。
    写一段代码， 让我们看到这些盒子
    document.querySelectorAll('*').forEach(e => {
        e.style.border = '1px solid';
    });

- 视觉格式化模型(visual formatting model)
    CSS 的视觉格式化模型(visual formatting model) 是根据 基础盒模型(CSS basic box model) 将 文档(doucment) 中的元素转换一个个盒子的实际算法。

    每个盒子的布局由以下因素决定
        - 盒子的尺寸
        - 盒子的类型：行内盒子 (inline)、块级盒子 (block-level)
        - 定位：正常流、浮动、绝对定位
        - 文档树中当前盒子的子元素 或 兄弟元素
        - 视口(viewport) 的尺寸 和位置   换行
        - 盒子内部图片的尺寸   撑起来
        - 其他某些外部因素

- 盒子的生成
    盒子的生成是 CSS视觉格式化模型 的一部分，用于从文档元素生成盒子。盒子的类型取决于CSS display 属性。
    格式化上下文(formatting context) 是定义 盒子环境 的规则，不同 格式化上下文(formatting context) 下的盒子有不同的表现。
    1. 块级元素
        当元素的display 为 block、list-item 或 table 时，它就是块级元素。
    2. 块级盒子
        - 块级盒子用于描述它与父、兄弟元素之间的关系。
        - 每个块级盒子都会参与 块格式化上下文（block formatting context） 的创建。
        - 每个块级元素都会至少生成一个块级盒子，即主块级盒子（principal block-level box）
        - 主块级盒子包含由后代元素生成的盒子以及内容，同时它也会参与定位方案。
        - 一个同时是块容器盒子的块级盒子称为块盒子

    3. 行内元素
        当元素的display 为 inline、inline-block 或 inline-table 时，它就是行内级元素。
        显示时可以与其他行内级内容一起显示为多行。
    4. 行内盒子
        行内级元素会生成行内级盒子，该盒子同时会参与行内格式化上下文（inline formatting context）的创建。
    5. 行盒子
        行盒子由行内格式化上下文创建，用来显示一行文本。在块盒子内部，行盒子总是从块盒子的一边延伸到另一边（译注：即占据整个块盒子的宽度）。当有浮动元素时，行盒子会从向左浮动的元素的右边缘延伸到向右浮动的元素的左边缘。



- todo continue  
    https://github.com/zuopf769/notebook/blob/master/fe/BFC%E5%8E%9F%E7%90%86%E5%89%96%E6%9E%90/README.md
    