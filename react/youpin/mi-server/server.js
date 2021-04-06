const express = require('express');
const CONFIG = require('./config');
const session = require('express-session');
var bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
function pReadFile(filePath){
	return new Promise(function(resolve,reject){
	fs.readFile(filePath,'utf8',function(err,data){
		if(err){
			reject(err)
		}else {
			resolve(data)		
		}
	})
 })
}
app.use(bodyParser.json()); 
// //解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());
app.use(session(CONFIG.SESSION));

app.listen('9999', () => {
	console.log(`SERVICE IS OK ===>`);
});

console.log(CONFIG.CROS);

app.use((req, res, next) => {
	const {
		ALLOW_ORIGIN,
		CREDENTIALS,
		HEADERS,
		ALLOW_METHODS
	} = CONFIG.CROS;
	res.header("Access-Control-Allow-Origin",'http://localhost:3000');
	res.header("Access-Control-Allow-Credentials", true);
	res.header("Access-Control-Allow-Headers", 'Content-Type,Content-Length,Authorization, Accept,X-Requested-With');
	res.header("Access-Control-Allow-Methods", 'PUT,POST,GET,DELETE,OPTIONS,HEAD');
	req.method === 'OPTIONS' ? res.send('CURRENT SERVICES SUPPORT CROSS DOMAIN REQUESTS!') : next();
});



app.use(async (req, res, next) => {
	// 用户表
	req.$USER_DATA = JSON.parse(await pReadFile('./mock/user.json'));
  req.$PRODUCT_DATA = JSON.parse(await pReadFile('./mock/product.json'));
  next();
})

app.use(
  '/product', productRouter,
);

app.use(
  '/user', userRouter,
);
