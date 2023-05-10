import {Nuxt} from 'nuxt'
import express from 'express'

import api from './api'
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3005
var bodyParser = require('body-parser')

app.all('*', function(req, res, next) {
  console.log(11111)
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('port', port)

// Import API Routes
app.use('/api', api)
// Start nuxt.js
async function start() {
    // Import and Set Nuxt.js options
    let config = require('../nuxt.config.js')
    config.dev = !(process.env.NODE_ENV === 'production')
        // Instanciate nuxt.js
    const nuxt = await new Nuxt(config)
        // Add nuxt.js middleware
    app.use(nuxt.render)
        // Build in development
    if (config.dev) {
        try {
            await nuxt.build()
        } catch (error) {
            console.error(error) // eslint-disable-line no-console
            process.exit(1)
        }
    }
    // Listen the server
    app.listen(port, host)
    console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()