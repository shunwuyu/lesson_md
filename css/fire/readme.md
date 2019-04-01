[fire](https://juejin.im/post/5c9ae2d3e51d4566661127eb)

filter mix-blend-mode
filter: blur()   设置高斯模糊效果
filter: contrast() 调整图像的对比度。
边与边接触的时候 ， 边界融合， 对比度滤镜把高斯模糊的模 糊边缘给干掉，


1. mixin 与函数的区别
    mixin 是一段样式的封装，可以在
    引用的地方复用 stylus 是用的最多的
    函数 有返回值， random(min, max)
2. stylus 内置的函数库 
    floor  math(0, 'random') 
    unit(, 'px')
3. 200个元素  stylus for 
    for num in 1..200
        .g-ball:nth-child({num})
            $width = random(0, 40)
            width unit($width, 'px')
        
4. filter contrast(20) 
    mix-blend-mode: screen;