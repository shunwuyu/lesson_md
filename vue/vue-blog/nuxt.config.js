const globalConfig = require('./server/config/global.config')
process.env.DOMAIN = globalConfig.app.domain
module.exports = {
  mode: 'universal',
  plugins: [
    {
      src: '~/plugins/components',
      ssr: true,
    },
  ]
}