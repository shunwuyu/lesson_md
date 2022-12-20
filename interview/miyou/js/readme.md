-  JavaScript是如何表示数字的？
    ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/9/16/165e0eb7f4d6c50f~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp)  看到了很么？
    通过64位来表示一个数字

    Number类型表示数字（整数和浮点数）
    第0位：符号位，0表示正数，1表示负数(s)
    第1位到第11位：储存指数部分（e）
    第12位到第63位：储存小数部分（即有效数字）f

    1. JS 用number表示数字和浮点数
    2. 运算时发生了什么
        1.进制转换
            0.1和0.2转换成二进制后会无限循环
            https://tool.oschina.net/hexconvert
        0.1.toPrecision(21)
