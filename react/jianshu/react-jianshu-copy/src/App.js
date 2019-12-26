import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';
import {
  StyledComp
} from './style'

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
      	<BrowserRouter>
      		<div>
            
            <Header />
            <StyledComp complex>
              hhhhhh
            </StyledComp>
      			<Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
      			<Route path='/detail/:id' exact component={Detail}></Route>
      		</div>
      	</BrowserRouter>
      </Provider>
    );
  }
}

export default App;
