import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Index() {
  return (
    <div>Index Page</div>
  )
}

function List() {
  return (
    <div>List Page</div>
  )
}

function App() {
  const [ count, setCount ] = useState(0);
  useEffect(() => {
    console.log(`useEffect=>You clicked ${count} times`);
    return () => {
      console.log('====================');
    }
  }, [count])
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => { setCount(count+1)}}>click me</button>
      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list/">列表</Link></li>
        </ul>
        <Route path="/" exact component={Index}></Route>
        <Route path="/list/" component={List}></Route>
      </Router>
    </div>
  )
}

export default App