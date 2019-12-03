import pymysql

user=input('user>>: ').strip()
pwd=input('password>>: ').strip()

conn=pymysql.connect(
    host='127.0.0.1',#我的IP地址
    port=3306,   # 不是字符串不需要加引号。
    user='root',
    password='1234567890',
    db='batschool',
    charset='utf8'
)

cursor=conn.cursor()

sql='select * from userinfo where user = "%s" and pwd="%s"' % (user, pwd)
print(sql)
res=cursor.execute(sql)
print(res)

cursor.close()
conn.close()

if res:
    print('登录成功')
else:
    print('登录失败')