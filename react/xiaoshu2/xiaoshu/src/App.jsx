import { useState } from 'react'
import CommentApp from './CommentApp'
// - 要做一个这个效果， 怎么搞？
//     1. 组件划分
//         React.js 中一切都是组件， 
//         所以拿到一个需求以后，我们要
//         做的第一件事情就是理解需求、分析需求、划分这个需求由哪些组件构成
//         怎么划分？
//         划分组件的目的性是为了代码可复用性、可维护性
//         如图  

// - CommentApp：评论功能的整体用一个叫
//  CommentApp 的组件包含起来。CommentApp 包含上部和下部两部分。
// CommentInput：上面部分是负责用户输入可操作的输入区域，
// 包括输入评论的用户名、评论内容和发布按钮，
// 这一部分功能划分到一个单独的组件 CommentInput 中。
// CommentList：下面部分是评论列表，用一个叫 
// CommentList 的组件负责列表的展示。
// Comment：每个评论列表项由独立的组件
// Comment 负责显示，这个组件被 CommentList 所使用
// 如果一个文件导出的是一个类，那么这个文件名就用大写开头。

function App() {
    return (
        <div>
            <CommentApp />
        </div>
    )
}

export default App