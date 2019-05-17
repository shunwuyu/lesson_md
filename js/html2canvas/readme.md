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