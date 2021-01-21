package main 
import (
	"sync"
	"context"
	"time"
)
func main() {
	var wg sync.WaitGroup
	wg.Add(1)
	ctx,stop:=context.WithCancel(context.Background())
	go func() {
		 defer wg.Done()
		 watchDog(ctx,"【监控狗1】")
	}()
	time.Sleep(5 * time.Second) //先让监控狗监控5秒
	stop() //发停止指令
	wg.Wait()
}
func watchDog(ctx context.Context,name string) {
	//开启for select循环，一直后台监控
	for {
		 select {
		 case <-ctx.Done():
				fmt.Println(name,"停止指令已收到，马上停止")
				return
		 default:
				fmt.Println(name,"正在监控……")
		 }
		 time.Sleep(1 * time.Second)
	}
}