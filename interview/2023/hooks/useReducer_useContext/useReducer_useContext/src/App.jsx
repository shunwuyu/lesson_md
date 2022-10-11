import React, { useContext} from 'react';
import AuthContext from './store/auth-context';
import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <MainHeader />
      {!authCtx.isLoggedIn && <Login />}
    </>
  )
}

export default App;