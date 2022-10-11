import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Login.css';
import { doLogin } from '../../store/reducers/personal/actions';

const Login  = (props) => {
  const { getLoginDispatch} = props;
  const [account, setAccount] = useState('');
  // console.log(setAccount);
  const [password, setPassword] = useState('')
  const handleLogin = async () => {
    if (account.length === 0 ) {
      window.alert('账号不能为空')
      return;
    }
    if (!/^\w{6,16}$/.test(password)) {
        window.alert('密码6-16位')
        return;
    }

    getLoginDispatch(account, password)
    

  }
  return (
    <section className='loginBox'>
      <div className='header'>
          <h4>欢迎登录嘉新有品</h4>
      </div>
      <div className="main">
      <>
        <div className='inpBox'>
            <input type='text' placeholder='用户名/手机号码' value={account} onChange={ev => setAccount(ev.target.value)} />
        </div>
        <div className='inpBox'>
            <input type='password' placeholder='密码' value={password}  onChange={ev => setPassword(ev.target.value)} />
        </div>
        <button className='submit' onClick={handleLogin}>立即登录</button>
      </>
      </div>
      <div className='register'>
          <Link to='/personal/register'>立即注册</Link>
          <a>忘记密码</a>
      </div>
      <div className='other'>
        <span>其它登录方式</span>
        <div>
            <a></a>
            <a></a>
            <a></a>
        </div>
        <div className='footer'>
          <span>首页</span>|<span>简体</span>|<span>English</span>|<span>常见问题</span>|<span>隐私政策</span>
        </div>
      </div>
    </section>
  )
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLoginDispatch(account, password) {
      dispatch(doLogin(account, password));
    }
  }
}

export default connect(null, mapDispatchToProps)(Login);