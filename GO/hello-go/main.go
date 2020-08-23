package main

import (
	"fmt"
	"strings"
	"os"
	"net/http"
	
)

func main() {
	s := "123lafaldsjglad123lkfasdf123djfal123lkdjga123lksjfla123l"
	old := "123"
	new := "888"

	fmt.Println("n=-1: ", strings.Replace(s, old, new, -1 ))
	// 不替换任何匹配的 old；n=0:  123lafaldsjglad123lkfasdf123djfal123lkdjga123lksjfla123l
	fmt.Println("n=0: ", strings.Replace(s, old, new, 0 )) 
	// 用 new 替换第一个匹配的 old；n=1:  888lafaldsjglad123lkfasdf123djfal123lkdjga123lksjfla123l
	fmt.Println("n=1: ", strings.Replace(s, old, new, 1 ))
	// 用 new 替换前 5 个匹配的 old（实际多于 5 个）；n=5:  888lafaldsjglad888lkfasdf888djfal888lkdjga888lksjfla123l
	fmt.Println("n=5: ", strings.Replace(s, old, new, 5 ))
	// 用 new 替换前 7 个匹配上的 old（实际没那么多）；n=7:  888lafaldsjglad888lkfasdf888djfal888lkdjga888lksjfla888l
	fmt.Println("n=7: ", strings.Replace(s, old, new, 7 ))  

	// -----------------
	demo := "I&love&Go,&and&I&also&love&Python."
	string_slice := strings.Split(demo, "&")
	fmt.Println("result:",string_slice)
	fmt.Println("len:",len(string_slice))
	// fmt.Println("cap:", cap(string_slice))
	//------------------------

	file, err := os.Create("b.txt")
	if err != nil {
		fmt.Println(err)
	}
	defer file.Close()

	file.WriteString("I love go")
	// _______________________
	var client = http.Client{}
	req, _ := http.NewRequest("GET", "https://book.douban.com/top250?start=0", nil)
	req.Header.Set("User-Agent", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)")
	resp, err := client.Do(req)
	// 处理异常
	if err != nil {
			fmt.Println("http get error", err)
			return
	}
	fmt.Println(resp.Body);
	// 关闭流
	defer resp.Body.Close()
}