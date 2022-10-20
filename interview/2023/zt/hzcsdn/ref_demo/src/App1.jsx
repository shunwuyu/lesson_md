import React, { useEffect, useRef } from 'react';
function App() {
  const h1Ref = useRef();
  useEffect(() => {
    console.log('useRef')
    console.log(h1Ref.current)
  }, [])
  return <h1 ref={h1Ref}>Hello World!</h1>
}
export default App;
