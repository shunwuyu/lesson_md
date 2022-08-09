- If-None-Match/E-tag、If-Modified-Since/Last-Modified、Cache-Control/Max-Age、Pragma/Expires  这些是什么？
    缓存中常用到的头部

- 前后端交互3 缓存
    1. 对性能有要求的前端项目都是必用缓存的
    2. 使用缓存能很大程度上的提升效率

- 缓存分成哪几种？
    1. 强缓存  200 from cache
        浏览器如果判断本地缓存未过期，就直接使用，无需发起http请求
        在未过期时，必须更新资源路径才能发起新的请求 
        juejin.cn 图片  200 from memory cache 
        200 form memory cache : 不访问服务器，一般已经加载过该资源且缓存在了内存当中，直接从内存中读取缓存。浏览器关闭后，数据将不存在（资源被释放掉了），再次打开相同的页面时，不会出现from memory cache。
        200 from disk cache： 不访问服务器，已经在之前的某个时间加载过该资源，直接从硬盘中读取缓存，关闭浏览器后，数据依然存在，此资源不会随着该页面的关闭而释放掉下次打开仍然会是from disk cache。
        优先访问memory cache,其次是disk cache，最后是请求网络资源
        （http1.1）Cache-Control/Max-Age
            http1.0）Pragma/Expires
        index.js
        其他电脑访问服务器，若修改电脑的本地时间，会导致浏览器判断缓存失效
        在HTTP/1.1中， 增加了一个字段Cache-control，该字段表示资源缓存的最大有效时间，在该时间内，客户端不需要向服务器发送请求
        
        Expires 和 Cache-control 区别
        Expires设置的是 绝对时间
        Cache-control设置的是 相对时间
        缓存控制的优先级大于到期
        Cache-control: max-age=20

    2. 协商缓存  304
        浏览器会向服务端发起http请求，然后服务端告诉浏览器文件未改变，让浏览器使用本地缓存
        ctrl + f5  使得缓存无效
        向服务器发送请求，服务器会根据这个请求的request header的一些参数来判断是否命中协商缓存
        如果命中，则返回304状态码并带上新的response header通知浏览器从缓存中读取资源；
        （http1.1）If-None-Match/E-tag  不同时期
        （http1.0）If-Modified-Since/Last-Modified
        接口请求

        last-modified 资源最后一次修改的时间
        Last-Modified: Sat, 30 Mar 2019 05:46:11 GMT
        浏览器在这个值和内容记录在浏览器的缓存数据库中。
        下次请求相同资源，浏览器将在请求头中设置if-modified-since的值（这个值就是第一步响应头中的Last-Modified的值）传给服务器
        服务器收到请求头的if-modified-since的值与last-modified的值比较，如果相等，表示未进行修改，则返回状态码为304；如果不相等，则修改了，返回状态码为200，并返回数据
        main.js

        last-modified是以秒为单位的，假如资料在1s内可能修改几次，那么该缓存就不能被使用的。
如果文件是通过服务器动态生成，那么更新的时间永远就是生成的时间，尽管文件可能没有变化，所以起不到缓存的作用。

Etag
    出现了一组新的字段 Etag 和 If-None-Match

    Etag是根绝文件内容，算出一个唯一的值。服务器存储着文件的 Etag 字段。之后的流程和 Last-Modified 一致，只是 Last-Modified 字段和它所表示的更新时间改变成了 Etag 字段和它所表示的文件 hash，把 If-Modified-Since 变成了 If-None-Match。服务器同样进行比较，命中返回 304, 不命中返回新资源和 200。
Etag 的优先级高于 Last-Modified

    etag.js
    每次请求的时候，服务器都会把index.html 读取一次，以确认文件有没有修改
2.对大文件进行etag 一般用文件的大小 + 文件的最后修改时间 来组合生成这个etag
        

            
