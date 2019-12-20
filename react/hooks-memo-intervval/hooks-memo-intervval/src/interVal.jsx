import React, { Component, useCallback, useState, useEffect, useRef } from 'react';

const useInterval = (callback, delay, count) => {
  console.log('count->', count)
  useEffect(() => {
    if (delay !== null) {
      console.log('setInterval ->', count)
      let id = setInterval(() => {
        callback()
      }, delay);
      // useEffect 的回调函数还可以返回一个函数，
      // 这个函数在 effect 生命周期结束之前调用。为防止内存泄漏，清除函数会在组件卸载前执行。
      // 另外，如果组件多次渲染，则在执行下一个 effect 之前，上一个 effect 就已被清除
      return () => {
        clearInterval(id)
      }
    }
  });
};
// const useInterval = (callback, delay) => {
//   const saveCallback = useRef();

//   useEffect(() => {
//     // 每次渲染后，保存新的回调到我们的 ref 里
//     saveCallback.current = callback;
//   });

//   useEffect(() => {
//     function tick() {
//       saveCallback.current();
//     }
//     if (delay !== null) {
//       let id = setInterval(tick, delay);
//       return () => {
//         console.info('clear !!!!!!');
//         clearInterval(id);
//       }
//     }
//   }, [delay]);
// };

// const Home = () => {
//   const [count, setCount] = useState(0);

//   useInterval(() => {
//       console.log(count);
//       setCount(count + 1);
//   }, 500);

//   return (
//     <div > {
//       count
//   } </div>
//   );
// };
const Home = () => {
  const [count, setCount] = useState(0);
  const [diff, setDiff] = useState(500);

  useInterval(() => {
    console.log('count:', count)
    setCount(count + 1);
  }, diff, count);
  // useEffect(() => {
  //   let id = setInterval(() => {
  //     setCount(count + 1)
  //   }, diff)
  //   return () => clearInterval(id);
  // })
  useEffect(() => {
  })

  return (<div>
    <p> count: {count} </p>
    <p> diff: {diff}ms </p>
    <p>
      <button onClick={() => setDiff(diff - 50)}> 加快50ms </button>
      <button onClick={() => setDiff(diff + 50)} > 减慢50ms </button>
    </p>
  </div>);
};

export default Home;

