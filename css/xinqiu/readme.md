[source](https://juejin.cn/post/6987043290444988424)

- 再来认识css  transform
    ![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6f3fc87e90464016b8a0dc098ab80685~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)
    X 轴：屏幕左上角为原点，水平方向为 X 轴

    Y 轴：屏幕左上角为原点，垂直方向为 Y 轴

    Z 轴：屏幕左上角为原点，垂直电脑的轴为 Z 轴，可以理解为指向我们的轴

    - transform: rotate(45deg) scaleX(0.5);
        是先旋转， 还是先压缩呢？ 
    transform 参数的执行顺序
        后传入的先执行
        - 有哪些变形属性呢？
            skew scale rotate translate
