[source](https://juejin.im/post/594b27a18d6d810057db092f)

在平时的前端开发中我们经常会遇到这种操作。明明我代码更新了，咋刷出来还是以前的呢？是不是缓存了？快清下缓存看看！你看页面是304，怪不得没更新！等等很多情况。作者起初也不是很了解，因为这个不由前端来控制，都是后端的操作。

第一步：判断当前缓存是否过期
这是判断是否启用缓存的第一步。如果浏览器通过某些条件(条件之后再说)判断出来，ok现在这个缓存没有过期可以用，那么连请求都不会发的，直接是启用之前浏览器缓存下来的那份文件：

图中看到这个css文件缓存没有过期，被浏览器直接通过缓存读取了出来，注意这个时候是不会向浏览器请求的！ 如果过期了就会向服务器重新发起请求，但是不一定就会重新拉取文件！

第二步：判断服务器中的文件是否有改动
1、缓存过期，文件有改动

如果服务器发现这个文件改变了那么你肯定不能再用以前浏览器的缓存了，那就返回个200并且带上新的文件：
2、缓存过期，文件无改动
同时如果发现虽然那个缓存虽然过期了，可你在服务器端的文件没有变过，那么服务器只会给你返回一个头信息(304)，让你继续用你那过期的缓存，这样就节省了很多传输文件的时间带宽啥的

过期了的缓存需要请求一次服务器，若服务器判断说这个文件没有改变还能用，那就返回304。浏览器认识304，它就会去读取过期缓存。否则就真的传一份新文件到浏览器。

1、Expires；

2、Cache-Control。   优先级比前者高
max-age
那么在60s内，如果再去请求这个文件的话，是不会发起请求的。因为还没有过期呢！唯一例外是如果这个文件是你在浏览器地址栏输入的地址来请求的

判断文件变动
Etag  Last-Modified  
：Last-Modified &   客户端if-modified-since。



通过 链接打开
