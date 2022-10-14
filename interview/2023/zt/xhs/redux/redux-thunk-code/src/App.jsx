import { useState } from 'react'
import { connect } from 'react-redux'
import { changeLoginAction, asyncChangeLoginAction } from './store/actions/login'

function App(props) {
  const {login, changeLogin, asyncChangeLogin} = props
  return (
    <div className="App">
      {!login && <div>未登录</div>} <button onClick={changeLogin}>登录</button>
      <button onClick={asyncChangeLogin}>异步登录</button>
      {login && <div>已经登录</div>}
    </div>
  )
}
const mapStateToProps = (state) => ({
  login: state.login.login
})
const mapDispatchToProps = (dispatch) => ({
  changeLogin() {
    dispatch(changeLoginAction())
  },
  asyncChangeLogin() {
    dispatch(asyncChangeLoginAction())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
