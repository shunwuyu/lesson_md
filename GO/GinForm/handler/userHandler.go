package handler

import (
	"GinForm/model"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

func UserRegister(context *gin.Context) {
	var user model.UserModel
	if err := context.ShouldBind(&user); err != nil {
		log.Println("err ->", err.Error())
		context.String(http.StatusBadRequest, "输入的数据不合法")
	}
	log.Println("email", user.Email, "password", user.Password, "password again", user.PasswordAgain)
	context.Redirect(http.StatusMovedPermanently, "/")
}