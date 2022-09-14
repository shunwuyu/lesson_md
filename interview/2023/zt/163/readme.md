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

- 左侧固定  右侧自适应  
    四种  2column

- css 污染
    - 组件样式类名污染   styled-components  css  module  css-module-demo
    - BEM 命名规范

- css 之优先级（6大类） 权重（4等级）

    - 第一优先级：无条件优先的属性只需要在属性后面使用！important。它会覆盖页面内任何位置定义的元素样式。
    - 第二优先级：在html中给元素标签加style，即内联样式。该方法会造成css难以管理，所以不推荐使用。
    - 第三优先级：由一个或多个id选择器来定义。例如，#id{margin:0;}会覆盖.classname{margin:3pxl}
    - 第四优先级：由一个或多个类选择器、属性选择器、伪类选择器定义。如.classname{margin:3px}会覆盖div{margin:6px;}
    - 第五优先级：由一个或多个类型选择器定义
    - 通配选择器

- css优先级 的 优先顺序
    行内样式（style="…"）>ID 选择器(#box{…})>类选择器(.con{…})>标签选择器(dic{…})>通用选择器(*{…})

- 权重计算
    UL#NAV LI.ACTIVE A  113 

- 权重 的 4个等级定义
    第一等级：代表内联样式，如style=""，权值为 1000
    第二等级：代表id选择器，如#content，权值为100
    第三等级：代表类，伪类和属性选择器，如.content，权值为10
    第四等级：代表标签选择器和伪元素选择器，如div p，权值为1

- 权重 的 优先顺序
    行内样式（1000）>ID选择器（100）>类选择器（10）>标签选择器（1）>通用选择器（0）

- js 类型
    https://juejin.cn/post/7056029948749807629
    Object.prototype.toString.call('null') === '[object Null]'  
    在JS实现这些子类型时候为它们增加了一个内部属性[[Class]，我们可以通过Object.prototype.toString()进行查看
    Object.prototype.toString.call(Date.now())   // "[object Date]"
    Object.prototype.toString应该只用来区分已经判定了Object的类型：
    toString_demo
    Null和undefined
    在 JavaScript 中有两种表达“无”的方式，那就是使用undefined和null
    - undefined
        如果您创建一个变量并且不对其进行任何设置，它将是undefined
        undefined是已经创建（变量）但尚未定义（给定值）的东西。
        let dog;
        console.log(dog)
        对象的属性也是如此
            let person={  //一个不具有任何属性的person对象
            }
        person.dog  undefined
        为什么？因为person什么都没有。这就是undefined的
        如果在控制台中输入test，您会看到返回的错误消息说*“test is not defined”*，这意味着您没有创建名为test的变量.
        对于我们上面使用的狗示例，我们已经创建了变量，但我们没有设置值。这就是区别。
    - null
        Null 是空值，而 undefined 是尚未设置值的变量。
        let somethingUndefined;
        const somethingNull = null; 您不能在不设置值的情况下使用 const 变量。

        somethingUndefined是未定义的，因为它没有设置值，而somethingNull具有 null 的值，它什么都没有。它们都什么都不是，只是方式不同。

        undefined 表示一个变量自然的、最原始的状态值，而 null 则表示一个变量被人为的设置为空对象，而不是原始状态。所以，在实际使用过程中，为了保证变量所代表的语义，不要对一个变量显式的赋值 undefined，当需要释放一个对象时，直接赋值为 null 即可。

- 类型转换
    隐式转化的过程
    0 + '1' === '01'   // true
    true + true === 2       // true
    false === 0          // false
    false + false === 0  // true
    {} + [] === 0  // true
    [] + {} === 0  // false

    - 深入理解JavaScript的基础类型和引用类型
    - JavaScript的隐式转换内部机制
    - 在社区中谈及相关话题的时候，彰显自己的实力

    JavaScript的类型系统
    JS中一共有6种基础类型：Symbol、Bigint、null、undefined、number、string、boolean；加上Object，JS种一共有八种内置类型。
    typeof操作符去判断内置类型：
    typeof Symbol() === 'symbol'          // true
typeof undefined === 'undefined'      // true
typeof true === 'boolean'             // true
typeof 42 === 'number'                // true
typeof '42' === 'string'              // true
typeof { bar: 42 } === 'object'       // true

// 但还有一个例外
typeof null === 'object'              // t// 这个bug是由于typeof的底层实现，和null的底层表示有关系这里就不展开了

区分Object的子类型

类型之间的强制类型转换
    所有的隐式转换都是基于强制类型转换的，所以我们要搞清楚JS中强制转换是如何运作的

抽象操作ToString
    




