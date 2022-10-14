import axios from './axios';
import md5 from 'md5';

export default {
  loginPOST(account, password) {
    console.log(account, md5(password), '++++--------------')
		return axios.post('/user/login', {
        account:account,
			  password: md5(password)
      }
		);
	},
}