package main

import (
	"log"
	"net/http"
	"./router"
	"github.com/gin-gonic/gin"
)

func main() {
	g := gin.New()
	middlewares := []gin.HandlerFunc{}
	router.Load(
		g,
		middlewares...
	)
	
	log.Printf("Start to listening the incoming requests on http address: %s", ":8080")
	log.Printf(http.ListenAndServe(":8080", g).Error())
}