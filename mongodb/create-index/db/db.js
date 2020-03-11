const mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.1.4:27017/elm', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.once('open' ,() => {
	console.log('连接数据库成功');
})

db.on('error', function(error) {
  console.error('Error in MongoDb connection: ' + error);
  mongoose.disconnect();
});

module.exports = db;