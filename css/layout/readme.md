[source](https://juejin.cn/post/6941206439624966152#heading-14)

- 继承性
    ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f8bd1604b143463eb121c1f46d71c652~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)
    上图表示css的什么特性？ 继承性
    在 CSS 中有一个很重要的特性就是子元素会继承父元素对应属性计算后的值
    3.html
    为什么需要继承呢？
    如果 CSS 中不存在继承性，那么我们就需要为不同文本的标签都设置一下 color，这样一来的后果就是 CSS 的文件大小就会无限增大。

    那是所有属性都默认存在继承吗？  怎么区分呢？ 3.html
    一定是那些不会影响到页面布局的属性
    能讲一些吗?
    - 字体相关：font-family、font-style、font-size、font-weight
    - 文本相关：text-align、text-indent、text-decoration、text-shadow、letter-spacing、word-spacing、white-space、line-height、color
    3.html
    - 列表相关：list-style、list-style-image、list-style-type、list-style-position 等
    - 其他属性：visibility、cursor 等

对于其他默认不继承的属性也可以通过以下几个属性值来控制继承行为
    inherit：继承父元素对应属性的计算值
    initial：应用该属性的默认值，比如 color 的默认值是 #000


- 文档流
    1. 何为文档流？ 
        文档流就像水一样，能够自适应所在的容器
        - 块级元素默认会占满整行，所以多个块级盒子之间是从上到下排列的；
        - 内联元素默认会在一行里一列一列的排布，当一行放不下的时候，会自动切换到下一行继续按照列排布；
        为了文档流， 块级元素和行内元素
        但列布局， 行类元素有点弱， 于是...
    2. 如何脱离文档流呢
        脱流文档流指节点脱流正常文档流后，在正常文档流中的其他节点将忽略该节点并填补其原先空间
        后果？
        文档一旦脱流，计算其父节点高度时不会将其高度纳入，脱流节点不占据空间。
        有什么方式让元素脱离文档流？
            - 使用浮动（float）会将元素脱离文档流
                移动到容器左/右（左浮，右浮）侧边界或者是另一个浮动元素旁边
            - 使用绝对定位（position: absolute;）或者固定定位（position: fixed;）也会使得元素脱离文档流，且空出来的位置将自动被后续节点填补。
    
- 盒模型
    如何定义?
    任何元素都可以看成是一个盒子
    由及部分组成？
    内容（content）、内边距（padding）、边框（border）和外边距（margin）
    有几种盒模型？
    标准盒模型（W3C ）和 IE（IExplore ） 盒模型
    标准盒模型认为：盒子的实际尺寸 = 内容（设置的宽/高） + 内边距 + 边框
    IE 盒模型认为：盒子的实际尺寸 = 设置的宽/高 = 内容 + 内边距 + 边框
    ```
    .box {
        width: 200px;
        height: 200px;
        padding: 10px;
        border: 1px solid #eee;
        margin: 10px;
    }
    ```
    以上代码
    ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c4b9dddb310540f78a19ea0f7da92938~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)
    ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/302fcd74518b44b4adfe50b02dc3aed3~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)
    哪个是？
    IE盒模型内容的宽度要做减法....

    js 中一切皆对象， 
    css中一切皆？  盒子
    盒子应该怎么样放置到页面中去？ 
    视觉格式化模型   Visual formatting model
    用来处理和在视觉媒体上显示文档时使用的计算规则（你看到的是怎么算出来的）
    简单来理解就是规定这些盒子应该怎么样放置到页面中去，这个模型在计算的时候会依赖到很多的因素， 你觉得会是哪些呢？
    比如：盒子尺寸（box-sizing）、盒子类型、定位方案（是浮动还是定位）、兄弟元素（float 影响父拿不到高度， 兄弟行内环绕它）或者子元素（flex）以及一些别的因素。

    盒子类型由 什么决定？
    display
    <!-- 值有哪些？ block inline inline-block  list-item、table、flex、grid、inline-table inline-flex inline-grid -->

    两种显示类型
    - outer display type（对外显示）
        决定了该元素本身是如何布局的，即参与何种格式化上下文
        对外显示方面，盒子类型可以分成 2 类：block-level box（块级盒子） 和 inline-level box（行内级盒子）。
        列出都有哪些块级和行内级盒子?
        - 块级盒子：display 为 block、list-item、table、flex、grid等；
        - 行内级盒子：display 为 inline、inline-block、inline-table inline-flex inline-grid
        所有块级盒子都会参与 BFC 呈现垂直排列
        而所有行内级盒子都参会 IFC，呈现水平排列
        block
        占满一行，默认继承父元素的宽度；多个块元素将从上到下进行排列；
        设置 width/height 将会生效；
        设置 padding 和 margin 将会生效；

        inline   test.html
        不会占满一行，宽度随着内容而变化；多个 inline 元素将按照从左到右的顺序在一行里排列显示，如果一行显示不下，则自动换行；
        设置 width/height 将不会生效；
        设置竖直方向上的 padding 和 margin 将不会生效；

        inline-block
        是行内块元素，不单独占满一行，可以看成是能够在一行里进行左右排列的块元素；
        设置 width/height 将会生效；
        设置 padding 和 margin 将会生效；


    - inner display type（对内显示）
        其实就相当于把该元素当成了容器，规定了其内部子元素是如何布局的，参与何种格式化上下文；  f'lex
        对内方面，其实就是把元素当成了容器，里面包裹着文本或者其他子元素。container box 的类型依据 display 的值不同，分为 4 种：
        块级格式化上下文
        行内格式化上下文
        block container：建立 BFC 或者 IFC；
        弹性格式化上下文
        flex container：建立 FFC；
        格栅格式化上下文
        grid container：建立 GFC;
        它们直接影响了网页布局，所以需要深入理解其原理

格式化上下文 Formatting Context
页面中的一块渲染区域 规定了渲染区域内部的子元素
是如何排版以及相互作用的

-   BFC
    块格式化上下文，它是一个独立的渲染区域，只有块级盒子参与，它规定了内部的块级盒子如何布局，并且与这个区域外部毫不相干。
    块级盒子和块级格式化上下文不是一个东西

    - html, body 是最大的BFC 
    ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4a73e2276d8b41f0a905361f151157e2~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)
    第一条原则

    4.html
    - 内部的盒子会在垂直方向，一个接一个地放置；   
    - 盒子垂直方向的距离由 margin 决定，属于同一个 BFC 的两个相邻盒子的 margin 会发生重叠；
        为元素包裹一个盒子形成一个完全独立的空间，做到里面元素不受外面布局影响
    - 每个元素的 margin 的左边，与包含块 border 的左边相接触(对于从左往右的格式化，否则相反)，即使存在浮动也是如此；5.html
    - BFC 的区域不会与 float 盒子重叠；  5.html
    - BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
    - 计算 BFC 的高度时，浮动元素也参与计算。6.html

- 如何创建 BFC？
    1. 根元素：html
    2. 非溢出的可见元素：overflow 不为 visible
    3. 设置浮动：float 属性不为 none
    4. 设置定位：position 为 absolute 或 fixed
    5. 定义成块级的非块级元素：display: inline-block/table-cell/table-caption/flex/inline-flex/grid/inline-grid

IFC
    IFC 的形成条件非常简单，块级元素中仅包含内联级别元素，需要注意的是当IFC中有块级元素插入时，会产生两个匿名块将父元素分割开来，产生两个 IFC。
    7.html

