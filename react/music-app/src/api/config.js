/**
 * c h5
 * u pc
 */
/**
 * pc
 * -: getUCGI6208880207673504
g_tk: 5381
loginUin: 0
hostUin: 0
format: json
inCharset: utf8
outCharset: utf-8
notice: 0
platform: yqq.json
needNewCode: 0
data: {"new_album":{"module":"newalbum.NewAlbumServer","method":"get_new_album_info","param":{"area":1,"start":0,"num":20}},"new_album_tag":{"module":"newalbum.NewAlbumServer","method":"get_new_album_area","param":{}},"comm":{"ct":24,"cv":0}}
 */
/**
 * h5
 * _: 1561776392468
g_tk: 5381
uin: 0
format: json
inCharset: utf-8
outCharset: utf-8
notice: 0
platform: h5
needNewCode: 1
 */
const URL = {
  /*推荐轮播*/
  carousel: "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",
  /*最新专辑*/
  newalbum: "https://u.y.qq.com/cgi-bin/musicu.fcg",
  /*专辑信息*/
  albumInfo: "https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg",
  /*歌曲vkey*/
  songVkey: "https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg"

};

const PARAM = {
  format: "jsonp",
  inCharset: "utf-8",
  outCharset: "utf-8",
  notice: 0
};

const OPTION = {
  param: "jsonpCallback",
  prefix: "callback"
};

const CODE_SUCCESS = 0;

export {URL, PARAM, OPTION, CODE_SUCCESS};
