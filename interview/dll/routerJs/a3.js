import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import ReactDom from 'react-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const B = Loadable({
  loader: () => import(/* webpackChunkName: "b" */ './b.js'),
  loading: Loading,
})
const C = Loadable({
  loader: () => import(/* webpackChunkName: "c" */'./c.js'),
  loading: Loading,
})
export default class A extends Component{
  render(){
    return <div>
      <Router>
        <div>
          <Route path="/B" component={B}/>
          <Route path="/C" component={C}/>
          <Link to="/B">to B</Link><br/>
          <Link to="/C">to C</Link>
        </div>
      </Router>
    </div>
  }
}
ReactDom.render(<A/>,document.querySelector("#btn"))
if (module.hot) {
     module.hot.accept()
}
