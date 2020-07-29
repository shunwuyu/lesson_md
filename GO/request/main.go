package main
import (
	"net/http"
	"fmt"
	"text/template"
)

type People struct {
	Name string
	Age int
	Male string
}

func sayHi(w http.ResponseWriter,r *http.Request)  {
	// 解析指定文件生成模板对象
	tem,err := template.ParseFiles("hello.html")
	if err != nil{
			fmt.Println("读取文件失败,err",err)
			return
	}

	// 利用给定数据渲染模板，并将结果写入w

	People := People{
		Name:"Ares",
		Age:28,
		Male:"男",
	}

	tem.Execute(w,People)

	// PeopleSlice := []People{
	// 	{"Ares", 18, "男"},
	// 	{"龙猫", 28, "女"},
	// }
	// // fmt.Println(PeopleSlice)
	// tem.Execute(w, PeopleSlice)

	// var a [3]int //int array with length 3
  //   a[0] = 12 // array index starts at 0
  //   a[1] = 78
	// 	a[2] = 50
	
	// tem.Execute(w, len(a))

	// 利用给定数据渲染模板，并将结果写入w
	// tem.Execute(w,"Ares")
}

func main()  {
	http.HandleFunc("/",sayHi)
	err := http.ListenAndServe(":8888",nil)
	if err != nil{
			fmt.Println("监听失败,err",err)
			return
	}
}