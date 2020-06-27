import React from 'react';
import { BrowserRouter, Route, Link} from './react-router-dom/index';
function Home() {
  return (
    <div>
      Home
    </div>
  )
}
function Detail() {
  return (
    <div>
      detail
    </div>
  )
}
function MoreDetail() {
  return (
    <div>
      MoreDetail
    </div>
  )
}
function App() {
  return (
    <>
    <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/detail">Detail</Link></li>
        <li><Link to="/detail/123">MoreDetail</Link></li>
      </ul>
      <Route path="/" component={Home}/>
      <Route path="/detail" component={Detail}/>
      <Route path="/detail/123" component={MoreDetail} />
    </BrowserRouter>
    </>
  );
}

export default App;
