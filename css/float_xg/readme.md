[CSS float相关详解](https://juejin.cn/post/6844903519040831496)

- 要达到这样的效果， 怎么办？
    浮动 
- 看这个例子， 讲讲浮动
    1.html
    - float元素也称为浮动元素，设置了float属性的元素会根据属性值向左或向右浮动
    - 浮动元素会从普通文档流中脱离，但浮动元素影响的不仅是自己
        它会影响周围的元素对齐进行环绕
        相对什么属性来说？  position:absolute  
        浮动没那么的离开文档流？
    就是让block元素无视float元素，让inline元素让流水一样围绕着float元素来实现浮动布局

    img元素设置了float：left之后会脱离文档流而居于左侧存在。而p元素无视img元素的存在，从窗口的左上角开始流入，但是p元素中的文字意识到img元素的存在而环绕图片流入。并且img元素是漂浮在p元素的上层。

- 2.html 块级框 
    不管一个元素是行内元素还是块级元素，如果被设置了浮动，那浮动元素会生成一个块级框，可以设置它的width和height，因此float常常用于制作横向配列的菜单，可以设置大小并且横向排列。
    div2 表达 float有什么效果？
    div元素的宽是100%，一旦让该div浮动起来，立刻会像inline元素一样产生包裹性，宽度会跟随内容自适应。

- 3.html  行内元素
    当span设置float属性后，可以指定width，height值。 同时可以发现，当多个元素指定为float且同时为left/right时，元素是紧挨着排列，行内宽度不够时再换行排列

- 高度塌陷 4.html
    原因是？ 将float属性设置给div2内部的img元素，可以看出div2的高度并没有img元素被撑起来，因此又叫高度崩塌。 因为将img元素设置为浮动元素，所以脱离文档流。因而div2中认为没有元素，所以产生了高度崩塌。 怎么解决？

- 清除浮动 clear属性
    clear : none | left | right | both
    none  :  默认值。允许两边都可以有浮动对象
    left   :  不允许左边有浮动对象
    right  :  不允许右边有浮动对象
    both  :  不允许有浮动对象
    5.html
    对于CSS的清除浮动(clear)，一定要牢记：这个规则只能影响使用清除的元素本身，不能影响其他元素。

- BFC 
    一些元素，如float元素，如position为absolute,inline-block,table-cell或table-caption的元素，以及overflow属性不为visible的元素，它们将会建立一个新的块级格式化上下文(Block Formatting Context),也就是我们所说的BFC。

    BFC也是HTML中的一个盒子（看不见而已），只有满足至少下列条件之一才能形成BFC:
    - float属性不为none.
    - position属性不为static和relative.
    - display属性为下列之一:table-cell,table-caption,inline-block, flex,inline-flex.
    - overflow属性不为visible.
    非常规block inline  流式布局， 非常规规则
    - 内部的Box会在垂直方向，一个接一个地放置。 body 是最大BFC
    - Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
    - 每个元素的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。 
    - BFC的区域不会与float box重叠。
    - BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
    - 计算BFC的高度时，浮动元素也参与计算

    6.html
    在正常情况下，在一个容器内的所有box将会由上至下依次垂直排列，即我们所说的一个元素占一行，并切垂直相邻的距离(即margin)是由各自的margin决定的，而不是两个margin的叠加
    我们会认为p标签之间的margin应该是它们的和(20px),但实际上却是10px.这其实是collapsing margins(外边距坍塌)
    其中flex布局不存在collapsing margins  优秀
    怎么解决？  利用BFC能消除collapsing margins。紧记只有当元素在同一个BFC中时，垂直方向上的margin才会clollpase。如果它们属于不同的BFC，则不会有margin collapse。

    7.html 高度塌陷  2种解决方法
    增加一个div元素，因为是清除元素，会在img元素底部显示，因此会撑起div2高度。

    8.html
