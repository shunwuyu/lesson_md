package main

import (
	"github.com/gin-gonic/gin" //引入gin框架
	"net/http"                 // http相关的代码引入
)

func main() {
	// 创建一个默认的Gin Web引擎
	engine := gin.Default()
	// 添加一个get的请求，对应的路径为/hello
	engine.GET("/hello", func(c *gin.Context) {
		// 简单地返回hello gin!文本，返回的Context-Type格式为text/plain
		c.String(http.StatusOK, "hello gin!")
	})
	// 启动引擎，默认监听8080端口
	_ = engine.Run() // listen and serve on 0.0.0.0:8080
}