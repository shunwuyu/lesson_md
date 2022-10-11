package main

import (
	"net/http"
	// "log"
	// "fmt"
	// "os"
	"github.com/gin-gonic/gin"
)

func main() {
    r := gin.Default()
    // r.GET("/ping", func(c *gin.Context) {
    //     c.JSON(200, gin.H{
    //         "message": "pong",
    //     })
		// })
		// r.GET("/user/:name", func(c *gin.Context) {
		// 	name := c.Param("name")
		// 	c.String(http.StatusOK, "Hello %s", name)
		// })
		// 匹配的url格式:  /welcome?firstname=Jane&lastname=Doe
		// r.GET("/welcome", func(c *gin.Context) {
		// 	firstname := c.DefaultQuery("firstname", "Guest")
		// 	lastname := c.Query("lastname") // 是 c.Request.URL.Query().Get("lastname") 的简写

		// 	c.String(http.StatusOK, "Hello %s %s", firstname, lastname)
		// })
		
		// r.POST("/form_post", func(c *gin.Context) {
		// 	message := c.PostForm("message")
		// 	nick := c.DefaultPostForm("nick", "anonymous") // 此方法可以设置默认值

		// 	c.JSON(200, gin.H{
		// 			"status":  "posted",
		// 			"message": message,
		// 			"nick":    nick,
		// 	})
		// })

		// POST /post?id=1234&page=1 HTTP/1.1
		// Content-Type: application/x-www-form-urlencoded
		// name=manu&message=this_is_great
		// r.POST("/post", func(c *gin.Context) {

		// 	id := c.Query("id")
		// 	page := c.DefaultQuery("page", "0")
		// 	name := c.PostForm("name")
		// 	message := c.PostForm("message")

		// 	fmt.Printf("id: %s; page: %s; name: %s; message: %s", id, page, name, message)
		// })
		
    // r.LoadHTMLGlob("templates/*")
    // //router.LoadHTMLFiles("templates/template1.html", "templates/template2.html")
    // r.GET("/index", func(c *gin.Context) {
    //     c.HTML(http.StatusOK, "index.tmpl", gin.H{
    //         "title": "Main website",
    //     })
		// })
		
		r.LoadHTMLGlob("templates/**/*")
    r.GET("/posts/index", func(c *gin.Context) {
        c.HTML(http.StatusOK, "posts/index.tmpl", gin.H{
            "title": "Posts",
        })
    })
    r.GET("/users/index", func(c *gin.Context) {
        c.HTML(http.StatusOK, "users/index.tmpl", gin.H{
            "title": "Users",
        })
    })

    r.Run() // listen and serve on 0.0.0.0:8080
}