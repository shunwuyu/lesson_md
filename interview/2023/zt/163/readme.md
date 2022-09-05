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


- commonjs  和 es 特点和区别
    - 为什么会有CommonJs和Es Module呢
        1. 早期JS 模块？
            都是通过script标签引入js文件代码 按文件分
            写基本简单需求没有什么问题，但当我们的项目越来越庞大时，我们引入的js文件就会越多，这时就会出现以下问题
            - js文件作用域都是顶层，这会造成变量污染
            - js文件多，变得不好维护
            - js文件依赖问题，稍微不注意顺序引入错，代码全报错（前后依赖）

        2. 为了解决以上问题JavaScript社区出现了CommonJs，CommonJs是一种模块化的规范，包括现在的NodeJs里面也采用了部分CommonJs语法在里面。
            - 解决变量污染问题，每个文件都是独立的作用域，所以不存在变量污染
            - 解决代码维护问题，一个文件里代码非常清晰
            - 解决文件依赖问题，一个文件里可以清楚的看到依赖了那些其它文件

        - CommonJs 基本语法
            CommonJs中使用module.exports导出变量及函数，也可以导出任意类型的值

    - 动态导入怎么做？
        3.js
        CommonJs解决了变量污染，文件依赖等问题，上面我们也介绍了它的基本语法，它可以动态导入(代码发生在运行时)，不可以重复导入。

    - Es Module 基本语法
        在Es Module中导出分为两种，单个导出(export)、默认导出(export default)，单个导出在导入时不像CommonJs一样直接把值全部导入进来了，Es Module中可以导入我想要的值。那么默认导出就是全部直接导入进来，当然Es Module中也可以导出任意类型的值。

- CommonJs和Es Module的区别
    - CommonJs
        - CommonJs可以动态加载语句，代码发生在运行时
        - CommonJs混合导出，还是一种语法，只不过不用声明前面对象而已，当我导出引用对象时之前的导出就被覆盖了
        - CommonJs导出值是拷贝，可以修改导出的值，这在代码出错时，不好排查引起变量污染

    - Es Module
        - Es Module是静态的，不可以动态加载语句，只能声明在该文件的最顶部，代码发生在编译时
            只不过import导入语句和import()函数动态模块加载是两个东西
        - Es Module混合导出，单个导出，默认导出，完全互不影响
        - Es Module导出是引用值之前都存在映射关系，并且值都是可读的，不能修改