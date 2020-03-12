package main

import (
	"GinForm/initRouter"
)

func main() {
	router := initRouter.SetupRouter()
	router.Run()
}