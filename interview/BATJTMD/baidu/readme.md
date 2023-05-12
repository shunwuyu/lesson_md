https://www.nowcoder.com/discuss/479041776859262976?sourceSSR=dynamic

- promise delay 方法    
    function delay(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
- 用async await 实现一个请求函数
    async function request(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

- async 原理
    https://juejin.cn/post/6844904102053281806

    - promise 串行很棒的模式
        简单的方式实现了asyncToGenerator这个函数，这是babel编译async函数的核心
    - async 函数是generator 函数的语法糖
        async await = *  yield 
    - 不会自动执行的，每一次调用它的next方法，会停留在下一个yield的位置
        async 会自动执行
    - 将异步代码的链式调用转化为类似同步代码的写法，使得代码更加易于理解

- 如何减少打包体积?
    1. Tree Shaking/ 代码分割/ 缓存
    设置为 production 时，webpack 会自动启用一些优化手段来减小打包体积，例如自动启用 Tree Shaking、代码压缩等。可以将 mode 设置为 production 来减小打包体积
    2. 使用 webpack 的功能可以启用缓存，每次打包时只改变了文件的 token 值，就只会重新构建被修改的文件。这样就避免了无脑的重复打包，也就减少了打包时间和减小体积。
        cache
    3. 使用 Code Splitting 进行分块
        Code Splitting 会将代码切割成多个代码块，从而能够按需加载代码，避免因为加载了全部代码影响性能和体验
        optimization: {
            splitChunks: {
            chunks: 'all',
            name: 'common',
            },
        },
    4. optimization: {
        splitChunks: {
        chunks: 'async',
        name: 'common',
        },
    },
        分包  异步 
    
- Gzip压缩前后端分别怎么配置的
    前端
        - webpack  css-minimizer-webpack-plugin 
            webpack-parallel-uglify-plugin   production 默认做
    后端
        nginx
        /etc/nginx/nginx.conf
        http {
        ...
        gzip on;
        gzip_comp_level 6;
        gzip_min_length 1024;
        gzip_types text/plain text/css text/javascript application/javascript application/x-javascript application/json application/xml application/rss+xml image/svg+xml;
        }
        设置gzip为on，并指定压缩级别为6，可以节省更多的带宽，但同时也增加了压缩耗时

        压缩后的文件需要在响应头中添加Content-Encoding: gzip标头，以使浏览器正确解压缩响应实体

        gzip_min_length，我们告诉Nginx只有当响应的大小大于等于1Kb的时候才进行Gzip压缩。这可以避免对小文件进行额外的压缩操作，从而避免不必要的CPU和内存开销，同时也能避免不必要的网络延迟。

- 三栏式布局
    - grid 布局
    - Flexbox布局 轻松实现
    - 定位
    - 浮动
        - 双飞翼

- 怎么让其一直保持在最顶层的
    z-index 
    只用z-index就肯定能确保Modal在最顶层嘛?
    不一定。虽然z-index可以调整元素在垂直堆叠方向上的显示顺序，但z-index仅对“定位元素”（position属性值为absolute、relative、fixed）有效。并且如果两个定位元素的z-index值相同，则它们在垂直堆叠方向上的显示顺序是由它们在文档流中的先后顺序而定。也就是说，后面出现的元素会覆盖先出现的元素。

    如果一个元素的z-index值设置为负数，它将被放到堆叠顺序的底部，即使它是“定位元素”。

    层叠上下文
    - 根元素。HTML文档的根元素（html标签）即为一个独立的层叠上下文，所有页面元素默认都位于这个层叠上下文中。
    - 带有position: fixed/absolute的元素，如果position设置为fixed（固定定位）或absolute（绝对定位），则这个元素就会形成一个新的层叠上下文。这个元素内的所有子元素都会被包含在此层叠上下文中。
    - CSS3中的一些属性。如opacity（透明度）、transform（变形）、filter等CSS3属性，这些属性可以创建独立的层叠上下文。在这些层叠上下文内，元素的堆叠顺序和普通元素不同
    - 

- 两列布局
    浮动布局
    绝对定位布局
    Flex布局
    Grid布局
    表格布局
    inline-block

- 如何判断一个对象是否为Promise
    可以使用Promise.resolve()方法判断一个对象是否为Promise。具体做法如下：
    function isPromise(obj) {
        return Promise.resolve(obj) === obj;    
    }

- 单行省略和多行省略
    .single-line-ellipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .multi-line-clamp {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2; /* 限制显示的行数 */
    }
    -webkit-box是由WebKit浏览器引入的一种CSS布局模式，已被W3C CSS Flexible Box Layout Module所取代。