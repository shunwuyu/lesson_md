import { useState } from 'react'
// https://www.bookstack.cn/read/react-naive-book/b2c47d50ee575691.md
// 返回并列多个 JSX 元素是不合法的
// function App() {
    
//     return (
//         // <div>第一个</div>
//         // <div>第二个</div>
//         <div>
//             <div>第一个</div>
//             <div>第二个</div>
//         </div>
//     )
// }

// function App() {
//     const word = 'is good'
//     const className = 'header'
//     const isGoodWord = true
//     const goodWord = <strong> is good</strong>
//     const badWord = <span> is not good</span>
//     return (
//         <div className={className}>
//             {/* <h1>React 小书 {word}</h1> */}
//             {/* // 叫什么？ 表达式插入 */}
//             {/* <h1>React 小书 {1 + 2}</h1> */}
//             {/* 简而言之，{} 内可以放任何 JavaScript 的代码，
//             包括变量、表达式计算、函数执行等等 */}
//             <h1>React 小书 {(function () { return 'is good'})()}</h1>
//             {/* 表达式插入不仅仅可以用在标签内部，也可以用在标签的属性上 */}
//             {/* 因为 for 也是 JavaScript 的关键字 */}
//             <div>
//                 <label htmlFor='male'>Male</label>
//                 <input type="text" id="male" />
//             </div>
//             {/* {isGoodWord
//             ? <strong> is good</strong>
//             : <span> is not good</span>
//             } */}
//             {/* 那么 React.js 不显示null，相当于忽略了该表达式插入。 */}
//             {/* {isGoodWord
//             ? <strong> is good</strong>
//             : null
//             } */}
//              {/* JSX 元素就是 JavaScript 对象
//                 JSX 元素其实可以像 JavaScript 对象那样自由地赋值给变量，
//                 或者作为函数参数传递、或者作为函数的返回值。
//              */}
//             {isGoodWord ? goodWord : badWord}
//         </div>
//     )
// }

// 使用 React.js 构建一个未读消息组件 Notification
const Notification = ({n}) => {
    return n>0? <span>有({n})条未读消息</span>:<span>没有未读消息</span>;
}
const App = () => {
    return (
        <div>
            <Notification n={0}/>
        </div>
    )
}

export default App