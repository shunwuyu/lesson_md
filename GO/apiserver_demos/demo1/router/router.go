package router

import (
	"net/http"
	"apiserver/handler/sd"
	"apiserver/router/middleware"
	"github.com/gin-gonic/gin"
)

func Load(g *gin.Engine, mw ...gin.HandlerFunc) *gin.Engine {
	g.Use(gin.Recovery)
}

