package main

import (
	"fmt"
)

func main() {
	var s int8 = 127
	s += 1
	fmt.Println(s)

	var u uint8 = 1
	u -= 2 
	fmt.Println(u)

	var a int8 = 59
	fmt.Printf("%b\n", a)
	fmt.Printf("%d\n", a)
	fmt.Printf("%o\n", a)
	fmt.Printf("%O\n", a)
	fmt.Printf("%x\n", a)
}