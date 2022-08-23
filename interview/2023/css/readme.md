[](https://juejin.cn/post/6905539198107942919#heading-54)
- css 画形状
    wh 0
- 画一条0.5px的线
    transform: scale(0.5,0.5);
- position的属性有哪些，区别是什么
    - absolute  
        生成绝对定位的元素，相对于static定位以外的一个父元素进行定位。元素的位置通过left、top、right、bottom属性进行规定。
    - relative
        生成相对定位的元素，相对于其原来的位置进行定位。元素的位置通过left、top、right、bottom属性进行规定。
    - fixed
        生成绝对定位的元素，指定元素相对于屏幕视⼝（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变，⽐如回到顶部的按钮⼀般都是⽤此定位⽅式。
    - static
        默认值，没有定位，元素出现在正常的文档流中，会忽略 top, bottom, left, right 或者 z-index 声明，块级元素从上往下纵向排布，⾏级元素从左向右排列。

- display、float、position的关系
    首先判断display属性是否为none，如果为none，则position和float属性的值不影响元素最后的表现。
    然后判断position的值是否为absolute或者fixed，如果是，则float属性失效，并且display的值应该被设置为table或者block，具体转换需要看初始转换值。
    如果position的值不为absolute或者fixed，则判断float属性的值是否为none，如果不是，则display的值则按上面的规则转换。注意，如果position的值为relative并且float属性的值存在，则relative相对于浮动后的最终位置定位。

    如果float的值为none，则判断元素是否为根元素，如果是根元素则display属性按照上面的规则转换，如果不是，则保持指定的display属性值不变。

    可以把它看作是一个类似优先级的机制，"position:absolute"和"position:fixed"优先级最高，有它存在的时候，浮动不起作用，'display'的值也需要调整；其次，元素的'float'特性的值不是"none"的时候或者它是根元素的时候，调整'display'的值；最后，非根元素，并且非浮动元素，并且非绝对定位的元素，'display'特性值同设置值

absolute与fixed共同点与不同点
    改变行内元素的呈现方式，将display置为inline-block  
    使元素脱离普通文档流，不再占据文档物理空间
    覆盖非定位文档元素

不同点：
    - abuselute与fixed的根元素不同，abuselute的根元素可以设置，fixed根元素是浏览器。
    - 在有滚动条的页面中，absolute会跟着父元素进行移动，fixed固定在页面的具体位置。

- 对 sticky 定位的理解
sticky 英文字面意思是粘贴，所以可以把它称之为粘性定位。语法：position: sticky; 基于用户的滚动位置来定位。
粘性定位的元素是依赖于用户的滚动，在 position:relative 与 position:fixed 定位之间切换。它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。这个特定阈值指的是 top, right, bottom 或 left 之一，换言之，指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。

3. 对BFC的理解，如何创建BFC
    先来看两个相关的概念：
    Box: Box 是 CSS 布局的对象和基本单位，⼀个⻚⾯是由很多个 Box 组成的，这个Box就是我们所说的盒模型。
    Formatting context：块级上下⽂格式化，它是⻚⾯中的⼀块渲染区域，并且有⼀套渲染规则，它决定了其⼦元素将如何定位，以及和其他元素的关系和相互作⽤。

    块格式化上下文（Block Formatting Context，BFC）是Web页面的可视化CSS渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。

    通俗来讲：BFC是一个独立的布局环境，可以理解为一个容器，在这个容器中按照一定规则进行物品摆放，并且不会影响其它环境中的物品。如果一个元素符合触发BFC的条件，则BFC中的元素布局不受外部影响。

    创建BFC的条件：

根元素：body；
元素设置浮动：float 除 none 以外的值；
元素设置绝对定位：position (absolute、fixed)；
display 值为：inline-block、table-cell、table-caption、flex等；
overflow 值为：hidden、auto、scroll；

BFC的特点：

垂直方向上，自上而下排列，和文档流的排列方式一致。
在BFC中上下相邻的两个容器的margin会重叠
计算BFC的高度时，需要计算浮动元素的高度
BFC区域不会与浮动的容器发生重叠
BFC是独立的容器，容器内部元素不会影响外部元素
每个元素的左margin值和容器的左border相接触

解决margin的重叠问题：由于BFC是一个独立的区域，内部的元素和外部的元素互不影响，将两个元素变为两个BFC，就解决了margin重叠的问题。
解决高度塌陷的问题：在对子元素设置浮动后，父元素会发生高度塌陷，也就是父元素的高度变为0。解决这个问题，只需要把父元素变成一个BFC。常用的办法是给父元素设置overflow:hidden。
创建自适应两栏布局：可以用来创建自适应两栏布局：左边的宽度固定，右边的宽度自适应。

