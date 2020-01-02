import express from 'express';
import config from './config'
import router from './routes/index.js';

const app = express();

router(app);

app.listen(config.port);

module.exports = app;