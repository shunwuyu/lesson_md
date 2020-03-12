package main

import (
	"net/http"
	"net/url"
	"fmt"
	"io"
)

type router struct{}
//http handler
func (*router) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	path := r.URL.String()
	fmt.Println(path)
	urlStruct, err := url.Parse(path)
	if err != nil {
		fmt.Println(err)
	}
	rawQuery := urlStruct.RawQuery
	// fmt.Println(rawQuery)
	queryMap, err := url.ParseQuery(rawQuery)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(queryMap)
	fmt.Println(queryMap["id"])
	fmt.Println("______")
	io.WriteString(w, urlStruct.RawQuery)
}

func main() {
	http.ListenAndServe(":8080", &router{})
}