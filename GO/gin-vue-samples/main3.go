package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"fmt"
)

func main() {
	var countryCapitalMap map[string]string
	countryCapitalMap = make(map[string]string)
	countryCapitalMap["France"] = "巴黎"
	countryCapitalMap[ "Italy" ] = "罗马"
	countryCapitalMap [ "Japan" ] = "东京"
  countryCapitalMap [ "India " ] = "新德里"
	
	for country := range countryCapitalMap {
		fmt.Println(country, "首都是", countryCapitalMap [country])
	}

	engine := gin.Default()
	engine.GET("/", func(context *gin.Context) {
		context.String(http.StatusOK, "hello gin get method")
	})
	engine.POST("/", func(context *gin.Context) {
		context.String(http.StatusOK, "hello gin post method")
	})
	// 添加 Put 请求路由  PUT用来改资源  POST 替掉原对象， 
	engine.PUT("/", func(context *gin.Context) {
		context.String(http.StatusOK, "hello gin put method")
	})
	// 添加 Delete 请求路由
	engine.DELETE("/", func(context *gin.Context) {
		context.String(http.StatusOK, "hello gin delete method")
	})
	// 添加 Patch 请求路由 修改部分
	engine.PATCH("/", func(context *gin.Context) {
		context.String(http.StatusOK, "hello gin patch method")
	})
	// 添加 Head 请求路由 没有返回
	// 在不获取资源的情况下，了解资源的一些信息，比如资源类型；
	// 通过查看响应中的状态码，可以确定资源是否存在；
	// 通过查看首部，测试资源是否被修改；
	engine.HEAD("/", func(context *gin.Context) {
		context.String(http.StatusOK, "hello gin head method")
	})
	// 添加 Options 请求路由
	// 用于获取当前URL所支持的方法。若请求成功，则它会在HTTP头中包含一个名为“Allow”的头，值是所支持的方法，如“GET, POST”。
	engine.OPTIONS("/", func(context *gin.Context) {
		context.String(http.StatusOK, "hello gin options method")
	})
	
	// 路由hi  方法是Any
	engine.Any("/hi", func(context *gin.Context) {
		context.String(http.StatusOK, "hello gin any method")
	})

	engine.Handle("GET", "/ping", func(context *gin.Context) {
		context.String(http.StatusOK, "hello gin handle get method")
	})
	
	engine.GET("/user", func(context *gin.Context) {
		name := context.Query("name")
		context.String(http.StatusOK, "hello "+name)
	})

	engine.POST("/user", func(context *gin.Context) {
		name := context.PostForm("name")
		context.String(http.StatusOK, "hello "+name)
	})

	// 获取请求body参数
	// raw  {"name": "ysw"}
	engine.PUT("/user", func(context *gin.Context) {
		var m map[string]string
		if err := context.BindJSON(&m); err != nil {
			context.String(http.StatusInternalServerError, "error data!")
			return
		}
		fmt.Println(m)
		context.String(http.StatusOK, "hello "+m["name"])
	})

	engine.GET("/user/:name", func(context *gin.Context) {
		name := context.Param("name")
		context.String(http.StatusOK, "hello "+name)
	})

	// 路由分组
	// /admin/hello
	admin := engine.Group("/admin")
	{
		admin.Any("/hello", func(context *gin.Context) {
			context.String(http.StatusOK, "hello we are admin group!")
		})
	}

	_ = engine.Run() 
}