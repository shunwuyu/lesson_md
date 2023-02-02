package main
 
import (
    "fmt"
)
 
func main()  {
	defer func() {
		if err := recover(); err !=nil {
			fmt.Println(err)
		} else {
			fmt.Println("fatal")
		}
	}()

	panic("panic")
}