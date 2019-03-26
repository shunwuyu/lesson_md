## 怎样从 bootStrap 文档里 复制 粘贴
- bootStrap html css js 框架，twitter 开源，响应式，各种屏幕，你家里的电视，小到手机，  
## step
- class="container" 引入媒体查询 知道 bootstrap 用了媒体查询 不会细讲   
  媒体查询技术本质就是检测设备不同的尺寸来应用不同的样式
  class="container-fluid"
- bootStrap 设备 breakPoint 拖动以查看
  截图 截断 标注说明
  ```css
  // Extra small devices (portrait phones, less than 576px)
  // No media query since this is the default in Bootstrap
  // Small devices ( 576px and up)
  @media (min-width: 576px) { ... }
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) { ... }
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) { ... }
  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) { ... }
  ```
- row 行
  栅格系统 12 份
  
- row 列
  col-4
  怎么居中
  offset
  引出居中 
- 引入 flex 的水平 垂直居中

## dom 节点
dom 将任何 html 文档 描绘成一个由多层节点构成的结构，节点分为几种不同的类型。
- 节点类型  
html 元素 元素节点 1  
文本节点 text 类型 3  
文档类型 文档节点 9  
注释 注释节点 8  
... 12种  

- 元素 类型  以及操作  
nodeType === 1  
创建元素   
createElement

- text 类型  以及操作  
nodeType === 3  
创建元素   
createTextNode

- 节点关系
  firstChild
  lastChild
  parentNode
  nextSibling
  previousSibling
- 操作节点
  appendChild
  insertBefore
