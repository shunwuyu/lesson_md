package person

import "fmt"

type Person struct {
	name string
  age int
}
// 提供了两个对外的接口
// 本质就是对外提供了两个公有的方法
func (p *Person)SetName(name string)  {
	p.name = name
}
func (p *Person)SetAge(age int)  {
	// 可以对外界的修改进行逻辑判断处理
	if age < 0 {
		age = 0
	} else if(age > 100){
		age = 100
	}
	p.age = age
}
func (p *Person)GetName() string  {
	return p.name
}
func (p *Person)GetAge() int  {
	return p.age
}
func (p *Person)say()  {
	fmt.Println(p.name, p.age)
}

type Student struct {
	Person
	score int
}
func (stu *Student)say()  {
	fmt.Println(stu.name, stu.age, stu.score)
}

