
package main
 
import (
	"fmt"
	// "github.com/gohouse/gorose"
	"hello/person"
)
 
func main() {
	wzh Person := Person{}
	wzh.SetFirstName("至浩")
  fmt.Println(wzh.GetFirstName())
}