package share_menu

import (
	"sync"
	"testing"
	// "time"
)

// func TestCounter(t *testing.T) {
// 	counter := 0
// 	for i:= 0; i < 5000; i++ { // 5000个协程
// 		go func() { //不同的协程里
// 			counter++ //不是线程安全的程序
// 		}()
// 	}
// 	time.Sleep(1 * time.Second) // < 5000
// 	t.Logf("counter = %d", counter)
// }

// func TestCounterThreadSafe(t *testing.T) {
// 	var mut sync.Mutex
// 	counter := 0
// 	for i:= 0; i < 5000; i++ { // 5000个协程
// 		go func() { //不同的协程里
// 			defer func () {
// 				mut.Unlock()
// 			}()
// 			mut.Lock()
// 			counter++ //不是线程安全的程序
// 		}()
// 	}
// 	time.Sleep(1 * time.Second) // < 5000
// 	t.Logf("counter = %d", counter)
// }

// 5000 个协程不知道要等多久

func TestCounterWaitGroup(t *testing.T) {
	var mut sync.Mutex
	var wg sync.WaitGroup
	counter := 0
	for i:= 0; i < 5000; i++ { // 5000个协程
		wg.Add(1)
		go func() { //不同的协程里
			defer func () {
				mut.Unlock()
			}()
			mut.Lock()
			wg.Done()
			counter++ //不是线程安全的程序
		}()
	}
	// time.Sleep(1 * time.Second) // < 5000(
	wg.Wait()
	t.Logf("counter = %d", counter)
}