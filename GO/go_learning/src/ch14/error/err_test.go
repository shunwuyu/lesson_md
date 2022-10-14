package err_test

import (
	"errors"
	"fmt"
	"testing"
)

var LessThanTwoError = errors.New("n should be not less than 2")
var LargerThanHunderedError = errors.New("n should be no larger than 100")

func GetFibonacci(n int) ([]int, error) {
	if n < 2 {
		return nil, LessThanTwoError
	}
	if n > 100 {
		return nil, LargerThanHunderedError
	}
	fibList := []int{1, 1}

	for i := 2; i < n; i++ {
		fibList = append(fibList, fibList[i-2]+fibList[i-1])
	}

	return fibList, nil
}

// func GetFibonacci(n int) ([]int, error) {
// 	if n < 2 {
// 		return nil, errors.New("n should be not less than 2")
// 	}
// 	if n > 100 {
// 		return nil, errors.New("n should be no larger than 100")
// 	}
// 	fibList := []int{1, 1}

// 	for i := 2; i < n; i++ {
// 		fibList = append(fibList, fibList[i-2]+fibList[i-1])
// 	}

// 	return fibList, nil
// }

func TestGetFibonacci(t *testing.T) {
	if v, err := GetFibonacci(1); err != nil {
		// t.Error(err)
		if err == LessThanTwoError {
			fmt.Println("It is less.")
		}
		t.Error(err)
	} else {
		t.Log(v)
	}
}
