import { useState, useEffect } from 'react'
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom"
// 1. React首次渲染和之后的每次渲染都会调用
// 一遍useEffect函数，而之前我们要用两个生命周
// 期函数分别表示首次渲染(componentDidMonut)
// 和更新导致的重新渲染(componentDidUpdate)。
// useState时是先执行useEffect 还是  jsx 更新？
// useEffect中定义的函数的执行不会阻
// 碍浏览器更新视图，也就是说这些函数时异步执行的，
function Index() {
    // useEffect(()=>{
    //     console.log('useEffect=>老弟，你来了！Index页面')
    // })
    // useEffect(()=>{
    //     console.log('useEffect=>老弟你来了！Index页面')
    //     return ()=>{
    //         console.log('老弟，你走了!Index页面')
    //     }
    // })
    // useEffect(()=>{
    //     console.log('useEffect=>老弟你来了！Index页面')
    //     return ()=>{
    //         console.log('老弟，你走了!Index页面')
    //     }
    // }, [])
    
    return <h2>JSPang.com</h2>;
}

function List() {
    useEffect(()=>{
        console.log('useEffect=>老弟，你来了！List页面')
    })
    return <h2>List-Page</h2>;
}

function App(){
    const [ count , setCount ] = useState(0);
    //---关键代码---------start-------
    // useEffect(()=>{
    //     console.log(`useEffect=>You clicked ${count} times`)
    // })
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)

        return ()=>{
            console.log('====================')
        }
    },[count])
    //---关键代码---------end-------

    return (
        <BrowserRouter>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={()=>{setCount(count+1)}}>click me</button>
            </div>
            <ul>
                    <li> <Link to="/">首页</Link> </li>
                    <li><Link to="/list">列表</Link> </li>
                </ul>
            <Routes>
                <Route path="/"  element={<Index/>} />
                <Route path="/list" element={<List/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App