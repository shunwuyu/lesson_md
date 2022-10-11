const express = require('express'),
	route = express.Router();

route.post('/login', (req, res) => {
  console.log(req.body, '+++++++++++++++');
  let {
		account,
		password,
	} = req.body || {};
  console.log(account, password, '-----------');
  // console.log(req.$USER_DATA)
  data = req.$USER_DATA.find(item => {
    return item.name == account  && item.password == password
  });
  console.log(data);
  if (data) {
    console.log(parseFloat(data.id));
    req.session.userId = parseFloat(data.id);
    res.send({
      code: 0,
			codeText: 'login success!',
			data: {
				id: data.id,
				name: data.name,
				phone: data.phone,
				pic: data.pic
			}
		});
    return ;
  }
  res.send( {
		codeText: 'account and password or code mismatch!',
    code: -1
	});
})


module.exports = route;