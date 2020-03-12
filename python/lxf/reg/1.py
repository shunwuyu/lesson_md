import re

def main():
  tel = input("请输入手机号：")
  ret = re.match(r"^1[35678]\d{9}$", tel)

  if ret:
    print("匹配成功")
  else:
    print("匹配失败")
    
# 第一是作为脚本直接执行
if __name__ == "__main__":
  main()