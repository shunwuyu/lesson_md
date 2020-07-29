'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.get('/json', (req, res) => {
    res.json({
        code: 0,
        data :'This is message from node container'
    })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
