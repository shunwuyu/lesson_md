package encap

import (
	// "fmt"
	"testing"
)

type Employee struct {
	ID string
	Name string
	Age int
}

func TestCreateEmployeeObj(t *testing.T){
	e := Employee{"0", "Bob", 20}
	e1 := Employee{Name: "Mike", Age: 30}
	e2 := new(Employee) //返回指针
	e2.ID = "2"
	e2.Age = 22
	e2.Name = "Rose"
	t.Log(e)
	t.Log(e1)
	t.Log(e1.ID)
	t.Log(e2)
	t.Logf("e is %T", e)
	t.Logf("e2 is %T", e2)
}