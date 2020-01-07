import React, {
  useEffect, useState, useRef
} from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  const ref = useRef();
  
  // useEffect(() => {
  //   ref.current = () => {
  //     setCount(count + 1);
  //   }
  // })
  useEffect(() => {
    const id = setInterval(() => {
      // ref.current();
      setCount(count => count + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}

export default Counter;