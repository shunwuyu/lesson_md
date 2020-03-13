const mongoose = require('mongoose');
// mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
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