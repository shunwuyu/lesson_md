package main

import "fmt"

func singleNumber(nums []int) int {
	res := 0
	for _, n := range nums {
		// n^n == 0
		// a^b^a^b^a == a
		res ^= n
	}
	return res
}

func main() {
	fmt.Println(singleNumber([]int{4,1,2,1,2}))
}