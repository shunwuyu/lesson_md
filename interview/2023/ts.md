- type和interface的区别
    都可以用来表示 接口, 都是用来定义 对象 或者 函数 的形状
    1.ts
    它俩也支持 继承，并且不是独立的，而是可以 互相 继承，只是具体的形式稍有差别
    2.ts
    继承是通过 extends 实现的，而type的话是通过 & 来实现的
    不同点 type 能做， 接口不能做的
    - type可以定义 基本类型的别名，如 type myString = string
    - type可以通过 typeof 操作符来定义，如 type myType = typeof someObj
    - type可以申明 联合类型，如 type unionType = myType1 | myType2
    - type可以申明 元组类型，如 type yuanzu = [myType1, myType2]
    interface 能做，type不能做的
    interface可以 声明合并
    ```
    interface test {
        name: string
    }
    interface test {
        age: number
    }
    ```


