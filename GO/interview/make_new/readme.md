[source](https://studygolang.com/articles/33648#reply2)

make slice map  channel  所创建类型的本身， 而不是新的指针的引用

len cap 

new 其返回值是所创建类型的指针引用

会初始化 slice、chan、map 类型的内部数据结构，new 函数并不会