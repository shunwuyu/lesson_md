[source](https://juejin.cn/post/6917096816118857736)
- 把文件内容输出到命令行是哪个命令？
1.  grep -e 后面是正则表达式
cat > 从键盘创建文件  用于连接文件并打印到标准输出设备上  <<EOF  多行文本
cat > 996 <<EOF
2. cat 996 | grep -E ^996
  - cat 996 | grep -E 996$
  - cat 996 | grep -E icu+
  - cat 996 | grep -E ^[\^0-9] 不是以数字开头的
  - cat 996 | grep -E -v [0-9]{3} 匹配所有不包含996的行，良心命令，泪奔
3. 匹配到icu和icuuuuuu
  cat 996 | grep -E boss\|icu 
4. 匹配所有行
  cat 996 | grep -E .


## 创建一个文件

6.1 数字序列
  ```linux
    seq 10 20 >> spring
  ```
  /> 前面命令行输出重定向到其他地方 w+ a+
  如何打印出来
  - cat spring
  - cat -n spring

  ```
    cat > index.html <<EOF
    <html>
        <head><title></title></head>
        <body></body>
    </html>
    EOF
  ```