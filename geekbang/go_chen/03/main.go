// // func NewDefaultServer(addr string, port int)(*Server, error) {
// // 	return &Server{addr, port, "tcp", 30*time.Second, 100}
// // }
// package main

// import (
// 	"time"
// 	"crypto/tls"
// 	"fmt"
// )

// type Server struct {
// 	Addr  string
// 	Port int
// 	Protocol string
// 	Timeout time.Duration
// 	MaxConns int
// 	TLS *tls.Config
// }

// type ServerBuilder struct {
// 	Server
// }

// func (sb *ServerBuilder) Create(addr string, port int) *ServerBuilder {
// 	sb.Server.Addr = addr
// 	sb.Server.Port = port
// 	return sb
// }

// func (sb *ServerBuilder) WithProtocol(protocol string) *ServerBuilder {
// 	sb.Server.Protocol = protocol
// 	return sb
// }

// func (sb *ServerBuilder) WithMaxConn(maxconn int) *ServerBuilder {
// 	sb.Server.MaxConns = maxconn
// 	return sb
// }

// func (sb *ServerBuilder)WithTimeOut(timeout time.Duration) *ServerBuilder {
// 	sb.Server.Timeout = timeout 
// 	return sb
// }

// func (sb *ServerBuilder) WithTLS( tls *tls.Config) *ServerBuilder { 
// 	sb.Server.TLS = tls 
// 	return sb
// }

// func (sb *ServerBuilder) Build() (Server) { 
// 	return sb.Server
// }


// func main() {
// 	sb := ServerBuilder{}
// 	server := sb.Create("127.0.0.1", 8080).
// 		WithProtocol("udp").
// 		WithMaxConn(1024).
// 		WithTimeOut(30*time.Second).
// 		Build()

// 	fmt.Println(server)
// }

package main

import (
	"crypto/tls"
	"time"
	"fmt"
)

type Server struct {
	Addr  string
	Port int
	Protocol string
	Timeout time.Duration
	MaxConns int
	TLS *tls.Config
}

type Option func(*Server)

func Protocol(p string) Option {
	return func(s *Server) {
		s.Protocol = p
	}
}

func Timeout(timeout time.Duration) Option {
	return func(s *Server) {
		s.Timeout = timeout
	}
}

func MaxConns(maxconns int) Option {
	return func(s *Server) {
		s.MaxConns = maxconns
	}
}

func TLS(tls *tls.Config) Option {
	return func(s *Server) {
		s.TLS = tls
	}
}

func NewServer(addr string, port int, options ...func(*Server)) (*Server, error) {
	srv := Server{
		Addr: addr,
		Port: port,
		Protocol: "tcp",
		Timeout: 30*time.Second,
		MaxConns: 1000,
		TLS: nil,
	}
	for _, option := range options {
		option(&srv)
	}
	return &srv, nil
}

func main() {
	s1, _ := NewServer("localhost", 2048, Protocol("udp"))
	s3, _ := NewServer("0.0.0.0", 8080, Timeout(300*time.Second), MaxConns(1000))
	fmt.Println(s1, s3)
}