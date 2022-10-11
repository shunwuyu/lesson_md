// package main

// import "fmt"

// func decorator(f func(s string)) func(s string) {
// 	return func(s string) {
// 		fmt.Println("Started")
// 		f(s)
// 		fmt.Println("Done")
// 	}
// }

// func Hello(s string) {
// 	fmt.Println(s);
// }

// func main() {
// 	// decorator(Hello)("Hello, World!")
// 	// go 不支持decorator 
// 	hello := decorator(Hello)
// 	hello("Hello")
// }

// package main
// import ( 
// 	"fmt" 
// 	"reflect"
// 	"runtime" 
// 	"time"
// )

// type SumFunc func(int64, int64) int64

// func getFunctionName(i interface{}) string {
// 	 return runtime.FuncForPC(reflect.ValueOf(i).Pointer()).Name()
// }

// func timedSumFunc(f SumFunc) SumFunc { 
// 	return func(start, end int64) int64 {
// 		 defer func(t time.Time) {
// 			  fmt.Printf("--- Time Elapsed (%s): %v ---\n", getFunctionName(f), time.Since(t)) }(time.Now()) 
// 				return f(start, end) }}

// 				func Sum1(start, end int64) int64 { var sum int64 sum = 0 if start > end { start, end = end, start } for i := start; i <= end; i++ { sum += i } return sum}func Sum2(start, end int64) int64 { if start > end { start, end = end, start } return (end - start + 1) * (end + start) / 2}func main() { sum1 := timedSumFunc(Sum1) sum2 := timedSumFunc(Sum2) fmt.Printf("%d, %d\n", sum1(-10000, 10000000), sum2(-10000, 10000000))}


package main
import (
	"net/http"
	"log"
	"fmt"
	"strings"
)

func WithServerHeader(h http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		log.Println("--->WithServerHeader()")
		w.Header().Set("Server", "HelloServer v0.0.1")
		h(w, r)
	}
}

func WithAuthCookie(h http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		log.Println("--->WithAuthCookie()")
		cookie := &http.Cookie{Name: "Auth", Value: "Pass", Path: "/"}
		http.SetCookie(w, cookie)
		h(w, r)
	}
}

func WithBasicAuth(h http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		log.Println("--->WithBasicAuth()")
		cookie, err := r.Cookie("Auth")
		if err != nil || cookie.Value != "Pass" {
			w.WriteHeader(http.StatusForbidden)
			return
		}
		h(w, r)
	}
}

func WithDebugLog(h http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		log.Println("--->WithDebugLog")
		r.ParseForm()
		log.Println(r.Form)
		log.Println("path", r.URL.Path)
		log.Println("scheme", r.URL.Scheme)
		log.Println(r.Form["url_long"])
		for k, v := range r.Form {
			log.Println("key:", k)
			log.Println("val:", strings.Join(v, ""))
		}
		h(w, r)
	}
}

func hello(w http.ResponseWriter, r *http.Request) {
	log.Printf("Recieved Request %s from %s\n", r.URL.Path, r.RemoteAddr)
	fmt.Fprintf(w, "Hello, World！" + r.URL.Path)
}

func main() {
	http.HandleFunc("/v1/hello", WithServerHeader(hello))
	http.HandleFunc("/v2/hello", WithServerHeader(WithBasicAuth(hello)))
	http.HandleFunc("/v3/hello", WithServerHeader(WithBasicAuth(WithDebugLog(hello))))
	err := http.ListenAndServe(":8080", nil) 
	if err != nil { log.Fatal("ListenAndServe: ", err) }
}