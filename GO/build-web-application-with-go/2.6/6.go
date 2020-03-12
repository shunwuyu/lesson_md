package main

func main() {
	var x float64 = 3.4
	p := reflect.ValueOf(&x)
	v := p.Elem()
	v.setFloat(7.1)
}