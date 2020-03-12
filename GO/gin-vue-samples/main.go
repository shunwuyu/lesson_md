package main

import (
	"github.com/gin-gonic/gin"
	"github.com/shunwuyu/gin-vue-learn/router"
)

func main() {
	engine := gin.Default()
	router.Route(engine)
	_ = engine.Run()
}