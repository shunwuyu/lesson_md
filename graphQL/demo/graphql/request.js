const query = require('./server');

query('{ hello }')
  .then(res => {
    console.log(res);
  })