const isPro = process.env.NODE_ENV === 'production'

module.exports = {
  mongodb: {
      host: '127.0.0.1',
      database: 'essay',
      port: 27017,
      user: '',
      pass: '',
  },
  admin: {
    user: 'admin',
    pass: '123456',
    email: 'qq22337383@gmail.com',
  },
  app: {
      domain: isPro ? 'https://www.86886.wang' : 'http://127.0.0.1:3025',
      siteName: 'Essay',
  },

}