package main

import (
	"log"
	"github.com/gin-gonic/gin"
)

func main() {
	g := gin.New()

	log.Printf("Start to listening the incoming requests on http address: %s", ":8080");
}