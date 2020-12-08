var mongoose =  require('mongoose'),
  Schema =    mongoose.Schema;

// 一般用来定义数据结构
const articleSchema = new Schema({
  title: String,
  date: Date,
  content: String,
});
const linkSchema = new Schema({
  name: String,
  href: String,
  newPage: Boolean
});
const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
  emailCode: String,
  createdTime: Number,
  articles: [articleSchema],
  links: [linkSchema]
});

const User = mongoose.model('User', userSchema);

mongoose.connect('mongodb://127.0.0.1:27017/test')
mongoose.set('debug', true)
var db = mongoose.connection
db.on('error', function () {
  console.log('db error')
})
db.once('open', function () {
  console.log('db opened')
})

// 新建一个用户
// new User({
//   name: 'tmp',
//   password: '0000',
//   email: 'shunwu2001@163.com',
//   emailCode: '12345',
//   createdTime: Date.now(),
//   articles: [],
//   links: []
// }).save(function(err) {

// })
// 查询
User.findOne({ email: 'shunwu2001@163.com' }, function(err, doc) {
  if (err) {
      return console.log(err)
  } 
  console.log(doc);
})

User.findOne({ name: 'tmp' }, function(err, doc) {
  if (err) {
    return console.log(err)
  } else if (doc) {
    var newArticleJSON = {
      title: '格局',
      date: new Date(),
      content: '一本好书'
    }
    doc.articles.push(newArticleJSON)
  }
  doc.save(function (err) {
    if (err) return console.log(err)
    console.log('OK');
  })
});