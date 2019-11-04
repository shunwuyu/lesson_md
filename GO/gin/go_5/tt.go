package main

import (
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
)

type Person struct {
	UserId int `db:"user_id"`
	Username string `db:"username"`
	Sex string `db:"sex"`
	Email string `db:"email"`
}

type Place struct {
	Country string `db:"country"`
	City string `db:"city"`
	TelCode int `db:"telcode"`
}

var Db *sqlx.DB

func init() {
	database, err := sqlx.Open("mysql", "root:1234567890@tcp(127.0.0.1:3306)/test")
	if err != nil {
		fmt.Println("open mysql failed,", err)
		return
	} else {
		fmt.Println("success");
	}
	Db = database
}

func main() {
	r, err := Db.Exec("insert into person(username, sex, email)values(?,?,?)", "stu001", "man", "stu01@qq.com")
	if err != nil {
		fmt.Println("exec failed,", err)
		return
	}
	id, err := r.LastInsertId()
	if  err != nil {
		fmt.Println("exec failed, ", err)
		return
	}
	fmt.Println("insert succ:", id)

}