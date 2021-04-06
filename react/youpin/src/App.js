import logo from './logo.svg';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import FooterNav from './components/FooterNav';
import Detail from './pages/home/Detail';
import Personal from './pages/personal';

/* 导入公共样式资源 */
import './assets/reset.min.css';
import './assets/common.css';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/detail/:id' component={Detail} />
        <Route path='/personal' component={Personal} />
      </Switch>
      <FooterNav></FooterNav>
    </>
  );
}

export default App;
