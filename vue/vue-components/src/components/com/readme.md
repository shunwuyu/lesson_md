#一个再复杂的组件，都是由三部分组成的：prop、event、slot

#组件里定义的 props，都是单向数据流，也就是只能通过父级修改，组件自己不能修改 props 的值，只能修改定义在 data 里的数据，非要修改，也是通过后面介绍的自定义事件通知父级，由父级来修改。

#@on-click, @click.native (监听根元素的原生事件，使用 .native 修饰符)

#provide / inject 是 Vue.js 2.2.0 版本后新增的 API, provide 和 inject 主要为高阶插件/组件库提供用例, provide 和 inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。