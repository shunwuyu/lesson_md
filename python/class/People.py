class People:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self._protect_var = 10              # 受保护的成员,使用一个下划线_,它仅仅是提示成员受保护,但可以被更改
        self.__private_var = 10             # 使用双下划线__可以定义私有属性
 
    # def sayhi(self):
    #     print("Hi, my name is {}, and I'm {}".format(self.name, self.age))
 
    # def get_var(self):
    #     print(self.__private_var)
 
    # def set_var(self, var):
    #     self.__private_var = var

# class instance 类的实例化
 
someone = People(name='Jack', age=20)       # 类的实例化
print(someone._protect_var)                 # 10 受保护的成员可以被打印
someone._protect_var = 20                   # 受保护的成员可以被修改
print(someone._protect_var)
# print(someone.__private_var)