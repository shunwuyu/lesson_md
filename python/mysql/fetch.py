import pymysql

conn = pymysql.connect (
    host='127.0.0.1',
    port=3306,
    user='root',
    password='1234567890',
    database='batschool',
    charset='utf8'
)

cursor = conn.cursor(cursor=pymysql.cursors.DictCursor)
sql = 'select user,pwd from userinfo;'
cursor.execute(sql)
ret1 = cursor.fetchone()
ret2 = cursor.fetchmany(3)
ret3 = cursor.fetchone()
cursor.close()
conn.close()

print(ret1)
print(ret2)
print(ret3)

