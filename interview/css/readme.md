[source](https://juejin.im/post/5ee0cf335188254ec9505381#heading-102)

![](https://img2018.cnblogs.com/blog/1414709/201811/1414709-20181115192855608-1989140804.png)

## 什么是回流（重排）和重绘以及其区别？
- 回流（重排），reflow:当render tree中的一部分（或全部）因为元素的规模尺寸，布局，隐藏等改变时而需要重新构建  
- 重绘 repaint 需要更新属性，而这些属性只影响元素的外观，风格，而不会影响布局时，称其为重绘，例如颜色改变等

每个页面至少需要引发一次重排+重绘，而且重排（回流）一定会引发重绘。
  触发重排（回流）的条件
  - 增加或者删除可见的dom元素
  - 元素的位置发生了改变
  - 元素的尺寸发生了改变，例如边距，宽高等几何属性改变
  - 内容改变，例如图片大小，字体大小改变等
  - 页面渲染初始化 一次重排+重绘，而且重排（回流）一定会引发重绘
  - 浏览器窗口尺寸改变，例如resize事件发生时等  仿抖

缓存布局信息
index.html

## position 跟 display、overflow、float 这些特性相互叠加后会怎么样？
- display属性规定元素应该生成的框的类型；
- position属性规定元素的定位类型
- float属性是一种布局方式，定义元素往哪个方向浮动
叠加结果 position的值-- absolute/fixed优先级最高
float不起作用，display值需要调整
float或者absolute定位的元素，只是块元素或者表格

##  BFC、IFC、GFC、FFC是什么
- Block formatting context(BFC)--块级格式化上下文
- Inline formatting context(IFC) 内联格式化上下文
- Crid formatting context(GFC) 网格布局格式化上下文
- Flex formatting context(FFC) 自适应格式化上下文