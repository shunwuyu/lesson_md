const express = require('express');
const app = express();

const port = process.env.PORT || 4000; // 后加2

app.get('/', (req, res) => res.send('你好'));
// app.listen(4000, () => console.log('Listening on port 4000!'));
app.listen(port, () =>  console.log(`Server running at http://localhost:${port}`));