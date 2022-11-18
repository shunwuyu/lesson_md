package main

import (
	"fmt"
)

func main() {
	// var f1 float32 = 16777216.0
	// var f2 float32 = 16777217.0
	// fmt.Println(f1 == f2)
	// var c = complex(5, 6) 
	// var d = complex(0o123, .12345E+5) 
	var c = complex(5, 6) 
	r := real(c) 
	i := imag(c)
	fmt.Println(r, i)
}