package main

import "fmt"
//递归
//  a
//  bab
//  baab
//  baaab 
func countSubstrings(s string) int {
	count := 0
	for i := 0; i < len(s); i++ {
		count += extendPalindrome(s, i, i);
		count += extendPalindrome(s, i, i+1)
	}
	return count
}

// 同时向两边扩张，直到遇到不是回文的情况
func extendPalindrome(s string, left, right int) int {
	res := 0
	for left >= 0 && right < len(s) && s[left] == s[right] {
		res++
		left--
		right++
	}
	return res
}

func main() {
	fmt.Println(countSubstrings("aba"))
}