package client

import (
	"testing"

	"github.com/shunwuyu/lesson_md/GO/go_learning/src/ch15/series"
)

func TestPackage(t *testing.T) {
	t.Log(series.GetFibonacciSerie(5))
	t.Log(series.Square(5))
}
