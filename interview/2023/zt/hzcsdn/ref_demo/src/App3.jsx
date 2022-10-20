import React, { useState, useEffect, useRef } from "react";
// function App() {
//     const [count, setCount] = useState(0);
//     let interval
//     useEffect(() => {
//         interval = setInterval(() => {
//           setCount(count => count + 1);
//         }, 1000);
//       }, []);

//     useEffect(() => {
//     if (count > 5) {
//         clearInterval(interval);
//     }
//     }, [count]);
//     return (
//         <h1>count: {count}</h1>
//     )
// }

function App() {
    const [count, setCount] = useState(0);
    // 把定时器设置成全局变量使用useRef挂载到current上
    const timer = useRef();
    // 首次加载useEffect方法执行一次设置定时器
    useEffect(() => {
        timer.current = setInterval(() => {
        setCount(count => count + 1);
        }, 1000);
    }, []);
    // count每次更新都会执行这个副作用，当count > 5时，清除定时器
    useEffect(() => {
        if (count > 5) {
        clearInterval(timer.current);
        }
    });
    return <h1>count: {count}</h1>;
}
  


export default App;