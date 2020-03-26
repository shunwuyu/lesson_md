package person

type Person struct {
	first_name string
	last_name string
}

func (p *Person) SetFirstName(str string) string {
	p.first_name = str
	return str
}

func (p *Person) GetFirstName() string {
	return p.first_name
}