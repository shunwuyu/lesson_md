package main

import "fmt"

func findCircleNum(M [][]int) int {
	N := len(M)
	res := N // 最大值， 每个圈子都是独立的
	// fmt.Printf("%d", N)
	// 维护一个数组friend
	friend := make([]int, res)
	for i := 0; i < res; i++ {
		friend[i] = i
	}
	fmt.Printf("%v", friend)
	// s 和 d 是朋友关系
	// 所以，s 的所有朋友都是 d 的朋友
	union := func(s, d int) {
		for i := range friend {
			if friend[i] == s {
				friend[i] = d
			}
		}
	}

	for i := 0; i < N; i++ {
		for j := i + 1; j < N; j++ {
			if M[i][j] == 1 {
				if friend[i] != friend[j] {
					res--
					union(friend[i], friend[j])
				}
			}
		}
	}

	return res
}

func main() {
	// count := findCircleNum([][]int{
	// 	{1, 1, 0}, /*  第一行索引为 0 */
	// 	{1, 1, 0}, /*  第二行索引为 1 */
	// 	{0, 0, 1}, /* 第三行索引为 2 */
	// })

	count := findCircleNum([][]int{
		{1, 1, 0}, /*  第一行索引为 0 */
		{1, 1, 1}, /*  第二行索引为 1 */
		{0, 1, 1}, /* 第三行索引为 2 */
	})
	fmt.Printf("%d", count)
}
