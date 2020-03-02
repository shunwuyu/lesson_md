package main
import (
	// "time"
	"github.com/uniplaces/carbon"
	"fmt"
)

func main() {
	// fmt.Println(time.Now()) // 2020-03-01 20:05:29.820741 +0800 CST m=+0.000387308
	// fmt.Println(time.Now().Format("2006-01-02 15:04:05"))
	// fmt.Println(time.Now().Format(time.UnixDate))
	// dt1 := time.Now()
	// fmt.Println(dt1.Year(),dt1.Month(), dt1.Day(), dt1.Weekday())
	// fmt.Println(dt1.Year(),int(dt1.Month()), dt1.Day(), int(dt1.Weekday()))
	fmt.Printf("Right now is %s\n", carbon.Now().DateTimeString())
}