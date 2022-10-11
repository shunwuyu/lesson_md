import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Single from './components/Single';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/beer/:beerId/:beerSlug" component={Single} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
