import { useState, memo, useCallback, useRef } from 'react'
import usePow from './usePow';
// setState在合成事件和钩子函数中是异步的，在原生事件和setTime中都是同步的
// 当然也可以通过第二个参数setState(partialState,callback)中的callback拿到更新后的结果
// 得到之前的值
// function App() {
//   const [flag, setFlag] = useState(true)
//   const data = usePow([1, 2, 3])
//   return (
//     <>
//       <div>数字：{JSON.stringify(data)}</div>
//       <button onClick={() => {setFlag(v => !v)}}>切换</button>
//       <div>切换状态： {JSON.stringify(flag)}</div>
//     </>
//   )
// }

// function App() {
//   const [count,setCount] = useState(0)
//   const [show,setShow] = useState(true)
//   const  add = useCallback(()=>{
//     setCount(count + 1)
//   },[count])

//   return (
//     <div>
//       <div style={{display: 'flex', justifyContent: 'flex-start'}}>
//         <TestButton title="普通点击" onClick={() => setCount(count + 1) }/>
//         <TestButton title="useCallback点击" onClick={add}/>
//       </div>
//       <div style={{marginTop: 20}}>count: {count}</div>
//       <button onClick={() => {setShow(!show)}}> 切换</button>
//     </div>
//   )
// }

// const TestButton = memo((props)=>{
//   console.log(props.title)
//   return <button color='primary' onClick={props.onClick} style={props.title === 'useCallback点击' ? {
//     marginLeft: 20
//     } : undefined}>{props.title}</button>
// })

// function App() {
//   const scrollRef = useRef(null);
//   const [clientHeight, setClientHeight ] = useState(0);
//   const [scrollTop, setScrollTop ] = useState(0)
//   const [scrollHeight, setScrollHeight ] = useState(0)

//   const onScroll = () => {
//     if(scrollRef?.current){
//       let clientHeight = scrollRef?.current.clientHeight; //可视区域高度
//       let scrollTop  = scrollRef?.current.scrollTop;  //滚动条滚动高度
//       let scrollHeight = scrollRef?.current.scrollHeight; //滚动内容高度
//       setClientHeight(clientHeight)
//       setScrollTop(scrollTop)
//       setScrollHeight(scrollHeight)
//     }
//   }

//   return (
//     <div >
//       <div >
//         <p>可视区域高度：{clientHeight}</p>
//         <p>滚动条滚动高度：{scrollTop}</p>
//         <p>滚动内容高度：{scrollHeight}</p>
//       </div>
//       <div style={{height: 200, overflowY: 'auto'}} ref={scrollRef} onScroll={onScroll} >
//         <div style={{height: 2000}}></div>
//       </div>
//     </div>
//   )
// }

function App() {
  const prefv = useRef(null);
  console.log("pre", prefv);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>当前的值:{counter}</p>
      <p>之前的值:{prefv.current ? prefv.current : "没设置过"}</p>
      <button
        onClick={() => {
          prefv.current = counter;
          setCounter((x) => x + 1);
        }}
      >
        Click me to Add
      </button>
      <button
        onClick={() => {
          prefv.current = counter;
          setCounter((x) => x - 1);
        }}
      >
        Click me to remove
      </button>
    </div>
  );
}

export default App
