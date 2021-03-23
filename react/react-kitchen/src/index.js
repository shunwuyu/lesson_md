import React from 'react';
import ReactDOM from 'react-dom';
// 取别名
import './index.css';
import './common.css';
import './data.js';
import store from './redux/store'
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
