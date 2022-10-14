package main

import (
    "fmt"
    "log"
    "net/http"
    "os"
    "strconv"
    "strings"

    "github.com/PuerkitoBio/goquery"
)

func main() {

    // 创建我们要导出的TXT文件
    file, err := os.Create("豆瓣读书TOP250.txt")
    if err != nil {
        fmt.Println(err)
    }
    defer file.Close()

    // 创建一个客户端对象，用于发送请求
    var client = http.Client{}
		j := 0
    for i := 0; i < 250; i += 25 {
        // 发送一条新请求
        req, _ := http.NewRequest("GET", "https://book.douban.com/top250?start="+strconv.Itoa(i), nil)
        // 设置User-Agent 必须
        req.Header.Set("User-Agent", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)")

        // 发送请求
        resp, err := client.Do(req)
        // 处理异常
        if err != nil {
            fmt.Println("http get error", err)
            return
        }
        // 关闭流
        defer resp.Body.Close()

        // 通过goquery将流中的内容构建成一棵DOM树
        doc, err := goquery.NewDocumentFromReader(resp.Body)
        if err != nil {
            log.Fatal(err)
        }

        // 拿到所有标记的节点集合
        // 并进行each循环，i = 序号，s = 节点本身
        doc.Find("div.indent>table>tbody>tr.item").Each(func(i int, s *goquery.Selection) {
						// 拿到节点集合中的Items
						j++
            item := s.Find("td[valign=top]")

            // 通过Item节点获取到我们所需要的数据
            // 对数据进行去空格 去换行操作
            bookName := strings.Replace(strings.Replace(item.Find("div.pl2>a").Text(), "\n", "", -1), " ", "", -1)

            author := strings.Split(s.Find("p.pl").Text(), "/")[0]

            quote := strings.Replace(strings.Replace(s.Find("p.quote").Text(), "\n", "", -1), " ", "", -1)

            // 拿到我们已经处理好的数据之后 接下来就是往TXT里面填充了

            //fmt.Print("TOP" + fmt.Sprint(i) + "-" + bookName + "-" + author + "-" + quote)

            // 处理字符直接的空格长度，尽力对齐
            bookName = bookName + strings.Repeat(" ", (120-len(bookName)))
            author = author + strings.Repeat(" ", (50-len(author)))

            content := "TOP" + strconv.Itoa(j) + "\t" + bookName + author + quote + "\n"

            file.WriteString(content)
        })
    }

    fmt.Print("程序执行完毕，请查看结果。")
}