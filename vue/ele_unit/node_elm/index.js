// import express from 'express';
const express = require('express')
const router= require('./routes/index.js')
const cookieParser = require('cookie-parser')
const db = require('./mongodb/db.js');
const config = require('config-lite')(__dirname);
const session = require('express-session');
const connectMongo = require('connect-mongo');
// import router from './routes/index.js';
const app = express();



const MongoStore = connectMongo(session);
app.use(cookieParser());
app.use(session({
	name: config.session.name,
	secret: config.session.secret,
	resave: true,
	saveUninitialized: false,
	cookie: config.session.cookie,
	store: new MongoStore({
	url: config.url
})
}))

app.all('*', (req, res, next) => {
  const { origin, Origin, referer, Referer } = req.headers;
  const allowOrigin = origin || Origin || referer || Referer || '*';
	res.header("Access-Control-Allow-Origin", allowOrigin);
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true); //可以带cookies
	res.header("X-Powered-By", 'Express');
	if (req.method == 'OPTIONS') {
  	res.sendStatus(200);
	} else {
    next();
	}
});

router(app);
app.listen("3000", () => {
	console.log('我在这里')
});
