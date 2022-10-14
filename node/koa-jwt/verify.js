/**
 * @file 处理验证的中间件
 */

const jwt = require("jsonwebtoken");
const secret = 'secret';

module.exports = async function(ctx, next) {
	// 同步验证
	const auth = ctx.request.headers['authorization'];
  const token = auth.split(' ')[1];
	try {
		//解码取出之前存在payload的user_id 和 name
    const payload = jwt.verify(token, secret);
    console.log('payload------', payload);
		ctx.user_id = payload.id;
		await next()
	} catch (err) {
    ctx.body = {
      code: 300
    }
	}
}