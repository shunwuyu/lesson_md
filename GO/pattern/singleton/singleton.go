package singleton
// Sync包同步提供基本的同步原语
import "sync"

//Singleton 是单例模式类
type Singleton struct{
	Name string
}

var singleton *Singleton
var once sync.Once

func GetInstance() *Singleton {
	// sync.Once能确保实例化对象Do方法在多线程环境只运行一次
	once.Do(func() {
		singleton = &Singleton{}
	})
	return singleton
}


