package main

import (
	"hello/initRouter"
)

func main() {
	router := initRouter.SetupRouter()
	_ = router.Run()
	// router := gin.Default()
	// router.GET("/", func(context *gin.Context) {
	// 	context.String(http.StatusOK, "hello gin")
	// })
	// router.Run()
}