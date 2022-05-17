[source](https://juejin.cn/book/6844733790204461070/section/6844733790263197703)

- 谈一谈设计模式
    设计模式（Design Pattern）是对软件设计中普遍存在（反复出现）的各种问题，所提出的解决方案。 
    烹饪有菜谱，游戏有攻略，每个领域都存在一些能够让我们又好又快地达成目标的“套路”。在程序世界，编程的“套路”就是设计模式。

- 构造器模式
    每天都在用

- 公司员工信息录入系统，这个系统开发阶段用户只有你自己，想怎么玩怎么玩
    ```
    const liLei = {
        name: '李雷',
        age: 25,
        career: 'coder',
    }
    ```
    韩梅梅想进去
    ```
    const hanMeiMei = {
        name: '韩梅梅',
        age: 24,
        career: 'product manager'
    }
    ```
    - 产品经理是谁？
        提需求， 让我们加班的人， 

    又过了两天你老板过来了，说李雷，系统今天提测了，先把部门的 500 人录入看看功能。李雷心想，500 个对象字面量，要死要死，还好我有构造函数。于是李雷写出了一个可以自动创建用户的 User 函数：
    // 构造器
    function User(name , age, career) {
        this.name = name
        this.age = age
        this.career = career 
    }
    - es6 class  和构造函数关系是？
    因为 ES6 中的 class 其实本质上还是函数，class 语法只是语法糖，构造函数，才是它的真面目

    就是让程序自动地去读取数据库里面一行行的员工信息，然后把拿到的姓名、年龄等字段塞进User函数里，进行一个简单的调用：
    const user = new User(name, age, career)

    像 User 这样当新建对象的内存被分配后，用来初始化该对象的特殊函数，就叫做构造器。在 JavaScript 中，我们使用构造函数去初始化对象，就是应用了构造器模式。  （套路）

    在创建一个user过程中，谁变了，谁不变？

    变的是每个user的姓名、年龄、工种这些值，这是用户的个性，不变的是每个员工都具备姓名、年龄、工种这些属性，这是用户的共性。

    那么构造器做了什么？

    构造器是不是将 name、age、career 赋值给对象的过程封装，确保了每个对象都具备这些属性，确保了共性的不变，同时将 name、age、career 各自的取值操作开放，确保了个性的灵活？

    如果在使用构造器模式的时候，我们本质上是去抽象了每个对象实例的变与不变。那么使用工厂模式时，我们要做的就是去抽象不同构造函数（类）之间的变与不变。

## 简单工厂模式
    李雷的新需求
    程序员和产品经理之间的区别一个简单的career字段怎么能说得清？我要求这个系统具备给不同工种分配职责说明的功能。也就是说，要给每个工种的用户加上一个个性化的字段，来描述他们的工作内容。

    这下员工的共性被拆离了。还好有构造器，李雷心想不就是多写个构造器的事儿吗

    ```
    function Coder(name , age) {
        this.name = name
        this.age = age
        this.career = 'coder' 
        this.work = ['写代码','写系分', '修Bug']
    }
    function ProductManager(name, age) {
        this.name = name 
        this.age = age
        this.career = 'product manager'
        this.work = ['订会议室', '写PRD', '催更']
    }
    ```

麻烦的事情有什么？
    从数据库拿到一条数据，都要人工判断一下这个员工的工种，然后手动给它分配构造器吗？
    不行，这也是一个“变”，我们把这个“变”交给一个函数去处理：
    简单工厂模式

    ```
    function Factory(name, age, career) {
        switch(career) {
            case 'coder':
                return new Coder(name, age) 
                break
            case 'product manager':
                return new ProductManager(name, age)
                break
            ...
    }
    ```

    ，李雷哭了，他想到：整个公司上下有数十个工种，难道我要手写数十个类、数十行 switch 吗？


    在楼上这两段并不那么好的代码里，变的是什么？不变的又是什么？

    Coder 和 ProductManager 两个工种的员工，是不是仍然存在都拥有 name、age、career、work 这四个属性这样的共性？它们之间的区别，在于每个字段取值的不同，以及 work 字段需要随 career 字段取值的不同而改变。

    这样一来，我们是不是对共性封装得不够彻底？那么相应地，共性与个性是不是分离得也不够彻底？

    现在我们把相同的逻辑封装回User类里，然后把这个承载了共性的 User 类和个性化的逻辑判断写入同一个函数：
    ```
    function User(name , age, career, work) {
    this.name = name
    this.age = age
    this.career = career 
    this.work = work
}

function Factory(name, age, career) {
    let work
    switch(career) {
        case 'coder':
            work =  ['写代码','写系分', '修Bug'] 
            break
        case 'product manager':
            work = ['订会议室', '写PRD', '催更']
            break
        case 'boss':
            work = ['喝茶', '看报', '见客户']
        case 'xxx':
            // 其它工种的职责分配
            ...
            
    return new User(name, age, career, work)
}
    ```

这么做 有什么好处？
- 简单太多
    不用自己时刻想着我拿到的这组数据是什么工种，
    怎么给它分配构造函数
    更不用手写无数个构造函数
    Factory已经帮我们做完了一切，而我们只需要像以前一样无脑传参就可以了

- 工厂模式是什么？
    工厂模式其实就是将创建对象的过程单独封装
    像什么？
        很像我们去餐馆点菜：比如说点一份西红柿炒蛋，我们不用关心西红柿怎么切、怎么打鸡蛋这些菜品制作过程中的问题，我们只关心摆上桌那道菜
        在工厂模式里，我传参这个过程就是点菜，工厂函数里面运转的逻辑就相当于炒菜的厨师和上桌的服务员做掉的那部分工作——这部分工作我们同样不用关心，我们只要能拿到工厂交付给我们的实例结果就行了。

- 工厂模式的目的，就是为了实现无脑传参，就是为了爽

