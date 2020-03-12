package main

import (
	"fmt"
	"html/template"
	"log"
	"crypto/md5"
	"time"
	"net/http"
	"strconv"
	"io"
)

func login(w http.ResponseWriter, r *http.Request) {
	fmt.Println("method:", r.Method)
	if r.Method == "GET" {
		crutime := time.Now().Unix()
		h := md5.New()
		io.WriteString(h, strconv.FormatInt(crutime, 10))
		token := fmt.Sprintf("%x", h.Sum(nil))
		fmt.Println(token);
		t, _ := template.ParseFiles("login.gtpl")
		log.Println(t.Execute(w, token))
	} else {
		r.ParseForm()
		token := r.Form.Get("token")
		if token != "" {

		} else {

		}
		fmt.Println("username length:", len(r.Form["username"][0]))
		fmt.Println("username:", template.HTMLEscapeString(r.Form.Get("username")))
		fmt.Println("password:", template.HTMLEscapeString(r.Form.Get("password")))
		template.HTMLEscape(w, []byte(r.Form.Get("username")))
	}
}

func main() {
	http.HandleFunc("/login", login)
	err := http.ListenAndServe(":9090", nil)
	if err != nil {
		log.Fatal("ListenAndServe:", err)
	}
}