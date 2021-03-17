import React from 'react';
import { BrowserRouter } from "react-router-dom";
// import { Switch, Route } from "react-router-dom";
// import HookMovie from './components/HookMovie';
import Routes from './routes';
import Frame from './layout/Frame';  

function App() {
  return (<BrowserRouter>
    <Frame>
        {/* <Switch>
            <Route path="/">
                <HookMovie/>
            </Route>

        </Switch> */}
      <Routes/>
    </Frame>
  </BrowserRouter>
  );
}

export default App;
