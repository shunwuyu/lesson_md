## why lazy load
- 能提升用户的体验，不妨设想下，用户打开像手机淘宝长页面的时候，如果页面上所有的图片都需要加载，由于图片数目较大，等待时间很长，用户难免会心生抱怨，这就严重影响用户体验。
- 减少无效资源的加载，这样能明显减少了服务器的压力和流量，也能够减小浏览器的负担。
  
## step
1. 只写 一张图片 讲 怎么替换 图片的src,
   借助一个 button  addEventListener 点击事件 替换
2. 把当前这张图片 加 margin 加到 出现滚动条
   讲 getBoundingClientRect clientHeight 有图片
   讲 addEventListener('scroll' ）时间里面 添加 一个 console
   scroll 的刚开始不调用。
3. 问题 刚刚只是处理了一张图片，假如一堆图片呢，
   现在开始插入一堆图片
   然后 已经不是一张了 for 循环
   必须添加 
   console.log(rect.top, document.documentElement.clientHeight, '加载了第', i, '张图片');
   知道 替换了 哪张 看代码
   问题 有重复替换的 
   优化1（循环）解决重复加载问题
4. 优化2（节流）（用时间戳判断）更好理解
   持续触发事件scroll，每隔一段时间，只执行一次事件
   还是会放在 inViewShow 代码里面判断，
