package initRouter

import (
	"GinHello/handler"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	router := gin.Default()
	router.LoadHTMLGlob("templates/*")
	index := router.Group("/")
	{
		index.Any("", handler.Index)
	}
	return router
}
