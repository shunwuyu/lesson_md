const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

const verifyToken = (ctx, next) => {
    const authorization = ctx.header.authorization || '';
    if (authorization) {
        const token = authorization.replace('Bearer ', '');
        console.log(jwt.verify(token, config.secret));
    }
    
    next();
}

const authJwt = {
    verifyToken,
};
module.exports = authJwt;