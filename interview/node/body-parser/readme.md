https://github.com/chyingp/nodejs-learning-guide/blob/master/%E8%BF%9B%E9%98%B6/body-parser.md

```js
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
```

报文
Content-Type、Content-Encoding以及报文主体

POST /test HTTP/1.1
Host: 127.0.0.1:3000
Content-Type: text/plain; charset=utf8
Content-Encoding: gzip
chyingp

- 处理不同类型的请求体：比如text、json、urlencoded等，对应的报文主体的格式�不同。
- 处理不同的编码：比如utf8、gbk等
- 处理不同的压缩类型：比如gzip、deflare等。
- 其他边界、异常的处理。



