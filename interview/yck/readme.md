[](https://juejin.cn/book/6844733763675488269/section/6844733763776151560)

- 图片优化
    计算图片大小
    100 * 100 像素  图像上有 10000 个像素点
    每个像素的值是 RGBA 存储的话
    每个像素有 4 个通道，每个通道 1 个字节
    该图片大小大概为 39KB
    10000 * 1 * 4 / 1024

    在实际项目中，一张图片可能并不需要使用那么多颜色去显示，我们可以通过减少每个像素的调色板来相应缩小图片的大小
    - 减少像素点
    - 减少每个像素点能够显示的颜色

    1. 不用图片。很多时候会使用到很多修饰类图片，其实这类修饰图片完全可以用 CSS 去代替。
        linear-gradient
        iconfont
        svg  
    2. 对于移动端来说，屏幕宽度就那么点，完全没有必要去加载原图浪费带宽。一般图片都用 CDN 加载，可以计算出适配屏幕的宽度，然后去请求相应裁剪好的图片。
        https://img10.360buyimg.com/mobilecms/s360x360_jfs…4541bdE72e0d944/79932aa2ef612fc4.jpg!q70.dpg.webp
    3. 小图使用 base64 格式
        webpack  转  
    4. 将多个图标文件整合到一张图片中
        雪碧图   background-position
        省去http 请求数 
        ![](https://www.5axxw.com/images_oss/k7/674e8092-a829-4904-8536-026e7b044eb7.jpg?x-oss-process=style/logo)
        目前网上有一些言论说雪碧图已经过时了
        https://juejin.cn/post/6844903935648497678
            百度 搜索框
        - 在 HTTP2 的场景下雪碧图便失去了意义
           
                从 Http/0.9 到 Http/2 要发送多个请求，从多个 Tcp 连接=>keep-alive=>管道化=>多路复用不断的减少多次创建 Tcp 等等带来的性能损耗。
                ### 多个 Tcp 连接
                在最早的时候没有keep-alive只能创建多个Tcp连接来做多次请求。多次 http 请求效果如下图所示：
                一次请求完成就会关闭本次的 Tcp 连接，下个请求又要从新建立 Tcp 连接传输完成数据再关闭，造成很大的性能损耗。
                ### Keep-Alive
                 一定时间内，同一域名多次请求数据，只建立一次 HTTP 请求，其他请求可复用每一次建立的连接通道，以达到提高请求效率的问题。这里面所说的一定时间是可以配置的，不管你用的是Apache还是nginx。
                以往，浏览器判断响应数据是否接收完毕，是看连接是否关闭。在使用持久连接后，就不能这样了，这就要求服务器对持久连接的响应头部一定要返回content-length标识body的长度，供浏览器判断界限。有时，content-length的方法并不是太准确，也可以使用 Transfer-Encoding: chunked 头部发送一串一串的数据，最后由长度为 0 的chunked标识结束。
                同域并行请求限制带来的阻塞（6~8）个
            ### 管线化
                HTTP 管线化可以克服同域并行请求限制带来的阻塞，它是建立在持久连接之上，是把所有请求一并发给服务器，但是服务器需要按照顺序一个一个响应，而不是等到一个响应回来才能发下一个请求，这样就节省了很多请求到服务器的时间。不过，HTTP 管线化仍旧有阻塞的问题，若上一响应迟迟不回，后面的响应都会被阻塞到。

            ### 多路复用
                多路复用代替原来的序列和阻塞机制。所有就是请求的都是通过一个 TCP 连接并发完成。因为在多路复用之前所有的传输是基于基础文本的，在多路复用中是基于二进制数据帧的传输、消息、流，所以可以做到乱序的传输。多路复用对同一域名下所有请求都是基于流，所以不存在同域并行的阻塞。

            在 HTTP/2 中，有两个非常重要的概念，分别是帧（frame）和流（stream）。
            帧代表着最小的数据单位，每个帧会标识出该帧属于哪个流，流也就是多个帧组成的数据流。
            HTTP2 采用二进制数据帧传输，取代了 HTTP1.x 的文本格式，二进制格式解析更高效。
            多路复用代替了 HTTP1.x 的序列和阻塞机制，所有的相同域名请求都通过同一个 TCP 连接并发完成。同一 Tcp 中可以发送多个请求，对端可以通过帧中的标识知道属于哪个请求。通过这个技术，可以避免 HTTP 旧版本中的队头阻塞问题，极大的提高传输性能。
        - 一些简单的图标直接用 CSS 或者 SVG 就可以搞定
        - 图片不能灵活设置样式
        - 一张图崩了整个网页的图标就都崩了
        - 图标位置确定后就不好再修改了
        - 为了适应不同的分辨率需要准备多个规格的图片
    5. 选择正确的图片格式：
        对于能够显示 WebP 格式的浏览器尽量使用 WebP 格式。因为 WebP 格式具有更好的图像数据压缩算法，能带来更小的图片体积，而且拥有肉眼识别无差异的图像质量，缺点就是兼容性并不好
        小图使用 PNG，其实对于大部分图标这类图片，完全可以使用 SVG 代替
        照片使用 JPEG
- DNS 预解析
    DNS 解析也是需要时间的，可以通过预解析的方式来预先获得域名所对应的 IP。
    <link rel="dns-prefetch" href="//yuchengkai.cn">
- 节流
    ```
    // func是用户传入需要防抖的函数
    // wait是等待时间
    const throttle = (func, wait = 50) => {
    // 上一次执行该函数的时间
        let lastTime = 0
    return function(...args) {
        // 当前时间
        let now = +new Date()
        // 将当前时间和上一次执行函数时间对比
        // 如果差值大于设置的等待时间就执行函数
        if (now - lastTime > wait) {
            lastTime = now
            func.apply(this, args)
            }
        }
    }

    setInterval(
        throttle(() => {
            console.log(1)
        }, 500),
        1
    )
    ```