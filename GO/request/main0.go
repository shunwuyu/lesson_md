
package main
 
import (
	"fmt"
	"net/http"
)
 
func IndexHandler(w http.ResponseWriter, r *http.Request) {
	//Fprint 使用其操作数的默认格式进行格式化并写入到 w
  fmt.Fprintln(w, "hello world")
}
 
func main() {
	http.HandleFunc("/", IndexHandler)
	http.ListenAndServe(":8000", nil)
}