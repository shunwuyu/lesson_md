package string_test

import "testing"

func TestString(t *testing.T) {
	// var s string
	// t.Log(s);
	// s = "hello"
	// s[1] = '3'
	// t.Log(len(s))
	// s = "\xE4\xB8\xA5"
	// t.Log(s)
	// t.Log(len(s)) //byte数
	s := "中"
	c := []rune(s)
	t.Log(c)
	t.Logf("中 unicode %x", c[0])
	t.Logf("中 UTF8 %x", s)
}

func TestStringToRune(t *testing.T) {
	s := "中华人民共和国"
	for _, c := range s{
		t.Logf("%[1]c %[1]x", c) // 第一个参数 
	}
}