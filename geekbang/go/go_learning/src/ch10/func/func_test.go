package fn_test
import (
	"math/rand"
	"testing"
	"time"
	"fmt"
)

func returnMultiValues()(int, int){
	return rand.Intn(10), rand.Intn(20)
}


//输入函数， 输入出也是函数
func timeSpent(inner func (op int) int) func (op int) int{
	return func(n int) int{
		start := time.Now()
		ret := inner(n)
		fmt.Println("time spend:", time.Since(start).Seconds())
		return ret
	}
}

func slowFun(op int) int {
	time.Sleep(time.Second*1)
	return op
}

func TestFn(t *testing.T){
	// a, _ := returnMultiValues()
	a, b := returnMultiValues()
	t.Log(a, b)
	tsSF := timeSpent(slowFun)
	t.Log(tsSF(10))
}

func Sum(ops ...int)int {
	ret := 0
	for _, op := range ops{
		ret += op
	}
	return ret
}

func TestVarParam(t *testing.T){
	t.Log(Sum(1,2,3,4))
	t.Log(Sum(1,2,3,4,5))
}

func Clear() {
	fmt.Println("Clear resource.")
}

func TestDefer(t *testing.T){
	// defer func() { //清理某些资源， 释放某些锁
	// 	t.Log("Clean resources")
	// }()

	// t.Log("Started")
	// panic("Fatal error") //不可修复的错误
		defer Clear()
		fmt.Println("Start")
		panic("err")
		fmt.Println("End")
}

