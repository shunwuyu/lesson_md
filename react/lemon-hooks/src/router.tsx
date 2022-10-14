import * as React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container-fluid">
          fddf
          {/* <Route component={App} /> */}
        </div>
      </Router>
    </Provider>
  );
}