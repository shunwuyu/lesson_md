package controllers

import (
	"github.com/astaxie/beego"
	"github.com/gorilla/websocket"
)

type MsgController struct {
	beego.Controller
}

func (m *MsgController) Conn() {
	userid, _ = m.GetInt("userid", 0)
	ws, err := websocket.Upgrade(m.Ctx.ResponseWriter, m.Ctx.Request, nil, 1024, 1024)
	if _, ok = err.(websocket.HandshakeError); ok {
		beego.Error(m.Ctx.ResponseWriter, "不是websocket连接", 400)
	} else if err != nil {
		beego.Error("无法设置websocket连接:", err)
		return
	}

	client := logic.NewUser(userid, ws, make(chan *logic.SendMessage, 256))
	client.Join(ws)
}

