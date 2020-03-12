package main

import (
	"GoFile/initRouter"
)

func main() {
	// log.Panicln("发生错误", "flysnow_org");
	// log.Printf("飞雪无情的微信公众号：%s\n","flysnow_org")
	router := initRouter.SetupRouter()
	router.Run();
	
}