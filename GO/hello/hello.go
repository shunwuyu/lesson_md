package main

import (
    "bufio"
    "fmt"
    "strings"
)

func main() {
    r := strings.NewReader("hello world !")
    reader := bufio.NewReader(r)

    for {
        str, err := reader.ReadString(byte(' '))
        fmt.Println(str)
        if err != nil {
            return
        }
    }
}