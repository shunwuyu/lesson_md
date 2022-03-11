[source](https://juejin.cn/post/6875953466267664398)

- 为什么引入css 不用src?
  不是也把css 资源引入到当前位置吗？
  本质是合作关系  htmlDOM树 + cssom树

1. src 和 href 区别
  - 使用场景
    src指向外部资源的位置，src指向的内容会嵌入到文档中当前标签所在的位置
      - img标签
      - script标签
      - iframe标签  还有呢？
    用来建立当前元素和文档之间的链接
      - link标签
      - a标签

- 区别
  1. 浏览器识别href引用的文档并对该文档进行下载，同时不会停止当前文档的处理，
  2. 当浏览器解析到src引用时，会暂停浏览器的渲染，直到该资源加载完毕，「这也是建议将javascript脚本放在底部的原因」

demo1
1、从属关系区别
  link是XHTML标签，除了加载CSS以外，还可以定义RSS等其他事物，而@import属于CSS范畴，只能加载CSS
  <link data-n-head="ssr" rel="dns-prefetch" href="//api.juejin.cn"> dns 查询优化
2、加载顺序不同
  link引用CSS时，在页面载入的同时进行加载，而@import需要等待网页全部加载完以后才进行加载
3、兼容性不同
  link是XHTML标签，没有兼容性的问题，而@import是在CSS2.1之后提出的，低版本的浏览器并不支持
4. DOM可控性不同
  link支持Javascript控制DOM改变样式，而@import不支持
5. link方式的样式权重高于@import的权重
    

href用于建立当前页面与引用资源之间的关系（链接），而src则会替换当前标签。遇到href，页面会并行加载后续内容；而src则不同，浏览器需要加载完毕src的内容才会继续往下走。