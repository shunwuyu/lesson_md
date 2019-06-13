const request = require('./request.js');

module.exports = (name) => {
  name = encodeURIComponent(name);
  const url = 'https://api.imjad.cn/cloudmusic/?type=search&search_type=1&s=' + name;

  return request(url)
}