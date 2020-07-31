package main

import (
	"math"
	"fmt"
)

func minEatingSpeed(piles []int, H int) int {
	lo := 1
	// fmt.Printf("%d", maxPiles(piles))
	hi := maxPiles(piles)
	for {
		if lo > hi {
			break
		} 
		mid := lo + ((hi - lo) >> 1)
		// fmt.Printf("%v--- %d ---- %d", piles, H, mid);
		// break;
		// isOK := canEatAllBanas(piles, H, mid)
		if canEatAllBanas(piles, H, mid) {
			hi = mid - 1;
		} else {
			lo = mid + 1;
		}
	}
	return lo
}

func canEatAllBanas(piles []int, H int, mid int)bool {
	// 数组 H mid 二分点
	h := 0
	for _, pile := range piles {
		// fp := float64(pile)
		h += int(math.Ceil(float64(pile) / float64(mid)));
	}
	return h <= H; //向
}

func maxPiles(a []int) (int) {
	mx := 0
	for _, n := range a {
		// fmt.Printf("%d, %d", a, n)
		mx = max(mx, n)
	}
	return mx
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	// fmt.Println("hello world") 
	fmt.Printf("fdfdfd%d", minEatingSpeed([]int{3, 6, 7, 11}, 8));	
}