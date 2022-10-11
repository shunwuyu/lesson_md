const router = require('koa-router')();
const controller = require('../controllers/signin');

router.post("/signin", controller.signin)

module.exports=router.routes();