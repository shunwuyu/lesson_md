import React, { useEffect } from "react";
import * as actionCreators from "./store/actionCreators";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
const Login = props => {
  const { userInfo, LoginByPhoneDispatch, loginStatus,history } = props;
  console.log(userInfo);
  useEffect(() => {
    if(loginStatus) {
      history.push("/recommend")
    }
    LoginByPhoneDispatch('19979113182', 'codingdream123');
  }, [loginStatus])
  return (
    <>
      Login as  { userInfo.data?userInfo.data.account.userName:'' }
    </>
  )
}

const mapStateToProps = state => ({
  userInfo: state.getIn(["user", "userInfo"]),
  loginStatus: state.getIn(["user", "loginStatus"])
})

const mapDispatchToProps = dispatch => {
  return {
    LoginByPhoneDispatch(phone, password) {
      dispatch(actionCreators.loginByPhone(phone, password));
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(withRouter(Login)));