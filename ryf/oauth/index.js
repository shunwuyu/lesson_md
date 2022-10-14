const clientID = '55c3f63a24af079202f9';
const clientSecret = '10c98e0094a71a4e19b51add4a27f2859f619b95';

const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');
const route = require('koa-route');
const axios = require('axios');

const app = new Koa();
const main = serve(path.join(__dirname + '/public'));
const oauth = async ctx => {
  const requestToken = ctx.request.query.code;
  console.log('authorization code:', requestToken);

  const tokenResponse = await axios({
    method: 'post',
    url: 'https://github.com/login/oauth/access_token?' +
      `client_id=${clientID}&` +
      `client_secret=${clientSecret}&` +
      `code=${requestToken}`,
    headers: {
      accept: 'application/json'
    }
  });
  console.log('https://github.com/login/oauth/access_token?' +
  `client_id=${clientID}&` +
  `client_secret=${clientSecret}&` +
  `code=${requestToken}`);

  // const user_str = req.headers.user_info
  // console.log(tokenResponse.data.access_token, '++++++');
  const accessToken = tokenResponse.data.access_token;
  // console.log(`access token: ${accessToken}`);

  const result = await axios({
    method: 'get',
    url: `https://api.github.com/user`,
    headers: {
      accept: 'application/json',
      Authorization: `token ${accessToken}`
    }
  });
  
  const avatar_url = result.data.avatar_url;
  // console.log(result.data, '////////');
  console.log(`/welcome.html?avatar_url=${avatar_url}`)
  ctx.response.redirect(`/welcome.html?avatar_url=${avatar_url}`);
}
app.use(main);
app.use(route.get('/oauth/redirect', oauth));
app.listen(8080);

