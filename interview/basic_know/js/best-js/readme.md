[source](https://juejin.cn/post/6844903782719946765)

-  检测当前宿主环境是否是浏览器
    最后讲export 
    export const inBrowser = typeof window !== 'undefined'

- __proto__ 属性是什么？属于谁？
    一个对象的 __proto__ 属性指向了其构造函数的原型

- 如何获得当前浏览器代理？ 浏览器代理叫什么？  UserAgent
    后面讲 inBrowser
    export const UA = inBrowser && window.navigator.userAgent.toLowerCase()

- 如何判断用户使用的是IE浏览器？
    export const isIE9 = UA && UA.indexOf('msie 9.0') > 0
    export const isEdge = UA && UA.indexOf('edge/') > 0
    export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
    IE9| Edge | Chrome

- 检测字符串是否以 $ 或者 _ 开头
    如何严谨一点  + ''  
    charCodeAt   结果是什么   Unicode 编码
    ```
    export function isReserved (str: string): boolean {
        const c = (str + '').charCodeAt(0)
        return c === 0x24 || c === 0x5F
    }
    ```
    若作为一个想进阶中高级的前端，charCodeAt方法的各种妙用还是需要知道的

- 从传递进来的字母序列中找到缺失的字母并返回它。 如：fearNotLetter("abce") 应该返回 "d"。
    1.js

- 连字符转驼峰
    2.js

