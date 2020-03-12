package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	fmt.Println("hello, world")
	resp, err := http.Get("http://www.baidu.com")
	if err != nil {
		fmt.Println("http get error", err)
		return
	}
	// http 
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("read over")
		return
	}
	fmt.Println(string(body))
}