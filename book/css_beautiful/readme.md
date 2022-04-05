https://juejin.cn/post/6982363593241002014

[盒模型](https://juejin.cn/book/6850413616484040711/section/6850413616559685645)

- ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eba3f251677348ce975be5741f936bbe~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)
    不要小看一个人，TA虽然穿着短裤拖鞋，背后可能是拥有10栋出租楼的包租公或包租婆

- CSS中如包租公这样重要的概念是？
    selector, rules 语法
    基于盒模型

- 何为盒模型
    盒模型，是一种网页设计思维模型，它把文档节点看成一个盒子。
    理解这个重要的概念才能更好地排版页面和布局页面

- ![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e08dc7c450e4241a973605176a1a280~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)
    送礼物如此， 做页面如此
    在HTML文档解析过程中，每个节点都会被描述为一个盒模型，然后一个盒子套进另一个盒子中，再依据各个节点对应的CSS规则，最后渲染成一个井井有条的页面。一个完整的页面就像以下的惊喜爆炸礼盒，层层嵌套，直到最后一层出现惊喜为止。

- 到哪里看盒模型？
    computed
    由及部分组成？
    box = margin + border + padding + content

- content 和其他及部分有什么区别？
    不是属性
- 其余属性有什么共同点？    
    都包含left right top bottom等扩展属性
    1. margin：边距，外部透明区域，负责隔离相邻盒子
    2. 边框，内部着色区域，负责隔离边距和填充，包含width、style、color三个扩展属性
    3. 填充，内部着色区域，负责扩展盒子内部尺寸
    4. content：内容，以文本或节点存在的占用位置
- demo1  设置background-clor 会覆盖到？  
    只覆盖到padding 
    块级元素
    body 默认 
    *  margin:0  padding:0
- 举一个现实世界的例子， 如何理解盒模型？
    两个快递包裹间的距离就是margin，快递包裹的纸皮就是border，打开快递包裹，填充物料就是padding，把填充物料打开看到了你的物品，那就是content
- 由于历史原因， 盒模型分为两种类型， 标准盒模型和怪异盒模型
    1. 标准盒模型
        盒子总宽度/高度=width/height+padding+border+margin
    2. 怪异盒模型 IE盒子模型
        盒子总宽度/高度=width/height + margin = 内容区宽度/高度 + padding + border + margin;
    demo2.html
    box-sizing: content-box | border-box;
    - content-box   w/h  设置的是内容  将采取标准模式进行解析计算  
    - border-box   w/h   设置的是 border 以内 没得分了 将采取怪异模式解析计算

- 你会想用哪种？  demo3.html
    css inherit  box-sizing 不会继承

- 视觉格式化模型
    与display 属性相关
    视觉格式化模型指在视觉媒体上处理和显示文档而使用的计算规则。它是一种CSS机制，由大量CSS规范组成，规定了节点在页面中的排版。

    1. 块级元素
        block(div)、list-item(li)、table、flex或grid时，该节点被标记为块级元素。
        有什么表现？
            默认宽度为100%
            在垂直方向上按顺序放置
            同时参与块格式化上下文
        - 每个块级元素都至少生成一个块级盒，或一个块容器盒
            块级盒， 它与兄弟节点间的表现方式
            块容器盒描述它与子节点间的表现方式
    2. 行内元素
        display inline、inline-block、inline-table、inline-flex或inline-grid  
        行内元素默认宽度为auto，在水平方向上按顺序放置，同时参与行内格式化上下文。
        