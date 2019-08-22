package main

import "fmt"

func main() {
	// var a [9]int
	// fmt.Println(a)
	// var a = [9]int{1,2,3,4,5,6,7,8,9}
	// var b [10]int = [10]int{1,2,3,4,5,6,7,8,9,10}
	// c := [8]int{1,2,3,4,5,6,7,8}
	// fmt.Println(a)
	// fmt.Println(b)
	// fmt.Println(c)
	// var squares [9]int
	// for i := 0; i < len(squares); i++ {
	// 	squares[i] = (i+1)*(i+1)
	// }
	// fmt.Println(squares)
	// var a = [5]int{1,2,3,4,5}
	// a[101] = 255
	// fmt.Println(a)
	// var a = [9]int{1,2,3,4,5,6,7,8,9}
	// var b [9]int
	// b = a
	// a[0] = 12345
	// fmt.Println(a)
	// fmt.Println(b)
	// var a = [9]int{1, 2, 3, 4, 5, 6, 7, 8, 9}
	// var b [10]int
	// b = a
	// fmt.Println(b)
	var a = [5]int{1,2,3,4,5}
	for index := range a{
		fmt.Println(index, a[index])
	}

	for index, value := range a {
		fmt.Println(index, value)
	}
}