# 在js中共有6种 （基本） 数据类型 
#https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive
  1. string number boolean null undefined 
     Symbol(es6新增，表示独一无二的值) object(第七种数据类型，不是基本类型但也是一种数据类型)
      <!--  -->
      let a = 1
      let b = 1
      a === b //true
      <!--  -->
      let a = Symbol('1')
      let b = Symbol('1')
      a === b //false
    Symbol应用场景：假设我们需要修改他人的项目时，我想定义一个 foo（）的函数，但是我不知道这个名字有没有在这个项目中被前辈已经用过了，没有关系

  2. 所有的基本类型的值都（不可改变）
      var a = 'aaa'
      console.log(a) //aaa
      console.log(a) //aaa
      a.toUpperCase() //"AAA"
      console.log(a) //aaa

  3. 类型转换
    


