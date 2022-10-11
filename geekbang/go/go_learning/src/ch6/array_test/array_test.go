package array_test
import (
	"testing"
	"fmt"
)

func TestArrayInit(t *testing.T) {
	var arr [3]int
	arr1 := [4]int{1,2,3,4}
	arr3 := [...]int{1,3,4,5} //长度不设定
	arr1[1] = 5
	fmt.Println(arr[1], arr[2])
	t.Log(arr1, arr3)
	// t.Log(arr[1], arr[2], arr[0])
}

func TestArrayTravel(t *testing.T) {
	// arr3 := [...]int{1,3,4,5}
	// for i:=0;i<len(arr3);i++{
	// 	t.Log(arr3[i])
	// }
	// for _, e := range arr3{  //严格编程约束
	// 	t.Log(e) 
	// }
	a := [...]int{1,2,3,4,5}
	t.Log(a[1:2])
	t.Log(a[1:3])
	t.Log(a[1:len(a)])
	t.Log(a[:3])
}

func TestArraySection(t *testing.T) {
	arr3 := [...]int{1,2,3,4,5}
	// arr3_sec := arr3[:3] 
	// arr3_sec := arr3[3:] 
	t.Log(arr3_sec)
}