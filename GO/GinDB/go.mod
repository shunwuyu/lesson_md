module GinDB

go 1.12

replace (
	cloud.google.com/go => github.com/GoogleCloudPlatform/google-cloud-go v0.34.0
	golang.org/x/crypto => github.com/golang/crypto v0.0.0-20190701094942-4def268fd1a4
	golang.org/x/exp => github.com/golang/exp v0.0.0-20190731235908-ec7cb31e5a56
	golang.org/x/image => github.com/golang/image v0.0.0-20190802002840-cff245a6509b
	golang.org/x/lint => github.com/golang/lint v0.0.0-20190409202823-959b441ac422
	golang.org/x/mobile => github.com/golang/mobile v0.0.0-20190814143026-e8b3e6111d02
	golang.org/x/mod => github.com/golang/mod v0.1.0
	golang.org/x/net => github.com/golang/net v0.0.0-20190813141303-74dc4d7220e7
	golang.org/x/oauth2 => github.com/golang/oauth2 v0.0.0-20190604053449-0f29369cfe45
	golang.org/x/sync => github.com/golang/sync v0.0.0-20190423024810-112230192c58
	golang.org/x/sys => github.com/golang/sys v0.0.0-20190813064441-fde4db37ae7a
	golang.org/x/text => github.com/golang/text v0.3.2
	golang.org/x/time => github.com/golang/time v0.0.0-20190308202827-9d24e82272b4
	golang.org/x/tools => github.com/golang/tools v0.0.0-20190814235402-ea4142463bf3
	golang.org/x/xerrors => github.com/golang/xerrors v0.0.0-20190717185122-a985d3407aa7
	google.golang.org/api => github.com/googleapis/google-api-go-client v0.8.0
	google.golang.org/appengine => github.com/golang/appengine v1.6.1
	google.golang.org/genproto => github.com/ilisin/genproto v0.0.0-20181026194446-8b5d7a19e2d9
	google.golang.org/grpc => github.com/grpc/grpc v1.22.0
)

require (
	github.com/gin-gonic/gin v1.7.7
	github.com/go-sql-driver/mysql v1.4.1
	github.com/modern-go/concurrent v0.0.0-20180306012644-bacd9c7ef1dd // indirect
	github.com/modern-go/reflect2 v1.0.1 // indirect
	google.golang.org/appengine v1.6.7 // indirect
	gopkg.in/go-playground/assert.v1 v1.2.1
)
