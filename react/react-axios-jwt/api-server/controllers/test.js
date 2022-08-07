const jwt = require("jsonwebtoken");
const user = ctx => {
    console.log(ctx.session, '////');
    ctx.body = 'fdfdf'
}
module.exports = {
    user
}