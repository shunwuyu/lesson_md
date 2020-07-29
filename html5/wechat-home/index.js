var send = document.getElementById('send')
var parent = document.getElementById('content-items')
send.addEventListener('click', function() {
  console.log(parent)
  // var html = $('<li class="content-item">'+
  //               '<div class="pic">'+
  //                 '<img src="./images/user.jpg" alt="">'+
  //               '</div>'+
  //               '<div class="message">'+
  //                 '<p class="name">'+'dasdasd'+'</p>'+
  //                 '<p class="detail">'+'dasdasdavcxvzx'+'</p>'+
  //               '</div>'+
  //             '</li>')
  // html.appendTo(parent)

  var li = document.createElement("li")
  li.setAttribute('class', 'content-item')

  var divPic = document.createElement('div')
  divPic.setAttribute('class', 'pic')
  li.appendChild(divPic)

  var img = document.createElement('img')
  img.setAttribute('src', './images/user.jpg')
  divPic.appendChild(img)

  var message = document.createElement('div')
  message.setAttribute('class', 'message')
  li.appendChild(message)

  var p1 = document.createElement('p')
  p1.setAttribute('class', 'name')
  var p1Txt = document.createTextNode('蜗牛')
  p1.appendChild(p1Txt)
  message.appendChild(p1)

  var p2 = document.createElement('p')
  p2.setAttribute('class', 'detail')
  var p2Txt = document.createTextNode('明天中午12点开会')
  p2.appendChild(p2Txt)
  message.appendChild(p2)

  parent.appendChild(li)
  console.log(parent)
})