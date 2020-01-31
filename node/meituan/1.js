function getUrlWithData(url, data) {
  let dataStr = '';
  Object.keys(data).forEach(key => {
    dataStr += key + '=' + data[key] + '&';
  });
  if (dataStr !== '') {
    //求最后一个
    dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
    url = url + '?' + dataStr;
  }
  return url;
}

console.log(getUrlWithData('http://www.baidu.com', {note: '744959576', a : 1}))