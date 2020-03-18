const express = require('express');
// const db = require('./db/db.js');
const router = require('./routes/index.js');
console.log(router)
const app = express();
router(app);
app.listen('3000', () => {
	console.log('启用了');
});