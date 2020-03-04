const mongoose = require('mongoose');
const chalk = require('chalk');
mongoose.connect('mongodb://localhost:27017/elm', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.once('open' ,() => {
	console.log(
    chalk.green('连接数据库成功')
  );
})

db.on('error', function(error) {
  console.error(
    chalk.red('Error in MongoDb connection: ' + error)
  );
  mongoose.disconnect();
});

module.exports = db;