import pymysql

conn = pymysql.connect(
    host="localhost",
    user="root",password="1234567890",
    database="batschool",
    charset="utf8")

cursor = conn.cursor() 

sql = """
CREATE TABLE userinfo (
id INT auto_increment PRIMARY KEY ,
user CHAR(30) NOT NULL UNIQUE,
pwd CHAR(100) NOT NULL
)ENGINE=innodb DEFAULT CHARSET=utf8;  #注意：charset='utf8' 不能写成utf-8
"""

cursor.execute(sql)

cursor.close()