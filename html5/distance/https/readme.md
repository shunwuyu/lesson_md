-  修改host文件   
  C:\Windows\System32\drivers\etc 
  http://127.0.0.1:8080/   http://www.wolaiye.com:8080/
- 修改nginx 
  server {
2         listen       80;
3         server_name  www.123.com;
4 
5         location / {
6             proxy_pass http://127.0.0.1:8080;
7             index  index.html index.htm index.jsp;
8         }
9     }

