from pymongo import MongoClient
from random import randint
 
 
name = [
  'yangx',
  'yxxx',
  'laok',
  'kkk',
  'ji',
  'gaoxiao',
  'laoj',
  'meimei',
  'jj',
  'manwang',
]
 
title = [
  '123',
  '321',
  '12',
  '21',
  'aaa',
  'bbb',
  'ccc',
  'sss',
  'aaaa',
  'cccc',
]
 
client = MongoClient('localhost', 27017)
db = client.student
bbs = db.bbs
bbs.remove()
for i in range(1, 10000):
  na = name[randint(0, 9)]
  ti = title[randint(0, 9)]
  newcard = {
    'author': na,
    'title': ti,
  }
  bbs.insert_one(newcard)
 
print(bbs.count())