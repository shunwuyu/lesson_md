const express = require('express');
const db = require('./db/db.js');
const connectMongo = require('connect-mongo');
const router = require('./routes/index.js');
// console.log(router)
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = connectMongo(session);
app.use(cookieParser());
app.use(session({
  name: 'ysw-vue-user',
	secret: 'ysw-123-11-dddv',
	resave: true,
	saveUninitialized: false,
	cookie: {
		httpOnly: true,
		secure:   false,
		maxAge:   365 * 24 * 60 * 60 * 1000,
	},
	store: new MongoStore({
  	url: 'mongodb://localhost:27017/test'
	})
}))

router(app);
app.listen('3000', () => {
	console.log('启用了');
});