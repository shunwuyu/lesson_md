package main

import (
	"github.com/gin-gonic/gin"
	"apiserver/router"
	"log"
)

func main() {
	g := gin.New()
	middlewares := []gin.HandlerFunc{}
	router.Load(g, 
		middlewares...,
	)
}