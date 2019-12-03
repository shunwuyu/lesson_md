import React, { useState, useMemo, useCallback, useEffect } from 'react';
const set = new Set();
const Home = () => {
  const [count, setCount] = useState(0);
  const [nowtime, setNowtime] = useState(0);

  const getSum = () => {
    const sum = count;
    return sum + ' , ' + Math.random(); // 这个random是为了看到区别
  };
  const sum = useMemo(() => (count + ' , ' + Math.random()), [count])

  const fn = useCallback(() => {
    console.log('fn 函数被重新定义了');
    return (count + ' , ' + nowtime);
  }, [count]);
  set.add(fn);
  useEffect(() => {
    console.log('count', count);
    console.log('nowtime', nowtime);

    return () => console.log('effect callback will be cleared');
  }, [count]);

  return (<>
    <p> count: {count}</p>
    <p> sum: {getSum()}</p>
    <p>memoSum: {sum} </p>;
  <p>usecallback: {set.size}</p>
    <p> nowtime: {nowtime}</p>
    <button onClick={() => setCount(count + 1)} > add 1 </button>
    <button onClick={() => setNowtime(Date.now())}> set now time </button>
  </>);
};
export default Home;

