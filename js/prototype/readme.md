[source](https://sunyuhui.com/2016/05/28/prototype-chain/)

构造函数、实例、原型这场三角恋

通过构造函数Person 生成了person这个实例

构造函数的prototype属性， 指向构造函数的原型， 构造函数的原型的constructor属性指向构造函数， 构造函数生成实例的__proto__属性指向构造函数的原型

Person.prototype  构造函数的原型 
Person.prototype.constructor 构造函数
person.__proto__ 属性   基于原型的继承

person继承了构造函数的原型Person.prototype的getName方法

