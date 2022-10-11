package interface_test 
import (
	"testing"
)
type Programmer interface {
	WriteHelloWorld() string
}
//doctype 鸭子模型
type GoProgrammer struct{

}

func (g *GoProgrammer) WriteHelloWorld() string {
	return "fmt.Println(\"hello world\")"
}

func TestClient(t *testing.T) {
	var p Programmer
	p = new(GoProgrammer)
	t.Log(p.WriteHelloWorld())
}