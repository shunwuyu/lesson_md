移动端图片格式化
- webp 
    首先从图片格式方面着手，webp（google官方网址）是谷歌推出的一种图片格式，优点在于同等画面质量下，体积比jpg、png少了25%以上
    https://www.upyun.com/webp?utm_source=baidu&utm_medium=ppc&utm_campaign=%E4%BA%91%E5%A4%84%E7%90%86&utm_term=webp&utm_content=webp004&bd_vid=5076062760060222092
    在全球范围只达到了70%
- srcset 配合 1x 2x 像素密度描述符
    srcset 可以根据不同的 dpr 拉取对应尺寸的图片：
    <div class='illustration'>
        <img src='illustration-small.png'
        srcset='images/illustration-small.png 1x,
                images/illustration-big.png 2x,
                images/illustration-large.png 3x'
        style='max-width: 500px'/>
    </div>

- 响应式布局的常用解决方案对比(媒体查询、百分比、rem和vw/vh）
    - 常见的自适应方案有哪些？
        - px和视口
            在静态网页中，我们经常用像素（px）作为单位，来描述一个元素的宽高以及定位信息。在pc端，通常认为css中,1px所表示的真实长度是固定的
            那么，px真的是一个设备无关，跟长度单位米和分米一样是固定大小的吗？
            那么css中的1px的真实长度到底由什么决定呢？
            1. 像素
                一个像素表示了计算机屏幕所能显示的最小区域，像素分为两种类型：css像素和物理像素。
                在js或者css代码中使用的px单位就是指的是css像素，物理像素也称设备像素，只与设备或者说硬件有关，同样尺寸的屏幕，设备的密度越高，物理像素也就越多。下表表示css像素和物理像素的具体区别：
                那么css像素与物理像素的转换关系是怎么样的呢？为了明确css像素和物理像素的转换关系，必须先了解视口是什么
        - 媒体查询
        - 百分比
        - 自适应场景下的rem解决方案
        - 通过vw/vh来实现自适应

