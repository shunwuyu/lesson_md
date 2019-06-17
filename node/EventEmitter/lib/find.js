const request= require('./request')

module.exports = async (id) => {
  const url = 'https://api.imjad.cn/cloudmusic/?type=song&br=128000&id=' + id
  const { data } = await request(url)
  return data
}
