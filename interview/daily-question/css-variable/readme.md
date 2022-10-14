https://github.com/shfshanyue/Daily-Question/issues/185

1. stylus 
2. css in js
3. css variable


https://www.runoob.com/try/try.php?filename=trycss3_gradient-radial


4.html
clear:both
表明after伪元素左右两侧均不允许浮动元素, 
顺带撑起了.wrap父元素的高度，这样就相当清除了浮动了，解决了外层容器高度坍塌的问题。
clear属性只能在块级元素上其作用，这就是清除浮动样式中display:block的作用。
KFC,哪里听过BFC，

BFC的全称是 Block Formatting Contexts。
Formatting Contexts是页面中的一块渲染区域  一套渲染规则
子元素将如何定位，以及和其它元素的关系和相互作用。说白了就是一个决定如何渲染元素的容器。
1、内部的块级元素会在垂直方向，一个接一个地放置。
2、块级元素垂直方向的距离由margin决定。属于同一个BFC的两个相邻块级元素的margin会发生重叠。
3、对于从左往右的格式化，每个元素（块级元素与行内元素）的左边缘，与包含块的左边缘相接触，(对于从右往左的格式化则相反)。即使包含块中的元素存在浮动也是如此，除非其中元素再生成一个BFC。
4、BFC的区域不会与浮动元素重叠。
5、BFC是一个隔离的独立容器，容器里面的子元素和外面的元素互不影响。
6、计算BFC容器的高度时，浮动元素也参与计算。

FFC
1、FFC的概念
  FFC的全称是Flex formatting contexts，弹性盒模型。
2、FFC的生成条件
  父级元素设置display:flex或者`display:inline-flex
  float、clear和vertical-align

经典圣杯布局
  ffc3

双飞翼，这是很久以前的淘宝提出的一种三栏布局优化方案淘宝
浏览器渲染引擎在构建和渲染渲染树是异步的  可优先渲染

当然，正常情况下是没有问题的，但是特殊情况下就会暴露此方案的弊端，如果将浏览器无线变窄，「圣杯」将会「破碎」掉。如图，当 main 部分的宽小于 left 部分时就会发生布局混乱

双飞翼布局表面上看是很优秀，但是细细想来，为什么要多加一层 dom 树节点，这岂不是增加了 css 样式规则表和 dom 树合并成布局树的计算量吗


https://juejin.im/post/5a09570c6fb9a045167caf21#heading-5

圣杯	结构简单，无多余 dom 层	中间部分宽度小于左侧时布局混乱
双飞翼	支持各种宽高变化，通用性强	dom 结构多余层，增加渲染树生成的计算量
绝对定位	结构简单，且无需清理浮动	两侧高度无法支撑总高度