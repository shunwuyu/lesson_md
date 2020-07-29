const mongoose = require('mongoose')
// mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://127.0.0.1:27017/mall', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.once("open", function () {
    console.log("数据库连接成功");
})
db.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});

db.on('disconnected', function () {
    console.log('数据库连接断开');
})

module.exports = db;
