package main

import (
	"bytes"
	"fmt"
)

func main() {
	// foo = make([]int, 5) // 切片  foo slice len cap 5 
	// foo[3] = 42
	// foo[4] = 100
	// bar := foo[1:4] // 数组内容的修改会影响到对方
	// bar[1] = 99

	// a := make([]int, 32)
	// b := a[1:16]
	// a = append(a, 1) //重新分配内存
	// a[2] = 42

	path := []byte("AAAA/BBBBBBBBB")
	sepIndex := bytes.IndexByte(path, '/')
	fmt.Println(sepIndex)

	dir1 := path[:sepIndex]
	// dir1 := path[:sepIndex:sepIndex]
	dir2 := path[sepIndex+1:]

	fmt.Println("dir1 => ", string(dir1))
	fmt.Println("dir2 => ", string(dir2))

	dir1 = append(dir1, "suffix"...)
	
	fmt.Println("dir1 =>",string(dir1))
	fmt.Println("dir2 =>",string(dir2))
}