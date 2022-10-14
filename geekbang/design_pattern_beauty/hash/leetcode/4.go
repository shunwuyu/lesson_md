package main
import "fmt"
func twoSum(nums []int, target int) []int {
	h := make(map[int]int)
	for i, value := range nums {
			if wanted, ok := h[value]; ok {
				fmt.Println(ok) // true
					return []int{wanted, i}
			} else {
					h[target-value] = i
			}
	}
	return nil
}

func main() {
	fmt.Println(twoSum([]int{2, 7, 11, 15}, 9))
}