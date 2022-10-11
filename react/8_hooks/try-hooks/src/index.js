import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import About from './About';
import * as serviceWorker from './serviceWorker';

{/* <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
    </Route>
  </Router> */}
ReactDOM.render(
  <HashRouter>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
    </Route>
  </HashRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
