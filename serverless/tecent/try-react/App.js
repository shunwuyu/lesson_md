import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Admin from "./admin";
import Home from './pages/Home'
import 'antd/dist/antd.css';


export default class App extends Component {
  constructor(props) {
    super(props)
  }
  /**
   * Render
   */

  render() {
    return (
      <Router>
        <Admin>
          <Switch>
            <Route path="/" component={Home}/>
          </Switch>
        </Admin>
      </Router>
    )
  }
}
