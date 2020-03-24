package main

import "fmt"

func longestPalindrome(s string) string {
	// 单个字符肯定是回文
	if len(s) < 2 {
		return s
	}
	// 最长回文的首字符索引，和最长回文的长度
	begin, maxLen := 0, 1
	// 在for 循环中
	// b 代表 首字符索引号
	// e 代表 尾字符索引号
	// i 代表 正中间的索引号
	// 再从`正中间段`向两边扩张，让b，e分别指向此`正中间段`为中心的最长回文的首尾
	for i := 0; i < len(s); {
		if len(s) - i <= maxLen/2 {
			//满足对称
			break;
		}
		// b 代表回文的**首**字符索引号，
		// e 代表回文的**尾**字符索引号，
		b, e := i, i
		// e 变大
		// 先从i开始，利用`正中间段`所有字符相同的特性，让b，e分别指向`正中间段`的首尾
		//abbbe
		for e < len(s) - 1 && s[e+1] == s[e] {
			e++
		}

		// eabbac
		// 不用判断  下一个正中间位置是中间的下一个
		i = e + 1
		// b变小  
		// adbdc
		for e < len(s)-1 && b > 0 && s[e+1] == s[b-1] {
			e++
			b--
		}

		// cbbd  2 1  
		newLen := e + 1 - b // 长度的计算
		// 创新纪录的话, 就更新记录
		if newLen > maxLen { // 如果有
			begin = b // 当前的b 为开始的位置
			maxLen = newLen // 更新最长记录
		}
	}
	// return s[0 : 2]
	return s[begin : begin+maxLen]

}

func main() {
	// fmt.Println(longestPalindrome("aba"))
	fmt.Println(longestPalindrome("adbda"))
	// fmt.Println(longestPalindrome("cbbd"))
}