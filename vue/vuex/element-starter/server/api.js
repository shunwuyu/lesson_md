const express = require('express');
const router = express.Router();

router.get('/api/user/login',(req,res) => {
  const username = req.query.username;
  const password = req.query.password;
  res.send({
    status: 1
  });  
})

module.exports = router;