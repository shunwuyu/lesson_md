package main

import (
    "fmt"
    "net/http"
    "os"
    "path/filepath"
    "text/template"

    "github.com/gin-gonic/gin"
)

type Product struct {
    Id   int64  `json:"id"` //字段一定要大写不然各种问题
    Name string `json:"name"`
}

//模拟从数据库查询过来的消息
var allproduct []*Product = []*Product{
    {1, "苹果手机"},
    {2, "苹果电脑"},
    {3, "苹果耳机"},
}
var (
    //生成的Html保存目录
    htmlOutPath = "./tem"
    //静态文件模版目录
    templatePath = "./tem"
)

func main() {
    r := gin.Default()
    r.LoadHTMLGlob("tem/*")
    r.GET("/index", func(c *gin.Context) {
        GetGenerateHtml()
        c.HTML(http.StatusOK, "index.html", gin.H{"allproduct": allproduct})
    })
    r.GET("/index2", func(c *gin.Context) {
        c.HTML(http.StatusOK, "htmlindex.html", gin.H{})
    })
    r.Run()
}

//生成静态文件的方法
func GetGenerateHtml() {
    //1.获取模版
    contenstTmp, err := template.ParseFiles(filepath.Join(templatePath, "index.html"))
    if err != nil {
        fmt.Println("获取模版文件失败")
    }
    //2.获取html生成路径
    fileName := filepath.Join(htmlOutPath, "htmlindex.html")
    //4.生成静态文件
    generateStaticHtml(contenstTmp, fileName, gin.H{"allproduct": allproduct})
}

//生成静态文件
func generateStaticHtml(template *template.Template, fileName string, product map[string]interface{}) {
    //1.判断静态文件是否存在
    if exist(fileName) {
        err := os.Remove(fileName)
        if err != nil {
            fmt.Println("移除文件失败")
        }
    }
    //2.生成静态文件
    file, err := os.OpenFile(fileName, os.O_CREATE|os.O_WRONLY, os.ModePerm)
    if err != nil {
        fmt.Println("打开文件失败")
    }
    defer file.Close()
    template.Execute(file, &product)
}

//判断文件是否存在
func exist(fileName string) bool {
    _, err := os.Stat(fileName)
    return err == nil || os.IsExist(err)
}