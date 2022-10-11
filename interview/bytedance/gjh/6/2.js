function ajaxPost(url, callback, data) {
  data = data || {};
  var str = "";
  for (var i in data) {
      str += `${i}=${data[i]}&`;
  }
  //不必拼接时间戳
  var xhr = new XMLHttpRequest();
  //区别2
  xhr.open("POST", url, true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          callback(xhr.responseText);
      }
  }
  //区别3:发送前设置数据格式
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  //区别1:数据发送在send内
  xhr.send(str);
}