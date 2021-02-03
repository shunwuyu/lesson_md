package main

import "fmt"

// demo 1
// func moreDefer() {
// 	defer fmt.Println("First defer")
// 	defer fmt.Println("Second defer")
// 	defer fmt.Println("Three defer")
// 	fmt.Println("函数自身代码")
// }

// func main() {
// 	moreDefer()
// }

// func main() {
// 	go fmt.Println("飞雪无情")
// 	fmt.Println("我是 main goroutine")
// 	//  后面加
// 	time.Sleep(time.Second)
// }

// func main() {
// 	ch := make(chan string) // 声明channel 协程间通信
// 	go func() {
// 		fmt.Println("飞雪无情")
// 		ch <- "goroutine 完成"
// 	}()
// 	fmt.Println("我是 main goroutine")
// 	v := <-ch
// 	fmt.Println("接收到的chan中的值为：", v)
// }

func main() {
	cacheCh := make(chan int, 5)
	cacheCh <- 2
	cacheCh <- 3
	fmt.Println("cacheCh容量为:", cap(cacheCh), ",元素个数为：", len(cacheCh))
}
