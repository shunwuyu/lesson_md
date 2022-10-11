- 为什么选择学前端
    - 行业的发展必然带来职业的细分, 一年前，我就开始选择方向，最后决定学习前端。
    - js 在es6后，表现出大型语言的能力，而且既可以做前端，又可以做node后端。
    - 比较迷B站，迷罗翔老师，弹幕好有意思，搜索了下是用前端canvas技术做的，就开始从html+css学了
    - 掘金社区挺好的， 什么都有，好上手， 后面自己又在这里写文章，做出来，能看到效果， 挺有意思

- 介绍项目中的难点，怎么解决的？
    结合项目讲， 真实
    项目特色， 换个角度就是难点
    - 开始写css 的时候很乱， 后面使用styled-component 样式组件解决了很多问题
        1. 兼容性问题， 写过rem.js 动态设置html字体大小
            设计稿宽度750px
        2. 全局及reset样式 用styled-component GlobalStyle
            组件提供 皮肤样式
            自定义字体，用的是iconfont, 也用GlboalStyle解决
        3. 模块化样式用styledComponent  styled.div``
            组件的样式就不会污染， hash化类名
        4. styled-component 有和stylus, sass 一样的变量，
            嵌套，minxin  等能力， 方便复用

    - ajax 请求之前是用fetch, 后面使用axios     
        1. 同一设置baseURL  方便根据运行环境dev production
            从本地， 切成线上接口地址，无缝对接
        2. 登录使用jwt 后
            非常方便的使用 请求拦截器 带上后端返回， 存在localstorage中的token 在请求头 authorization 中
        3. 响应结果，使用响应拦截器统一解析数据，报错等，方便
    
    - 造接口假数据
        1. 开始用的是在线fastmock
        2. 使用koa , 返回接口数据
        3. 使用postman 测试接口
        4. 了解接口文档
    
    - 跨域
        1. koa 写接口的时候遇到了， 开始fastmock 没遇到
        2. 使用koa-cors 解决了
        3. 后面也手写过， 就是设置一些允许的请求头
            比如Access-Controll-Allow-Origin等
        4. 后面还了解了 jsonp

    - 滚动加载及懒加载
        1. better-scroll  解决滚动加载 性能很好， 体验很好
        2. 图片一多加载很慢， react-lazyload 包住图片
        3. Scroll + forceCheck  便滚动边加载， 提升体验

    - 页面切换动画， 从右侧滑入， 退出时也有动画效果
        react-transition-group
        CSSTransition 组件 结合几个声明周期类名
        -enter
        -enter-active

    - 幻灯片使用swiper 
    - 页面越写越多的时候， 加载很慢， 特别时托管到git page 时，使用了  lazy, Suspense 延迟加载， 减少首页压力

- url 格式
    mysql  root:123456
    <scheme>://<user>:<password>@<host>:<port>/<path>;<params>?<query>#<frag>
    如何得到query 对象 qs

- css 实现容器的高度是宽度的1/2
- html 长度单位
    1. px 绝对单位
        移动端有问题， retina 屏幕  css 像素不等于物理像素
    2. em  相对于父元素 weui 用的就是
    3. rem 相对单位   html 根
    4. vw vh  viewport 
    5. 百分比  
- sleep 
    