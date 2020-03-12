<<<<<<< HEAD
- html2canvas 因为移动端
  网页分享， 小程序 不能直接分享到朋友圈， 将整个网页或一部份网页
  转成canvas 

  html2canvas(dom, {
    onrendered: function(canvas) {
      显示， css 
    }
  })

- svg 是图片 
  假如它能将dom 画在它内部的话 
  foreignObject   svg=> html

- window.getComputedStyle(dom, null)
  任何节点的css属性值都能拿到 
=======
[source](https://segmentfault.com/p/1210000012294101/read)

不是真的截图， 而是通过遍历页面DOM结构， 收集所有元素信息及相应样式， 渲染出canvas  image.

1. 跨域地址

2. foreignObject

3. 
>>>>>>> c9fb79dc8239fa919ae598754cae9e31f35e03cb
