package main

import "github.com/gin-gonic/gin"
import "fmt"
import "net/http"

// func main() {
//     r := gin.Default()
//     r.GET("/ping", func(c *gin.Context) {
//         c.JSON(200, gin.H{
//             "message": "pong",
//         })
//     })
//     r.Run(":8888") // listen and serve on 0.0.0.0:8080
// }

// func main() {
// 	router := gin.Default()

// 	// 此规则能够匹配/user/john这种格式，但不能匹配/user/ 或 /user这种格式
// 	router.GET("/user/:name", func(c *gin.Context) {
// 			name := c.Param("name")
// 			c.String(http.StatusOK, "Hello %s", name)
// 	})

// 	// 但是，这个规则既能匹配/user/john/格式也能匹配/user/john/send这种格式
// 	// 如果没有其他路由器匹配/user/john，它将重定向到/user/john/
// 	router.GET("/user/:name/*action", func(c *gin.Context) {
// 			name := c.Param("name")
// 			action := c.Param("action")
// 			message := name + " is " + action
// 			c.String(http.StatusOK, message)
// 	})

// 	router.Run(":8081")
// }

// func main() {
// 	router := gin.Default()

// 	// 匹配的url格式:  /welcome?firstname=Jane&lastname=Doe
// 	router.GET("/welcome", func(c *gin.Context) {
// 			firstname := c.DefaultQuery("firstname", "Guest")
// 			lastname := c.Query("lastname") // 是 c.Request.URL.Query().Get("lastname") 的简写

// 			c.String(http.StatusOK, "Hello %s %s", firstname, lastname)
// 	})
// 	router.Run(":8081")
// }

// func main() {
// 	router := gin.Default()

// 	router.POST("/form_post", func(c *gin.Context) {
// 			message := c.PostForm("message")
// 			nick := c.DefaultPostForm("nick", "anonymous") // 此方法可以设置默认值

// 			c.JSON(200, gin.H{
// 					"status":  "posted",
// 					"message": message,
// 					"nick":    nick,
// 			})
// 	})
// 	router.Run(":8081")
// }

func main() {
	router := gin.Default()
	// 给表单限制上传大小 (默认 32 MiB)
	// router.MaxMultipartMemory = 8 << 20  // 8 MiB
	router.POST("/upload", func(c *gin.Context) {
			// 单文件
			file, _ := c.FormFile("file")
			// log.Println(file.Filename)
			// path := utils.RootPath()
			// path = path + "avatar\\"
			// 上传文件到指定的路径
			c.SaveUploadedFile(file, file.Filename)

			c.String(http.StatusOK, fmt.Sprintf("'%s' uploaded!", file.Filename))
	})
	router.Run(":8081")
}