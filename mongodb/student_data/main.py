from pymongo import MongoClient
from random import randint

name1 = ["yang ", "li ", "zhou "]
name2 = [
  "chao",
  "hao",
  "gao",
  "qi gao",
  "hao hao",
  "gao gao",
  "chao hao",
  "ji gao",
  "ji hao",
  "li gao",
  "li hao",
]

provinces = [
  "guang dong",
  "guang xi",
  "shan dong",
  "shan xi",
  "he nan"
]
client = MongoClient('localhost', 27017)
db = client.student
print(db)
# 集合名为smessage
sm = db.smessage 
sm.remove()
for i in range(1, 100):
  name = name1[randint(0, 2)] + name2[randint(0, 10)]
  province = provinces[randint(0, 4)]
  new_student = {
    "name": name,
    "age": randint(1, 30),
    "province": province,
    "subject": [
      {"name": "chinese", "score": randint(0, 100)},
      {"name": "math", "score": randint(0, 100)},
      {"name": "english", "score": randint(0, 100)},
      {"name": "chemic", "score": randint(0, 100)},
    ]}
  print(new_student)
  sm.insert_one(new_student)

print(sm.count())

  