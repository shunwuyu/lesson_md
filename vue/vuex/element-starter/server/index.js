const express = require('express');
const api = require('./api');
const http = require('http');
const path = require('path');
const fs = require('fs');
const app = express();
app.use(api);  


app.set('port',process.env.PORT || 80);

http.createServer(app).listen(app.get('port'),'0.0.0.0',function(){
	console.log('Express server listening on port '+app.get('port'));
})
