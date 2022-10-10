# React 性能优化 或更好的组织代码

- 性能对于网站留存率的影响
- 代码组织优化则关系到后续的维护成本


- ChildNonTheme 这个不关心皮肤的子组件，在皮肤状态更改的时候也进行无效的重新渲染。
    1. react 是自上而下递归更新
        <ChildNonTheme /> 这样的代码会被 babel 翻译成 React.createElement(ChildNonTheme) 这样的函数调用
        React官方经常强调 props 是immutable 的，所以在每次调用函数式组件的时候，都会生成一份新的 props 引用。
    2. createElement 的返回结构
        const childNonThemeElement = {
            type: 'ChildNonTheme',
            props: {} // <- 这个引用更新了
        }

- 如何避免这个无效的重新渲染呢 关键词是「巧妙利用 children」
    1. 唯一的区别就是我把控制状态的组件和负责展示的子组件给抽离开了
    2. 通过 children 传入后直接渲染
    3. 由于 children 从外部传入的，setTheme 触发重新渲染后，children 完全没有改变，所以可以直接复用 
    React.createElement(ChildNonTheme)  不会触发

    // 完全复用，props 也不会改变。
    const childNonThemeElement = {
        type: ChildNonTheme,
        props: {}
    }

就是要把渲染比较费时，但是不需要关心状态的子组件提升到「有状态组件」的外部，作为 children 或者props传递进去直接使用，防止被带着一起渲染。

当然，这个优化也一样可以用 React.memo 包裹子组件来做，不过相对的增加维护成本，根据场景权衡选择吧。

Logger 组件只负责发出日志，它是不关心logs的变化的，在任何组件调用 addLog 去写入日志的时候，理想的情况下应该只有 LogsPanel 这个组件发生重新渲染。

但是这样的代码写法却会导致每次任意一个组件写入日志以后，所有的 Logger 和 LogsPanel 都发生重新渲染。

每个Context 对象都会返回一个Provider React 组件， 他允许消费组件订阅context 的变化。
Provider 接受一个value 属性， 传递给消费组件。 一个Provider 可以和多个消费组件有对应关系， 
当Provider 的value 值发生改变时， 他内部的所有消费组件都会重新渲染。 