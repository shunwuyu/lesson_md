package main

import (
	"log"
	"net/http"
	"github.com/gin-gonic/gin"
)

func main() {
	g := gin.New()
	router.Load(
		g
	)
	log.Printf("Start to listening the incoming requests on http address: %s", ":8080")
	log.Printf(http.ListenAndServe(":8080", g).Error())
}