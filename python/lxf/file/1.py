# f = open('./test.txt', 'r')
# # f = open('./not.txt', 'r')
# print(f.read())
# f.close()

try:
  f = open('./test.txt', 'r')
  print(f.read())
finally:
  if f:
    f.close()