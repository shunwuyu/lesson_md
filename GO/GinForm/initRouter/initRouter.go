package initRouter

import (
	"GinForm/handler"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	router := gin.Default()
	router.LoadHTMLGlob("templates/*")
	index := router.Group("/")
	{
		index.Any("", handler.Index)
	}
	userRouter := router.Group("/user")
	{
		userRouter.POST("/register", handler.UserRegister)
	}
	return router
}

