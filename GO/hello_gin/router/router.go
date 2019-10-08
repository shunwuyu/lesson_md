package router

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"./middleware"
	"../handler/sd"
)

func Load(g *gin.Engine, mw ...gin.HandlerFunc) *gin.Engine {
	g.Use(middleware.NoCache)
	g.NoRoute(func(c *gin.Context) {
		c.String(http.StatusNotFound, "The incorrect API route.")
	})
	svcd := g.Group("/sd")
	{
		svcd.GET("/health", sd.HealthCheck)
	}
	return g
}