[source](https://juejin.cn/book/6844733712102326279/section/6844733712152657928)

- ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/2/8/1617562903ac620a~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)
    这是什么?
    美女？
    PC 站点的设计稿 

- 跟我们有什么关系  
    该能力是前端开发工程师的立业之本，
    自然也是「H5 开发」最最基础的要求。

- 基础页面开发 能力可以定义为

    依据设计稿（PSD 或 Sketch）及交互要求，利用 JavaScript、HTML 和 CSS 等技术将设计稿高保真转换为网页的能力。

- 你媳妇在哪？

    我们会从视觉设计师手中拿到 PSD 设计稿，然后根据设计稿及设计师提供的相关视觉规范说明，一步步将其还原成真实网页

- 设计稿审查 
    不要急于动手
    1. 了解设计稿的排版布局及内容构成
        ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/2/8/1617564839c4cd7c~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)
        - 跨页面可复用组件
            1. Header 顶部导航
            2. Footer 底部信息
        - 当前页面可复用组件
            1. Billboard - 信息公告牌
            2. Ad-board - 商品广告位
        
    2. 编写页面骨骼框架
        打个比方：
            页面想象成一套房子
            HTML 可以决定网页的框架结构
                房子有几间房，各个区域的用途是什么
            CSS 可以决定网页的样式
                房子该如何装修，房间具体的尺寸是多少
            JavaScript 则可以决定网页的具体交互和功能的实现
        
- 盒模型
    HTML 文档中的每个元素都可以被描绘成矩形盒子
    这些矩形盒子通过一个模型来描述其占用的空间，这个模型称为标准盒模型。

    盒模型通过四个边界来呈现元素的大小：margin（外边距）、border（边框）、padding（内边距）、content（内容区域）

    ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/2/8/16175749f863d31f~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

    - 盒子的总宽度 = ？
        盒子总宽度 = width + padding + border + margin
        demo1.html  标准盒模型
        元素宽度 = width + padding + border
        盒子总宽度 = 元素宽度 + margin

        - 有什么不好的地方
            我们认为的width, height 希望是整个宽高， 
        - 如何让开发省心？
            border-box 我们会在样式重置的规则中，将盒模型设置成 border-box 
            demo1.html  
            ```
            *, *:before, *:after {
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
            }
            ```
            border-box = width
            ![border-box后的好处](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/2/8/1617578eb500364b~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)
    
    - 布局
        我们可以把网页理解成是由一个个盒子排列组合而成的，那么盒子之间又是怎么排列布局的呢
        - 普通文档流布局  流动起来
            块级元素 display: block 
            行内元素（display: inline）
            layout.html
            怎么让排在一行？
        - 浮动布局  会脱离普通文档流  
            layout.html
            加行文字  清除浮动  作为作业.....
        - 绝对布局
            position: absolute 属性进行绝对布局，使用绝对布局的元素会脱离文档流，其定位是参考祖先元素中 position 为非 static 值的第一个元素。
            https://www.w3school.com.cn/tiy/t.asp?f=eg_csse_position_absolute
        
    demo2.html

    hello, 大佬

    今天下午可以喊你连麦吗？
    Javascript 语言精粹看的如何？
    算法开始看了吗？


