package main

import "fmt"

func main() {
	var a[3]int //初始化为0
	a[0]=1
	fmt.Print(a)
	b := [3]int{1,2,3}
	fmt.Print(b)
	c := [2][2]int{{1,2}, {3,4}}
	fmt.Print(c)

}