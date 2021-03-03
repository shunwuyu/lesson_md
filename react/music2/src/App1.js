import React from 'react';

import {HomePage, AboutPage, ListPage, DetailPage} from './Pages/index';

import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom';

export default class App1 extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={HomePage}/>
          <Route exact path={'/about'} component={AboutPage}/>
          <Route exact path={'/list'} component={ListPage}/>
          <Route exact path={'/detail'} component={DetailPage}/>
        </Switch>
      </BrowserRouter>
    )
  }
}