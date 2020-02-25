package main

import (
	// console.log
	"log"
	// go get github.com/jordan-wright/email
	"github.com/jordan-wright/email"
	// SMTP是一种提供可靠且有效的电子邮件传输的协议
	"net/smtp"
)

func main() {
	// = 是赋值， := 是声明变量并赋值。系统自动推断类型
	e := email.NewEmail()
	// e = "fdf"
	e.From = "shunwuyu <754211506@qq.com>"
	//字符串数组 []string 字符串数组 ["shunwu2001@163.com", "342435112@qq.com"]
 	e.To = []string{"shunwu2001@163.com", "342435112@qq.com"}
	// a := [4]string{"a", "b", "c", "d"}
	// log.Fatal(a[1])
	e.Subject = "Awesome web"
	//要发送的字节型的
	
	e.Text = []byte("Text Body is, of course, supported!")
	
	err := e.Send("smtp.qq.com:25", smtp.PlainAuth("", "754211506@qq.com", "apyelxhrltvdbgad", "smtp.qq.com"))
	if err != nil {
    log.Fatal(err)
  }
}