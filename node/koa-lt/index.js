let submit = document.getElementById("submit"),
    pl = document.getElementById("pl");
// 很重要 必须写，判断浏览器是否支持websocket
let CreateWebSocket = (() => {
    return (urlValue) => {
        if (window.WebSocket) return new WebSocket(urlValue);
        if (window.MozWebSocket) return new MozWebSocket(urlValue);
        return false;
    }
})()
// 实例化websoscket websocket有两种协议ws(不加密)和wss(加密)
let webSocket = CreateWebSocket(`ws://127.0.0.1:3000`);
webSocket.onopen = evt => {
    addMsg(1, '你好，欢迎进入实时聊天室！')
}
webSocket.onmessage = evt => {
    // 这是服务端返回的数据
    addMsg(1, evt.data);
    submit.innerHTML = '发送';
}
// input事件发送数据
submit.onclick = (e) => {
    if (e.target.innerHTML == '回复中...') {
        return false
    }
    e.target.innerHTML = '回复中...';
    const str = document.getElementById("pl").value;
    webSocket.send(str);
    addMsg(2, str);
}
// 绑定回车事件
function keyEnter() {
    if (event.keyCode == 13) {
        document.getElementById("submit").click();
    }
}
// 添加消息
function addMsg(type, msg) {
    let li = document.createElement('li');
    // 1机器人/2自己
    if (type == 1) {
        li.classList.add('computer-say');
        li.innerHTML = `<span class="sayman">机器人</span><span class="computer say">${msg}</span>`;
    } else {
        li.classList.add('my-say');
        li.innerHTML = `<span class="computer say">${msg}</span><span class="sayman">我</span>`;
        pl.value = '';
    }
    document.getElementById('view').appendChild(li);
    document.getElementById('ulView').scrollTo(0, document.getElementById('view').clientHeight);
}
