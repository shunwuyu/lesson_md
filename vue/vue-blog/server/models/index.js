const mongoose = require('mongoose')
const globalConfig = require('../config/global.config')
const requireAll = require('require-all');
const path = require('path');

requireAll({
    dirname: path.join(__dirname, './'),
    filter: /(.+)\.model\.js$/,
    recursive: true,
})

// const User = mongoose.model('User')
const mongoUrl = `mongodb://${globalConfig.mongodb.host}:${globalConfig.mongodb.port}/${globalConfig.mongodb.database}`
const User = mongoose.model('User')
const Article = mongoose.model('Article')

mongoose.Promise = global.Promise
mongoose.connection
  .openUri(mongoUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      user: globalConfig.mongodb.user,
      pass: globalConfig.mongodb.pass,
  })
  .once('open', async () => {
      console.log('opened');
      let user = await User.findOne({
          role: 'superAdmin',
      }).exec()
      // console.log(user, '---------------');
      if (!user) {
        user = new User({
            role: 'superAdmin',
            username: globalConfig.admin.user,
            password: globalConfig.admin.pass,
            email: globalConfig.admin.email,
            loginMode: 'register',
            avatar: `${globalConfig.app.domain}/public/avatar/default.jpg`,
        })
        const article = new Article({
          user: user.id,
          title: '欢迎使用 Essay 博客系统',
          content: '当您看到这篇文章，说明系统已经安装成功，接下来开始您的创作之旅吧',
          isPublish: true,
        })

        user.save()
        article.save()
      }
      const article = new Article({
          user: user.id,
          title: '欢迎使用 Essay 博客系统',
          content: '当您看到这篇文章，说明系统已经安装成功，接下来开始您的创作之旅吧',
          isPublish: true,
        })
        article.save()
  })
  .on('error', (error) => {
      console.warn('数据库连接失败', error)
  })
