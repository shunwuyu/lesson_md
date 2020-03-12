package controller

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func IndexGetAction(context *gin.Context) {
	context.String(http.StatusOK, "hello gin get method")
}

func IndexPostAction(context *gin.Context) {
	context.String(http.StatusOK, "hello gin post method")
}

func IndexPutAction(context *gin.Context) {
	context.String(http.StatusOK, "hello gin put method")
}

func IndexDeleteAction(context *gin.Context) {
	context.String(http.StatusOK, "hello gin delete method")
}