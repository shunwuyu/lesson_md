package main

import "fmt"

func main() {
	deferPanic()
}

func deferPanic() {
	defer fmt.Println("efer1")
	defer fmt.Println("efer2")
	defer fmt.Println("efer3")

	panic("出错啦")
}