[CSS盒模型详解](https://juejin.cn/post/6844903505983963143)

https://juejin.cn/post/6936913689115099143#heading-12

1. 每个html标签在页面的占位可以比作什么？
    一个方块 然后这个方块又包着几个小方块，如同盒子一层层的包裹着，这就是所谓的盒模型。
    真个页面排版， 有点像哪个重要节日的礼物？
    中秋月饼礼盒

2. 盒模型分为两种  
    W3C标准盒模型
        width,height只包含内容content 不包含border和padding。
    IE盒模型(怪异)
        属性width,height包含border和padding，指的是content+padding+border。

    在ie8+浏览器中使用哪个盒模型可以由box-sizing(CSS新增的属性)控制，默认值为content-box(标准盒模型)，即标准盒模型；如果将box-sizing设为border-box则用的是IE盒模型。如果在ie6,7,8中DOCTYPE缺失会触发IE模式。在当前W3C标准中盒模型是可以通过box-sizing自由的进行切换的。

    ie9- 的时代已经过去， 标准盒模型时代
    5.html  box-sizing  
    实际使用呢？  6.html
    
https://juejin.cn/post/6988386005128577038
- 8.html   左 float，然后右 margin-left

    9.html 右 float，margin-right

- BFC + float
