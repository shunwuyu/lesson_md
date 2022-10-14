package main
import (
	"net/http"
)

func main() {
	http.HandleFunc("/users", handleUsers)
	http.ListenAndServe(":8080", nil)
}

func handleUsers(w http.ResponseWriter, r *http.Request) {
	fm.Fprintln(w, "ID:1, Name:张三")
	
}