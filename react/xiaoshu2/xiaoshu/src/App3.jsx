import { useState } from 'react'
// - 请说下react中state有哪些规则？
// // - state 的主要作用是用于组件保存、控制、修改自己的可变状态
// state 在组件内部初始化，可以被组件自身修改，而外部不能访问也不能修改
// state 是一个局部的、只能被组件自身控制的数据源
// state 中状态可以通过 setState 方法进行更新
// setState 会导致组件的重新渲染
// - 那么props呢？
// props 的主要作用是让使用该组件的父组件可以传入参数来配置该组件。
// 它是外部传进来的配置参数，组件内部无法控制也无法修改。
// 除非外部组件主动传入新的 props，否则组件的 props 永远保持不变。
// - 相同点？
// 它们都可以决定组件的行为和显示形态
// 但是它们的职责其实非常明晰分明：state
//  是让组件控制自己的状态，props 是让外部对组件自己进行配置。
// 那么请记住一个简单的规则：尽量少地用 state，尽量多地用 props。
function App() {
    return (
        <div></div>
    )
}

export default App