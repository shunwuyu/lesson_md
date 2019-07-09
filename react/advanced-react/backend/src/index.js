// const cookieParser = require('cookie-parser');
console.log('node');
require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const server = createServer();

// server