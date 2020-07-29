package main

import (
	// "log" //标准日志库
	"fmt"
)
//结构体 
type User struct {
	Name string
	Age int
}


type Person struct {
	Name string
	Age int
}


func main() {
	// u := User{
	// 	Name: "dj",
	// 	Age: 18,
	// }
	//log默认输出到标准错误（stderr），每条日志前会自动加上日期和时间。如果日志不是以换行符结尾的，那么log会自动加上换行符。即每条日志会在新行中输出。
	//正常输出日志  f 格式化 ln 换行
	// log.Println("hello world");
	// log.Println("%s login, age:%d", u.Name, u.Age)
	//报错， 打断程序运行
	// log.Panicf("Oh, system error when %s login", u.Name)
	// 输出日志后，调用os.Exit(1)退出程序。
	// log.Fatalf("Danger! hacker %s login", u.Name)

	// 加前缀
	// log.SetPrefix("Login: ")
	// log.Printf("%s login, age: %d", u.Name, u.Age)
	// 设置flag 
	// log.SetFlags(log.Lshortfile | log.Ldate | log.Lmicroseconds)
	// log.Printf("%s login, age:%d", u.Name, u.Age)
	
	var p1 Person
	p1.Name = "Tom"
	p1.Age  = 30

	var p2 = Person{Name:"Burke", Age:31}
	fmt.Println("p2 =", p2)
	
	p3 := Person{Name:"Aaron", Age:32}
	fmt.Println("p2 =", p3)
	
	p4 := struct {
		Name string
		Age int
	} {Name:"匿名", Age:33}
	fmt.Println("p4 =", p4)
}