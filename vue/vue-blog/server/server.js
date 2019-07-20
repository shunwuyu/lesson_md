require('./models')
const express = require('express')
const app = express()
const path = require('path')
const globalConfig = require('./config/global.config')
const requireAll = require('require-all')


const routes = requireAll({
    dirname: path.join(__dirname, './routes/'),
    filter: /(.+)\.route\.js$/,
});
console.log(routes);

for (const router of Object.values(routes)) {
    // console.log(router);
    app.use('/api', router)
}

app.listen(3025, () => {
    
    console.log('server started at 127.0.0.1:3025')
})

module.exports = app