package main

import (
	"GinDB/initRouter"
)

func main() {
	router := initRouter.SetupRouter()
	_ = router.Run()
}