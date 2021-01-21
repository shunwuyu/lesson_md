// package main
// import (
// 	"fmt"
// 	"sync"
// )
// // // var sum = 0 //共享的资源
// // // func main() {
// // // 	for i := 0; i < 100; i++ {
// // // 		go add(10)
// // // 	}
// // // 	time.Sleep(2 * time.Second)
// // // 	fmt.Println("和为:", sum)
// // // }

// // // func add(i int) {
// // // 	sum += i
// // // }

// // var (
// // 	sum int
// // 	mutex sync.RWMutex
// // )

// // // // func main() {
// // // // 	for i := 0; i < 100; i++ {
// // // // 		go add(10)
// // // // 	}
// // // // 	time.Sleep(2 * time.Second)
// // // // 	fmt.Println("和为:", sum)
// // // // }

// // // // func add(i int) {
// // // // 	mutex.Lock()
// // // // 	defer mutex.Unlock();
// // // // 	sum += i
	
// // // // }


// // // func main() {
// // // 	for i := 0; i < 100; i++ {
// // // 		go add(10)
// // // 	}
// // // 	for i := 0; i < 10; i++ {
// // // 		go fmt.Println("和为：", readSum())
// // // 	}
// // // 	time.Sleep(2 * time.Second)
// // // }

// // // func add(i int) {
// // // 	mutex.Lock()
// // // 	defer mutex.Unlock();
// // // 	sum += i
// // // }

// // // func readSum() int {
// // // 	mutex.RLock()
// // // 	defer mutex.RUnlock()
// // // 	b := sum
// // // 	return b
// // // }

// // func main() {
// // 	var wg sync.WaitGroup
// // 	wg.Add(110)
// // 	for i :=0; i < 100; i++ {
// // 		go func() {
// // 			defer wg.Done()
// // 			add(10)
// // 		}()
// // 	}
// // 	for i:=0; i<10;i++ {
// // 		go func() {
// // 			 //计数器值减1
// // 			 defer wg.Done()
// // 			 fmt.Println("和为:",readSum())
// // 		}()
// //  }
// //  wg.Wait()
// // }

// // func add(i int) {
// // 	mutex.Lock()
// // 	defer mutex.Unlock();
// // 	sum += i
// // }

// // func readSum() int {
// // 	mutex.RLock()
// // 	defer mutex.RUnlock()
// // 	b := sum
// // 	return b
// // }

// func main() {
// 	doOnce()
// }
// func doOnce() {
// 	var once sync.Once
// 	onceBody := func() {
// 		fmt.Println("Only once")
// 	}
// 	done := make(chan bool)
// 	for i := 0; i < 10; i++ {
// 		go func() {
// 			once.Do(onceBody)
// 			done <- true
// 		}()
// 	} 
// 	for i :=0; i < 10; i++ {
// 		<-done
// 	}
// }