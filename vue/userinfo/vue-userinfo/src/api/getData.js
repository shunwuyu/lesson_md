import axios from 'axios';

export default {
  doLogin({username, password}, cb) {
    // console.log(username, password)
    // const postData = JSON.stringify({
    //   username,
    //   password
    // });
    // console.log(postData)
    axios.post(`api/login`, {
      username: username,
      password: password
    })
    .then(res=>{
      cb(res.data)
    })
  }
}