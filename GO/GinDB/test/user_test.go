package test

import (
	"GinDB/initRouter"
	"github.com/gin-gonic/gin"
	"gopkg.in/go-playground/assert.v1"
	"net/url"
	"testing"
	"net/http/httptest"
	"net/http"
	"bytes"
	"strings"
)

var router *gin.Engine

func init() {
	gin.SetMode(gin.TestMode)
	router = initRouter.SetupRouter()
}

func TestUserPostForm(t *testing.T) {
	value := url.Values{}
	value.Add("email", "youngxhui@gmail.com")
	value.Add("password", "1234")
	value.Add("password-again", "1234")
	w := httptest.NewRecorder()
	req, _ := http.NewRequest(http.MethodPost, "/user/register", bytes.NewBufferString(value.Encode()))
	req.Header.Add("Content-Type", "application/x-www-form-urlencoded; param=value")
	router.ServeHTTP(w, req)
	assert.Equal(t, http.StatusMovedPermanently, w.Code)
}

func TestUserLogin(t *testing.T) {
	email := "youngxhui@163.com"
	value := url.Values{}
	value.Add("email", email)
	value.Add("password", "1234")
	w := httptest.NewRecorder()
	req, _ := http.NewRequest(http.MethodPost, "/user/login", bytes.NewBufferString(value.Encode()))
	req.Header.Add("Content-Type", "application/x-www-form-urlencoded; param=value")
	router.ServeHTTP(w, req)
	assert.Equal(t, http.StatusOK, w.Code)
	assert.Equal(t, strings.Contains(w.Body.String(), email), true)
}