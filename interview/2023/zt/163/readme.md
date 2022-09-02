- html 常用元素分类
    3类
    - 块级元素（block）
        div，p，form，hr，table，h1…h6，dl，dt，dd，ul，ol
        - 默认情况下都会独占一行，按照从上到下的顺序进行流式布局
        - 块级元素可以直接设置宽度和高度，元素在不设置宽度的情况下，它的宽度是父元素的100%
        - 遵循盒模型的所有规则，一般作为其他元素的容器
    - 行内元素（inline）
        a，span，var，label，i，strong，b，em
        - 和其他元素都在一行上
        - 元素的高度、宽度及顶部和底部边距不能设置
        - 元素的宽度为它所包含的文字或图片的宽度，不能改变
    - 行内块元素（inline-block）有什么?
        input，img
        - 和其他元素都在一行上
        - 元素的高度、宽度及顶部和底部边距都可以直接设置
        - 有个bug   

- 行内元素变成块级元素的几种方法
    1. 直接使用display:block;（display:inline-block转换为行内块）使元素的属性改变
    2. float
    3. 使用定位：position：fixed（固定定位）/absolute（绝对定位）
    4. 使用弹性盒，让父元素变成弹性盒。

- 行内块级的bug
    在页面布局中，我们需要将一些元素显示在同一行，其中一种方法就是设置display：inline-block，但是在这些同行显示的inline-block元素之间的会出现空隙。
    原因：
        元素被当成行内元素排版时，元素之间的空白符（空格、回车换行等）都会被浏览器处理，根据white-space的处理方式（默认是normal，空白会被浏览器忽略），HTML代码中的回车换行被转成一个空白符，在字体不为0 的情况下，空白符占据一定的宽度，所以inline-block元素之间就出现了空隙。
    解决方法：
        删除HTML中元素之间的空白符
        inline-block的父元素设置font-size为0，子元素重新设置字体大小。
        使用负的margin（空隙的是由上下文的字体大小带来的，每个浏览器的都不一样）
        使用letter-spacing/word-spacing设置负值
        inline-block设置浮动。（需要清除浮动）

- css 盒模型
    1. 如图
        由内到外分别由内容（content）即蓝色部分，内边距（padding）即绿色部分，边框（border）即浅黄色部分，外边距（margin）即深黄色四大部分组成，
        - 行内元素不会将水平padding大小计算在盒模型内，垂直方向不受影响，块级元素padding各个方向都会计算在内
        - 一些标签元素会内置padding大小，如果需要更改则需要利用优先级进行覆盖(ol, ul)
        - padding不支持负值，但是可以设置百分比，且四个方向的百分比值都是根据宽度计算。
    用处
        在我的经验里padding经常用于增加点击区域的大小，如果内容过小，用户点击需要点击多次，而了布局也不能更改，内容是由字体大小决定的，所以可以通过改变内边距大小扩大可点击区域，增强用户体验。

        我们还可以利用padding百分比值的特性设置一些特定比例的内容，如2:4的头像。

- 边框border是内边距与外边距之间的夹层
    - 好玩的边框
        绘制三角形，当盒子的高度和宽度都为0的时候就会出现下面的形状

    
- 外边距
    外边距margin定义了元素周围的空间大小，具有四个方向，与padding数值不同的是它可以使用负值，外边距的

    外边距最需要注意的是其外边距合并的问题，相邻的元素之间的外边距大小遵循一个规则：“正正按大，正负相加，负负最小”

    margin最大的使用场景是标题，文本，图片等信息的间隔，让整体的信息流显得很宽阔，

盒模型分类
    有两种盒模型，其规则各不同，分别为content-box与border-box
    可以通过box-sizing来设置，其中默认值为content-box

    content-box中padding和border不被包含在定义的width和height之内，所以其元素的宽度与高度等于设定的高度与宽度与对应方向的padding与border的和
    .box {
    width:100px;
    padding:20px;
    border:1px solid black;
}
复制代码
其宽度为：100px+(20px+1px)*2 = 142px

- border-box
    border-box中padding和border被包含在定义的width和height之内，所以其宽度和高度取决于设定的宽度与高度
    .box {
        box-sizing:border-box;
        width:100px;
        padding:20px;
        border:1px solid black;
    }
    其宽度为：100px

- transform translate 相对谁移动
    自身
- float 高度塌陷

