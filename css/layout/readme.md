[source](https://juejin.cn/post/6941206439624966152#heading-14)

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

    视觉格式化模型   Visual formatting model
    用来处理和在视觉媒体上显示文档时使用的计算规则
    简单来理解就是规定这些盒子应该怎么样放置到页面中去，这个模型在计算的时候会依赖到很多的因素，比如：盒子尺寸、盒子类型、定位方案（是浮动还是定位）、兄弟元素或者子元素以及一些别的因素。

    盒子类型由 什么决定？
    display
    两种显示类型
    - outer display type（对外显示）
        决定了该元素本身是如何布局的，即参与何种格式化上下文
        对外显示方面，盒子类型可以分成 2 类：block-level box（块级盒子） 和 inline-level box（行内级盒子）。
        列出都有哪些块级和行内级盒子?
        - 块级盒子：display 为 block、list-item、table、flex、grid等；
        - 行内级盒子：display 为 inline、inline-block、inline-table
        所有块级盒子都会参与 BFC 呈现垂直排列
        而所有行内级盒子都参会 IFC，呈现水平排列
        block

        占满一行，默认继承父元素的宽度；多个块元素将从上到下进行排列；
        设置 width/height 将会生效；
        设置 padding 和 margin 将会生效；

        inline

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
        block container：建立 BFC 或者 IFC；
        flex container：建立 FFC；
        grid container：建立 GFC;
        
    



