import time
# 自动调用close
with open('php.ini', 'r') as f:
  # print(f.read())
  for line in f.readlines():
    print(line)
    time.sleep(1)
