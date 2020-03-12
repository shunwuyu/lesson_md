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
	// e.To = []string{"shunwu2001@163.com", "342435112@qq.com"}
	e.To = []string{"shunwu2001@163.com"}
	// 抄送
	e.Cc = []string{"342435112@qq.com", "754211506@qq.com"}
	// 秘密抄送
	e.Bcc = []string{"1141340018@qq.com"}
	// a := [4]string{"a", "b", "c", "d"}
	// log.Fatal(a[1])
	e.Subject = "Awesome web"
	//要发送的字节型的
	
	// e.Text = []byte("Text Body is, of course, supported!")
	e.HTML = []byte(`
  <ul>
<li><a "https://darjun.github.io/2020/01/10/godailylib/flag/">Go 每日一库之 flag</a></li>
<li><a "https://darjun.github.io/2020/01/10/godailylib/go-flags/">Go 每日一库之 go-flags</a></li>
<li><a "https://darjun.github.io/2020/01/14/godailylib/go-homedir/">Go 每日一库之 go-homedir</a></li>
<li><a "https://darjun.github.io/2020/01/15/godailylib/go-ini/">Go 每日一库之 go-ini</a></li>
<li><a "https://darjun.github.io/2020/01/17/godailylib/cobra/">Go 每日一库之 cobra</a></li>
<li><a "https://darjun.github.io/2020/01/18/godailylib/viper/">Go 每日一库之 viper</a></li>
<li><a "https://darjun.github.io/2020/01/19/godailylib/fsnotify/">Go 每日一库之 fsnotify</a></li>
<li><a "https://darjun.github.io/2020/01/20/godailylib/cast/">Go 每日一库之 cast</a></li>
</ul>
	`)
	e.AttachFile("test.txt")
	err := e.Send("smtp.qq.com:25", smtp.PlainAuth("", "754211506@qq.com", "apyelxhrltvdbgad", "smtp.qq.com"))
	if err != nil {
    log.Fatal(err)
  }
}