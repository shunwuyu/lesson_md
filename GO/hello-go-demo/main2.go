package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request){
		fmt.Fprint(w, "Hello World!")
	})
	fmt.Println("Please Visit - http://localhost:8888/")
	http.ListenAndServe(":8888", nil)
}