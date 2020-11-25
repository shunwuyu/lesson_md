package model

import (
	"fmt"
	"log"

	"github.com/jinzhu/gorm"
)

var (
	DB       *gorm.DB
	username string = "root"
	password string = "1234567890"
	dbName   string = "spiders"
)

func init() {
	var err error
	DB, err = gorm.Open("mysql", fmt.Sprintf("%s:%s@/%s?charset=utf8&parseTime=True&loc=Local"))
	if err != nil {
		log.Fatalf(" gorm.Open.err: %v", err)
	}
	DB.SingularTable(true)
	gorm.DefaultTableNameHandler = func(db *gorm.DB, defaultTableName string) string {
		return "sp_" + defaultTableName
	}
}
