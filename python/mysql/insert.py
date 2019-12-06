import pymysql

conn = pymysql.connect(
    host='127.0.0.1',
    port=3306,
    user='root',
    password='1234567890',
    database='batschool',
    charset='utf8'
)

cursor = conn.cursor()

sql = 'insert into userinfo(user,pwd) values(%s,%s);'

data = [
    ('july', '147'),
    ('june', '258'),
    ('marin', '369')
]

cursor.executemany(sql, data)

conn.commit()

cursor.close()
conn.close()