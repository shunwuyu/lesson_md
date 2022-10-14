const { verifyToken } = require("../middleware/authJwt");
const router = require('koa-router')();
const controller = require('../controllers/test');

router.get("/user", verifyToken, controller.user)

module.exports=router.routes();