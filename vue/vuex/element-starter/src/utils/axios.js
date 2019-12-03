import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import {
	cbs,
	gbs
} from 'config/';

Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = gbs.host; 

export default function ({
  type,
  path,
  data,
  fn,
  errFn,
  headers,
  opts
} = {}) {
  var options = {
    method : type,
    url    : path,
    headers: headers && typeof headers === 'object' ? headers : {}
  };
  options[type === 'get' ? 'params' : 'data'] = data;

  //axios内置属性均可写在这里
  if (opts && typeof opts === 'object') {
    for (var f in opts) {
      options[f] = opts[f];
    }
  }

  //发送请求  一般请求，还是表格类型的请求.因为其返回的数据结构是根据api中设定的，这里只需返回就行；
  Vue.axios(options).then((res) => {
    fn(res.data);
  }).catch((error) => {
    errFn(error);
  });
} 