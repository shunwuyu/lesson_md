package main

import "fmt"

func singleNumber(nums []int) int {
	m := make(map[int]int)
	for _, v := range nums {
		_, ok := m[v]
		if ok {
			delete(m, v)
		} else {
			m[v] = 1
		}
	}
	fmt.Println(m);
	for k := range m{
		fmt.Println(k)
		return k
	}
	return 0
}

func main() {
	fmt.Println(singleNumber([]int{4,1,2,1,2}))
}