package main


import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	resp, err := http.Get("http://www.baidu.com")
	
	if err != nil {
		fmt.Println(err)
		return
	}

	content, err := ioutil.ReadAll(resp.Body)
	if  err != nil {
		fmt.Println(err)
		return
	}

	fmt.Println(string(content))

}