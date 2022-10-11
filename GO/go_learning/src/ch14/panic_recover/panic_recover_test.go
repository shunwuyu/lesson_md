package panic_recover

import (
	"errors"
	"fmt"
	"testing"
)

func TestPanicVxExit(t *testing.T) {
	// panic 前 defer 会运行
	// defer func() {
	// 	fmt.Println("Finally!")
	// }()

	defer func() {
		if err := recover(); err != nil {
			fmt.Println("recovered from ", err)
		}
	}()

	fmt.Println("Start")
	// os.Exit(-1)
	// 调用栈信息
	panic(errors.New("Something wrong!"))
}
