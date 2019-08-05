## 文件系统图解
![image](https://user-images.githubusercontent.com/19408342/62447174-51b0d980-b797-11e9-9774-01a85e872fac.png)

- /etc linux 主要配置文件
- /usr unix resource share 应用文件

`cd ~`:用户当前的目录
## ls -al
```js
drwxr-xr-x   3 zhaomeng  staff      96  5  5 23:39 WeChatProjects
```

- 第一列：

字母 d 目录
符号 - 普通文件
owner权限 group权限 other 权限 

- 第二列：

若是文件则代表该文件的硬链接数，若是目录，则代表该目录下的子目录数。

- 第三列：

当前文件所属的用户名

- 第四列：

当前文件所属的用户组

- 第五列：

若是文件则代表该文件的大小，若是目录则代表该目录的大小。

- 第六列：

该文件最近修改或者查看的时间

- 第七列：

文件名
## 万能的 man (manual) 以及 -h
不知道命令有什么用，查看命令的手册。
## 修改权限
选项 +o（owner权限 group权限 other 权限 ） 代表需要给哪一个角色添加权限
`chmod +ox foo.js`
## 复制文件
`cp ` 或者 `cp -R` 复制整个目录
cp 源文件 目标文件
选项：-p 保留原文件的修改时间

## 删除文件
`rm -r` 删除目录
## 移动文件
`mv `:
mv 源文件 目标文件

## 文本内容查看

- `cat`: 文本内容显示到终端

- `head`: 查看文件开头

1. [- 5] 前 5 行

- `tail`: 查看文件结尾

1. [- 5] 结尾 5 行
2. [-f] 当文件的内容更新的时候同步更新

- `wc`: 统计文件内容信息

## 打包 压缩
windows：.zip .rar
linux: 压缩分开的 第一步先打包 第二部压缩
tar 打包：
常用参数：
- c 打包
- x 解包
- f 指定操作类型为文件

打包/压缩：
`tar cf backupjs.tar ./js`: 把 js 目录打包
tar 命令比较强大 也集合了 压缩功能：
`tar czf backupjs.tar.gz ./js`: 把 js 目录 打包 并且以 zip 压缩，采用双文件名的形式便于表达该文件的格式。
`tar cjf backupjs.tar.bz2 ./js`: 把 js 目录 打包，并且以 bzip2 压缩。
解包：
`tar zxf backupjs.tar.gz -C backup`: -C 指定了 解包之后文件需要存在哪个位置。
`tar xjf backupjs.tar.bz2 -C backup`: bzip2 同理
gzip bzip2 压缩：
