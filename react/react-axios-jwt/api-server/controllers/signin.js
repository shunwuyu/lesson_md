const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const signin = (ctx) => {
    console.log(ctx.request.body);
    const { username, password } = ctx.request.body
    if (username == 'admin' && password == '123456') {
        const token = jwt.sign({ id: 1234221 }, config.secret, {
            expiresIn: 86400, // 24 hours
        });
        ctx.session.token = token;
        
        ctx.body = {
            id: 1234221,
            username,
            email: '754211506@qq.com',
            roles: ['admin', 'editor'],
            accessToken: token
        }
        return false;
    }
    ctx.body = 'hello, sigin'
}
module.exports = {
    signin
}