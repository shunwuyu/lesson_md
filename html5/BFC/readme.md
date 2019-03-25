# BFC是个什么概念
Block Formatting Context （块级格式化上下文）

#inline-block间隙问题
英文单词之间会有空格，而中文没有，当将元素设为inline-block后，具有inline的属性，所有的空格、换行或回车都会被视为一个空格占位字符，于是就产生了。
.parent{
  font-size: 0;
}

#边距叠加
详细分档：https://segmentfault.com/a/1190000010346113



#BFC的原理（BFC的渲染规则）
1. 垂直方向的外边距会发生外边距折叠。（包括父子元素，兄弟元素）水平方向的外边距不存在叠加的情况（因为水平方向的不存在块级元素）效果：margin.html
2. BFC的区域不会与浮动元素的box重叠 效果：folat.html
3. BFC在页面上是一个独立的容器，最显著的效果就是建立一个隔离的空间，外面的元素不会影响BFC容器里面的元素，反过来里面的元素也不会影响外面的元素
4. 计算BFC高度的时候浮动元素也会参与高度的计算 （清除浮动用的就是这个效果）
#/////////////////////////////////////////////


#创建BFC的条件
1. folat的值不为none；
2. 绝对定位元素 (元素的position为absolute或fixed)；
3. 行内块inline-blocks(元素的 display: inline-block)；
4. 表格单元格(元素的display: table-cell，HTML表格单元格默认属性)；
5. overflow的值不为visible的元素；
6. 弹性盒 flex boxes (元素的display: flex或inline-flex)；