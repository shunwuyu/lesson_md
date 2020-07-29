import React,{Component} from 'react';
import { Route,Link} from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = (props) => {
  return <div>Loadingc...</div>
};

const D = Loadable({
  loader: () => import('./d.js'),
  loading: Loading,
})
export default class C extends Component{
  render(){
    return <div>
      this is C
      <Route path="/C/D" component={D}/>
      <Link to="/C/D">to D</Link>
    </div>
  }
}