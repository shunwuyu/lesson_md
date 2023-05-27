[source](https://github.com/github-kiko/go-vue-react/tree/master/server-go)

- go 配置
    go env -w GO111MODULE=on
    go env -w GOPROXY=https://goproxy.io,direct
    go env -w GOSUMDB="sum.golang.org"

- Go是一个快速、高效且易于编写的编程语言，用于构建高性能的网络服务器和分布式系统。
- Gin是一个快速、高效、轻量级的HTTP Web框架
- GORM 适用于Go的简单易用的ORM库
- go mod init server
- go get -u github.com/gin-gonic/gin
    - 会被下载到 $GOPATH/src 目录下对应的包的路径中
    - 
- 热更新
    .air.toml  
    ```
    root = "."
    tmp_dir = "tmp"
    build_args = ["-i"]
    ignore_dirs = ["tmp", "logs", "public"]
    ignored_extensions = ["go", "tpl", "db", "sql"]
    watch_listen_delay = "1s"

    [build]
    cmd = "go build -o ./tmp/main"
    args = ["-ldflags", "-w -s"]

    [[watcher]]
    path = "."
    recursive = true
    delay = "1s"
    events = ["create", "write", "remove", "rename"]
    ignored_paths = ["tmp/*", "logs/*", "public/*"]
    ```
    air
    go install github.com/cosmtrek/air@latest