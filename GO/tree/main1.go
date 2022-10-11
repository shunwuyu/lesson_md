package main

import (
    "fmt"
)

// 矩形结构体
type Rectangle struct {
    Length int
    Width  int
}

// 计算矩形面积
func (r *Rectangle) Area() int {
    return r.Length * r.Width
}

func main() {
    r := Rectangle{4, 2}
    // 调用 Area() 方法，计算面积
    fmt.Println(r.Area())
}