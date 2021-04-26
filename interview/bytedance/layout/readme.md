[source](https://juejin.cn/post/6844903962529759239#heading-16)

四、布局题：div垂直居中，左右10px，高度始终为宽度一半
  vw/vh 实现



CSS 中一些常见的长度单位
px 绝对长度单位，像素 浏览器（Chrome）默认文字大小为 16px，所能设置的最小单位为 12px
em 相对长度单位， 它会继承父元素的font-size

如果元素的 font-size 为 16px，元素的宽度设置为 width = 10em，则 width = 10em = 160px；如果元素父元素的 font-size 为 12px，元素的 font-size 设置为 font-size = 2em，则元素的 font-size = 2em = 24px；
1em 是一个汉字的宽度

- rem 
这个单位代表根元素的 font-size 大小 font-size 为 16px，则 1rem = 16px

vh 相对长度单位，视口高度的 1/100。
vw 相对长度单位，视口宽度的 1/100。

动态 REM
- 给每个设备尺寸定制一套 CSS
缺点：工作量大，不切实际
- 使用响应式 media query
需要区分多个尺寸区段，开发效率也不高
- vw/vh 方案
元素的宽高使用 vw/vh 长度单位，与设备视口宽高关联
- REM 方案
一切单位以设备宽度为准
使用 JS 把页面宽度转化为根元素的 font-size，然后再用与根元素 font-size 相关联的 rem 单位定义元素宽高，这样就等于使用了 rem 间接与页面宽度产生联系，确定了比例，从而实现等比缩放。

 