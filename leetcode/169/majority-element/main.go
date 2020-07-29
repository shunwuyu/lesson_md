package main
import "fmt"

func majorityElement(nums []int) int {
	x, t := nums[0], 1 // 第一个数字， 出现一次

	for i := 1; i < len(nums); i++ {
		if t == 0 {
			x = nums[i]
		}

		if nums[i] == x {
			t++
		} else {
			t--
		} 
	}
	return x;
}

func main() {
	fmt.Println(majorityElement([]int{1, 1, 2, 2, 2}))
}