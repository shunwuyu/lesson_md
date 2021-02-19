// package main
// import (
// 	"fmt"
// )
// type Widget struct {
// 	X, Y int
// }
// // Painter
// type Label struct {
// 	Widget
// 	Text string 
// }
// func (label Label) Paint() {
// 	fmt.Printf("%p:Label.Paint(%q)\n", &label, label.Text)
// }

// // Painter Clicker
// type Button struct {
// 	Label
// }
// func (button Button) Paint() {
// 	fmt.Printf("Button.Paint(%s)\n", button.Text)
// }
// func (button Button) Click() { 
// 	fmt.Printf("Button.Click(%s)\n", button.Text)
// }
// // Painter Clicker
// type ListBox struct {
// 	Widget
// 	Texts []string
// 	Index int
// }

// func (listBox ListBox) Paint() { 
// 	fmt.Printf("ListBox.Paint(%q)\n", listBox.Texts)
// }
// func (listBox ListBox) Click() {
// 	 fmt.Printf("ListBox.Click(%q)\n", listBox.Texts)
// }

// type Painter interface {
// 	Paint()
// }

// type Clicker interface {
// 	Click()
// }

// func main() {
// 	label := Label{Widget{10,10}, "State:"}
// 	// label.X = 11
// 	// label.Y = 12
// 	// fmt.Println(label)
// 	button1 := Button{Label{Widget{10, 70}, "ok"}}
// 	// button2 := new Button(50, 70, "Cancel")
// 	listBox := ListBox{Widget{10, 40}, []string{"AL", "AK", "AZ", "AR"}, 0}
// 	for _, painter := range []Painter{label, listBox, button1} {
// 		painter.Paint()
// 	}

// 	for _, widget := range []interface{}{label, listBox, button1} {
// 		widget.(Painter).Paint()
// 		if clicker, ok := widget.(Clicker); ok {
// 			clicker.Click()
// 		}
// 		fmt.Println()
// 	}
// }

package main

type IntSet struct {
	data map[int]bool
}
func NewIntSet() IntSet {
	return IntSet{make(map[int]bool)}
}
func (set *IntSet) Add(x int) {
	set.data[x] = true
}
func (set *IntSet) Delete(x int) {
	 delete(set.data, x)
}
func (set *IntSet) Contains(x int) bool { 
	return set.data[x]
}

func main() {

}