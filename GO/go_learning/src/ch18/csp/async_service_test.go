package async_service

import (
	"testing"
	"fmt"
	"time"
)

func service() string {
	time.Sleep(time.Millisecond * 50)
	return "Done"
}

func otherTask() {
	fmt.Println("working on something else")
	time.Sleep(time.Millisecond * 100)
	fmt.Println("Task is done.")
}

func TestService(t *testing.T) {
	fmt.Println(service())
	otherTask();
}

func AsyncService() chan string {
	retCh := make(chan string)

	go func() {
		ret := service()
		fmt.Println("returned result.")
		retCh <- ret
		fmt.Println("service exited.")
	}()
	
	return retCh
}