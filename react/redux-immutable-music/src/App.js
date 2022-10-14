import logo from './logo.svg';
import { Provider } from "react-redux";
import store from "./store/index";
import './App.css';
import Login from './application/User/Login';
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Login />
      </HashRouter>
    </Provider>
  );
}

export default App;
