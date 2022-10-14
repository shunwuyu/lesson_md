import { useState } from 'react'
import { connect } from 'react-redux';
import Login from './pages/Login';
import './App.css';

function App(props) {
  const { login } = props;
  console.log(login)
  return (
    <Login />
  )
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // loginDispatch() {
    //   return dispatch(loginAction)
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
