package router

import (
	"github.com/gin-gonic/gin"
	"github.com/shunwuyu/gin-vue-learn/controller"
)

func Route(engine *gin.Engine) {
	engine.GET("/", controller.IndexGetAction)
	engine.POST("/", controller.IndexPostAction)
	engine.PUT("/", controller.IndexPutAction)
	engine.DELETE("/", controller.IndexDeleteAction)
}