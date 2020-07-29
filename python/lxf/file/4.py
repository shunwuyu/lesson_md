# f = open('test.txt', 'w')
# f.write('你好啊')
# f.close()

with open('test.txt', 'w') as f:
  f.write('Hello world!来自日本')

# with open('test.txt', 'a') as f:
#   f.write('Hello world!来自日本')
