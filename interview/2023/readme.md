- React 的 setState 是同步还是异步？
    1. 从代码看   useEffect打印是异步的
    2. 从render 看，  同步 的， 执行了 0， 1， 2
        如果是异步的， 应该是  0(mount)   2(updated)
        同步的？
    3. App.jsx 没有setTimeout 
        0,1,2,3  同步   却表现得0,  3  异步   完全

- React 渲染的流程?
    react 通过 jsx 来描述界面，jsx 可以通过 babel 等编译器编译成 render function，然后执行后产生 vdom
    ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/693d4c78c6b34a0a88fb557f4c9b0e51~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

    这个 vdom 也不是直接渲染的，而是会先转化为 fiber，之后再渲染。

    因为 vdom 里每个节点只记录了子节点（children），没有记录兄弟节点，所以必须一次性渲染完，不能打断。

    而转成 fiber 的链表结构就会记录父节点（return）、子节点（child）、兄弟节点（sibling），就变成了可打断的。

    在 setTimeout  、事件监听器等函数里 setState 会同步执行
    setState 是批量执行的  有个executionContext 收集改变

- form 元素 enctype 是什么？
    - 表单的编码类型
        application/x-www-form-urlencoded：表单默认的编码类型
        multipart/form-data：如果包含文件，只能选择这种类型 
        text/plain：无需编码，直接发送

        
什么是 HTML5?
    - HTML产生于1990年    
    - 1997年 HTML4 出现，成为互联网开发的标准
    - 2008年，HTML5正式出现，2012年趋于稳定

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
哪些和html5 相关？
<!DOCTYPE html>  使用 HTML5 标准来解析
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">  
HTML4.01 是基于 SGML，需要声明 DTD 标记语言规则，浏览器才可以正常解析页面代码。而 HTML5 不是基于 SGML 标准，所以不需要声明 DTD，直接` 即可

- HTML5有哪些“新”特性？
    1. 语义化标签
        想到哪张图？ 
    2. 两种写法有啥优点？
        - 比所有布局全部采用 div 标签阅读起来更清晰
        - 利于 SEO，方便搜索引擎识别页面结构 - 这也是非常重要的
        - 方便设备解析，比如盲人阅读，语义化标签比 div 标签要好很多
    3. 还能说出哪些html5标签
        video audio  canvas   

- html5 哪些功能？
    表单功能增强
     <form action="" method="get">
    <p>邮箱标签: <input type="email"></p>
    <p>数字标签: <input type="number"></p>
    <p>滑动条标签: <input type="range"></p>
    <p>搜索框标签: <input type="search"></p>
    <p>日期框: <input type="date"></p>
    <p>星期框: <input type="week"></p>
    <p>月份框: <input type="month"></p>
    <p>颜色框: <input type="color"></p>
    <p>网址框: <input type="url"></p>
    <div>
      <input type="submit">
      <input type="reset">
    </div>
</form>
    还有什么属性？ placeholder  autofocus  number 类型，则可以设置 min 和 max 属性  是 password 类型，则可以设置 minLength 和 maxLength 属性
    - 音频/视频
        在 HTML5 之前，浏览器支持音视频方案都是通过 Flash 来实现的
        <audio controls="controls">
            <source src="./media/luffy.ogg"></source>
            <source src="./media/luffy.mp3"></source>
            本网页不支持媒体标签
        </audio>
        兼容 

    - 画布 — Canvas
    - 拖放
    - 本地存储
        Storage 数据库
        manifest 离线缓存。之前前端本地存储都是通过 cookie 来进行的。
    - Storage
        LocalStorage 和 SessionStorage
        localStorage 存储的键值采用什么字符编码
        UTF-16 每个字符使用两个字节 小于0xFFFF(65535)， 大于这个码点的是四个字节
        - 10M
        写个方法统计一个localStorage已使用空间
        function sieOfLS() {
            return Object.entries(localStorage).map(v => v.join('')).join('').length;
        }
    - Cache Manifest
        