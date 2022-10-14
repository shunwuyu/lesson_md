[](https://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html)

# 继承"的五种方法

- 需求会构建 狗 猫等类, 我们建类的方式是?
    -  动物类
    - 继承, 构建猫, 狗  子类

    8.js

-  怎样才能使"猫"继承"动物"呢
    1. 使用call或apply方法，将父对象的构造函数绑定在子对象上
    9.js
    2. 使用prototype属性
        10.js
        11.js

    3. 直接继承prototype
        不变的属性都可以直接写入Animal.prototype
        12.js
        这样做的优点是效率比较高, 不用执行和建立Animal的实例了
        比较省内存, 会有什么问题
        缺点是 Cat.prototype和Animal.prototype现在指向了同一个对象，那么任何对Cat.prototype的修改，都会反映到Animal.prototype。
    4. 利用空对象作为中介
        F是空对象，所以几乎不占内存
        修改Cat的prototype对象，就不会影响到Animal的prototype对象。
        13.js

    5. 拷贝继承
        把父对象的所有属性和方法，拷贝进子对象，不也能够实现继承吗？这样我们就有了第五种方法
        14.js
