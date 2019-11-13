package initRouter

import (
	"GoFile/handler"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	router := gin.Default()
	router.LoadHTMLGlob("templates/*")
	router.StaticFile("/favicon.ico", "./favicon.ico")
	router.Static("/statics", "./statics/")
	// router.StaticFS("/avatar", http.Dir(utils.RootPath() + "avatar/"))
	index := router.Group("/")
	{
		index.Any("", handler.Index)
	}
	return router
}