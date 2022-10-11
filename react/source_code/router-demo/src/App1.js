import logo from './logo.svg';
import './App.css';
// import { HashRouter, Route, Link } from 'react-router-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
const Foo = () => 'foo';
const Bar = () => 'bar';


function App() {
  return (
    <div>
      {/* <HashRouter> */}
      <BrowserRouter>
        <div>
          <Link to="/foo">foo</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/bar">bar</Link>
        </div>
        <Route path="/foo" component={Foo}/>
        <Route path="/bar" component={Bar}/>
      </BrowserRouter>
      {/* </HashRouter> */}
    </div>
  );
}

export default App;
