package main

import (
	"GinHello/initRouter"
)
func main() {
	//router := gin.Default()
	//router.GET("/", func(context *gin.Context) {
	//	context.String(http.StatusOK, "hello gin")
	//})
	//router.Run()

	router := initRouter.SetupRouter()
	_ = router.Run()
}

