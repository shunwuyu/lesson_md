package main

import (
	"fmt"

	"github.com/shunwuyu/lesson_md/gin/go-gin-example/pkg/setting"
)

//

func main() {
	// gin.setMode(setting.ServerSetting.RunMode)
	// endPoint := fmt.Sprintf(":%d", setting.ServerSetting.HttpPort)
	fmt.Print(setting.ServerSetting.HttpPort)
	// server := &http.Server{
	// 	Addr: endPoint,
	// }
	// log.Printf("[info] start http server listening %s", endPoint)
	// server.ListenAndServe()
}
