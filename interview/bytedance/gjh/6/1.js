function ajaxGet(url, callback, data) {
  //1.解析发送的数据
  data = data || {};
  //修复bug1:参数为空变为空对象
  var str = "";
  for (var i in data) {
      str += `${i}=${data[i]}&`;
      //拼接get的数据格式
  }
  //2.拼接url
  var d = new Date();
  // url = url + "?" + str;
  url = url + "?" + str + "__sjc=" + d.getTime();
  //修复bug2:拼接一个不会重复的时间戳,欺骗缓存;
  //时间戳的命名应该尽量复杂,防止后端读取到.
  //3. 准备ajax
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          callback(xhr.responseText);
      }
  }
  xhr.send();
}