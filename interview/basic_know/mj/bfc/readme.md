[source](https://juejin.cn/post/6844904115428917255#heading-6)

- demo7.html
    之前处于的BFC 环境是   html 根下
    两个不同BFC环境的盒子，他们两的margin才不会重叠

- BFC 我们会做什么准备
    1. what  什么是BFC
    2. when  什么条件下会触发？
    3. how   应用场景有哪些？怎么用

- 清楚浮动， 不单纯， 顺带答出BFC
    就算他不想让你答出，你也要自己主动答出BFC，
    这样才能在众多面试者中脱颖而出嘛！嘿嘿！
    1. demo1 ![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/118f128d230b4f6991704c441a25f2f5~tplv-k3u1fbpfcp-watermark.awebp)
        浮动float demo1/index.html 
        原因
        脱离文档流 ?   何为？
        老子不想干了，世界那么大，我想去看看 
        脱离文档流同理，一个元素一旦浮动，就会脱离文档流，那么他的父元素也管不了他了 父元素高度坍塌的现象
        说一说你平时如何清除浮动的
        1. 将父级也设置成浮动 弊大于利  爷爷级的高度坍塌demo1.html
        2. 给父级增加定位absolute
            position:absolute也会脱离文档流啊，影响了整体布局
        3. 给父级设置overflow:hidden
            不脱离文档流
            缺点？当文本过长，且包含过长英文时，会出现英文文本被隐藏的情况
        4. 给父级设置对应的高度
            缺点 如果浮动元素是定宽或定高的，那还好，如果是不定宽的，那这种方式就很不灵活了，有可能今天是100px，明天是200px，后天是300px，那你不是得累死？
        5. 末尾增加元素进行clear
            clear 有几个值？
                left  左侧不允许浮动元素
                right 右侧不允许浮动元素
                both  左右两侧不允许浮动元素
                none  默认值允许
                inherit 从父元素继承
            demo5
            迫使了他往下移动，进而撑开了父级盒子的高度
            缺点
                很明显，增加了一个div标签，增加了页面的渲染负担（虽然我觉得应该影响不大吧）
        6.  给父级添加伪元素进行clear
            伪元素代替了上面的div标签  
            最优解   demo6

- 什么是BFC
    Block Formatting Context，BFC
    属于 Web页面的可视CSS渲染的一部分
    是块盒子的布局过程发生的区域(html根， 里面的要自己加)，也是浮动元素与其他元素交互的区域 （不重叠）
    规则：
    1. 生成BFC元素的子元素会一个接一个的放置
        内部的Box会在垂直方向上一个接一个的放置
    2. 垂直方向上他们的起点是一个包含块的顶部，两个相邻子元素之间的垂直距离取决于元素的margin特性。在BFC-- 中相邻的块级元素的外边距会折叠(Mastering margin collapsing)。
        属于同一个BFC的两个相邻Box的margin会发生折叠，不同BFC不会发生折叠。
    3. 生成BFC元素的子元素中，每一个子元素左外边距与包含块的左边界相接触（对于从右到左的格式化，右外边距接触右边界），即使浮动元素也是如此（尽管子元素的内容区域会由于浮动而压缩），除非这个子元素也创建了一个新的BFC（如它自身也是一个浮动元素）
        每个元素的左外边距与包含块的左边界相接触（从左向右），即使浮动元素也是如此。
        而position为absolute的元素可以超出他的包含块边界
        BFC的区域不会与float的元素区域重叠
        计算BFC的高度时，浮动子元素也参与计算

- 触发条件
    - 根元素，即HTML标签
    - 浮动元素：float值为left、right
    - overflow值不为 visible，为 auto、scroll、hidden
    - display值为 inline-block、table-cell、table-caption、table、inline-table、flex、inline-flex、- - grid、inline-grid   没有block 
    - 定位元素  position值为 absolute、fixed

- 解决margin重叠问题
    demo7

- 浮动元素与BFC盒子不重叠
    demo8
    因为红色盒子浮动脱离文档流，导致绿色盒子向前推进，导致红色盒子盖住了绿色盒子
    float盒子与BFC盒子不重叠
    所以我们只需要把绿色盒子设置为BFC盒子就行
    overflow:hidden // 触发BFC


