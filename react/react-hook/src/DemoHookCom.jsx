import React, { Component, useState, useEffect } from 'react';
function App (props) {
  const [count, setCount] = useState(0);

  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });

  const onResize = () => {
    setSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    )
  }
  /**
   * Hooks 不在关心是 mount 还是 update。
   * 用useEffect统一在渲染后调用，就完整追踪了 count 的值
   */
  useEffect(() => {
    console.log(1);
    document.title = count;
  })
  /**
   * 可以通过返回一个回调函数来注销事件的注册。
   * 回调函数在视图被销毁之前触发，销毁的原因有两种：重新渲染和组件卸载
   * 第二个参数，并传入一个空数组即可。
   * 第二个参数是一个可选的数组参数，
   * 只有数组的每一项都不变的情况下，
   * useEffect 才不会执行。
   * 第一次渲染之后,useEffect 肯定会执行。
   * 由于我们传入的空数组，空数组与空数组是相同的，
   * 因此 useEffect 只会在第一次执行一次
   */
  useEffect(() => {
    console.log('count:', count)
  }, [count])
  useEffect(() => {
    console.log(2);
    window.addEventListener('resize', onResize, false);
    return () => {
      console.log(3);
      window.removeEventListener('resize', onResize, false)
    }
  }, [])
  /**
   * 一旦 dom 元素被替换，我们绑定的事件就失效了，
   * 所以咱们始终要追踪这个dom 元素的最新状态
   */
  const onClick = () => {
    console.log('click');
   }
   useEffect(() => {
    console.log(document.querySelector('#size'))
    document.querySelector('#size').addEventListener('click', onClick, false);
      return () => {
        console.log('removeEventListener');
        document.querySelector('#size').removeEventListener('click', onClick, false);
      }
   })

  return (
    <div>
      <button type="button"
        onClick={() => {setCount(count + 1) }}
      >
        Click({count})
        size: {size.width}x{size.height}

      </button>
      {/* <span id="size">size: {size.width}x{size.height}</span> */}
      {
        count%2
        ? <span id="size">我是span</span>
        : <p id='size'>我是p</p>
      }
    </div>
  )
}
export default App;

/**
 * 默认情况下，它在第一次渲染之后和每次更新之后都会执行,React 保证了每次运行 effect 的时，DOM 都已经更新完毕
 * React 会在组件卸载的时候执行清除操作
 */