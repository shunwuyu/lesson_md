import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './store/index'
import routes from './routes/index.js';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        { renderRoutes (routes) }
      </HashRouter>
    </Provider>
  );
}

export default App;
