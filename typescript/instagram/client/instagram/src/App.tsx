import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Login } from './pages/login/login.tsx';

function App() {
  return (
    <HashRouter>
      <Switch>
        {/* <Route exact={true} path="/" component={PageA} /> */}
        <Route path="/login" component={Login} />
      </Switch>
    </HashRouter>
  );
}

export default App;
