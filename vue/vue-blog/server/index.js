const {
    Nuxt,
    Builder,
} = require('nuxt')
require('./models')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const requireAll = require('require-all')
const cors = require('cors')
const path = require('path')
app.enable('trust proxy')
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')
const globalConfig = require('./config/global.config')

app.use(cors({ origin: globalConfig.app.domain, credentials: true }))

const routes = requireAll({
    dirname: path.join(__dirname, './routes/'),
    filter: /(.+)\.route\.js$/,
})
console.log(routes);
for (const router of Object.values(routes)) {
    app.use('/api', router)
}

async function start() {
    const nuxt = new Nuxt(config)

    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    }

    app.use(nuxt.render)

    app.listen(3025, () => {
        console.log('server started at 127.0.0.1:3025')
    })
}
start()
