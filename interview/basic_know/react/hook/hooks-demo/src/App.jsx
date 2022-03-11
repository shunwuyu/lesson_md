import { useState, useMemo } from 'react'
import logo from './logo.svg'
import './App.css'

/* 自定义hooks 用于格式化数组将小写转成大写 */
// function useFormatList(list){
//   return list.map(item=>{
//       console.log(1111)
//       return item.toUpperCase()
//   })
// }

function useFormatList(list) {
  // useMemo 缓存执行结果
  return useMemo(() => list.map(item => {
      console.log(1111)
      return item.toUpperCase()
  }), [])
}

function Index ({ list }) {
  const [ number ,setNumber ] = useState(0)
  const newList = useFormatList(list)
  return (
    <div className="index">
      <div className="list" >
          { newList.map(item=><div key={item} >{ item }</div>) }
      </div>
      <div className="number" >
        <div>{ number }</div>
        <button onClick={()=> setNumber(number + 1) } >add</button>
      </div>
    </div>
  )
}

function App() {
  const list = ['a', 'b', 'c']
  return (
    <>
      <Index list={list}/>
    </>
  )
}

export default App
