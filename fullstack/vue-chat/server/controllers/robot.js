const jwt = require("jsonwebtoken");
const secret = require("../config").secret;
const request = require("request-promise");

module.exports = async (ctx, next) => {
  const auth = ctx.get("Authorization");
  const token = auth.split(" ")[1];
  const payload = jwt.verify(token, secret);
  const date = {
    key: "937ade19ce07469bb2e4497203d029ff",
    info: "" + ctx.query.message,
    userid: "" + payload.id
  };

  const options = {
    method: "POST",
    uri: "http://www.tuling123.com/openapi/api",
    body: date,
    json: true // Automatically stringifies the body to JSON
  };

  const response = await request(options);
  console.log(response);
  ctx.body = {
    data: response
  };
};
