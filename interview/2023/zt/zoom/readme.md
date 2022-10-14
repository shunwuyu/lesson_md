- http 无状态
    - 它的每个请求都是完全独立的，每个请求包含了处理这个请求所需的完整的数据，发送请求不涉及到状态变更。
    - 原因
        最初的 http 协议只是用来浏览静态文件的，无状态协议已经足够，这样实现的负担也很轻
        实现有状态的代价是很高的，要维护状态，根据状态来操作
    - 优点是比有状态的协议更简单  
        HTTP/1.1 上，同一个连接允许传输多个 HTTP 请求的情况下，如果第一个请求出错了，后面的请求一般也能够继续处理
    -  HTTP 这样的无状态协议，使用元数据（如 Cookies 头）来维护会话，使得会话与连接本身独立起来，这样即使连接断开了，会话状态也不会受到严重伤害，保持会话也不需要保持连接本身（链接和会话独立）
    - HTTP 1.x 是无状态的协议
        HTTP/2，它应该算是一个有状态的协议了（有握手和 GOAWAY 消息
    - 如何解决无状态问题
        服务器无法给不同的客户端响应不同的信息。 购物车业务， 用户系统
        1. Cookie 4步
            Client 发送 HTTP 请求给 Server
            Server 响应，并附带 Set-Cookie 的头部信息
            Client 保存 Cookie，之后请求 Server 会附带 Cookie 的头部信息
            Server 从 Cookie 知道 Client 是谁了，返回相应的响应
            Server 拿到 Cookie 后面，通过什么信息才能判断是哪个 Client 呢？服务器的 SessionID。
        2. Session
            如果把用户名、密码等重要隐私都存到客户端的 Cookie 中，还是有泄密风险。为了更安全，把机密信息保存到服务器上，这就是 Session。Session 是服务器上维护的客户档案，可以理解为服务器端数据库中有一张 user 表，里面存放了客户端的用户信息。SessionID 就是这张表的主键 ID。

            Session 信息存到服务器，必然占用内存。用户多了以后，开销必然增大。为了提高效率，需要做分布式，做负载均衡。因为认证的信息保存在内存中，用户访问哪台服务器，下次还得访问相同这台服务器才能拿到授权信息，这就限制了负载均衡的能力。而且 SeesionID 存在 Cookie，还是有暴露的风险，比如 CSRF(Cross-Site Request Forgery，跨站请求伪造)。
        3. Token
            首先，Token 不需要再存储用户信息，节约了内存。其次，由于不存储信息，客户端访问不同的服务器也能进行鉴权，增强了扩展能力。然后，Token 可以采用不同的加密方式进行签名，提高了安全性。
            Token 就是一段字符串，Token 传递的过程跟 Cookie 类似，只是传递对象变成了 Token。用户使用用户名、密码请求服务器后，服务器就生成 Token，在响应中返给客户端，客户端再次请求时附带上 Token，服务器就用这个 Token 进行认证鉴权。
            Token 虽然很好的解决了 Session 的问题，但仍然不够完美。服务器在认证 Token 的时候，仍然需要去数据库查询认证信息做校验。为了不查库，直接认证，JWT 出现了。
        4.  JWT
            JWT 的英文全称是 JSON Web Token。JWT 把所有信息都存在自己身上了，包括用户名密码、加密信息等，且以 JSON 对象存储的。
            JWT 长相是 xxxxx.yyyyy.zzzzz
            {  "sub": "1234567890",  "name": "John Doe",  "admin": true}
            签名，把 header 和 payload 用 base64 编码后"."拼接，加盐 secret(服务器私钥)。
            eyJhbGciOiJIUzI1NiJ9  .eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ  .yKOB4jkGWu7twu8Ts9zju01E10_CPedLJkoJFCan5J4;
            给 Token 穿个外套
            Authorization: Bearer;
            这就是我们在请求 Header 里面看到的内容格式了
        
- let const 使用场景
    对于需要写保护的变量则使用const,只有确实需要改变变量的值时,则使用let,因为大部分变量的值在初始化后不应该在改变,而预料外的变量的值的改变会产生很多Bug

    如果希望在全局对象下定义变量,可以使用var

    块级作用域绑定的let,const为javaScript引入了词法作用域,使用它们声明变量不会提升,而且只可以在声明这些变量的代码块种使用\

    使用let,const也能够节省内存空间,不会造成全局变量的污染,必须的得前置声明赋值,然后才能使用(暂存性死区)\

- 伪类选择器
    CSS3中添加了许多了伪类选择器， 代替了不少JS的工作，让我们从以前通过获取DOM节点进而进行样式修改的操作，变得更加便捷高效。

    - :first-child / :last-child
    - :first-of-type / :last-of-type
    - :nth-child(n) / :nth-last-child(n)
    - :root 定义变量
    - :empty

- BEM 命名规范
    Block(块）  Element（元素）  Modifier(修饰符）
    weui   .weui-cell.weui-cell_access>.weui-cell__hd+.weui-cell__bd+.weui-cell__ft
    将用户界面分为独立的块,即使复杂的UI，这也使界面开发变得容易和快速，并且允许重用现有代码而无需复制和粘贴。
    - 避免样式冲突
    - 减小名称长度
    - 提高可阅读性
    - 增加样式重用

- css 预处理器less  sass 实现
    主要用 stylus   react 中也是用过styled-components 
    1. 变量
        主题， 便于维护
    2. minxin
        复用代码 比如 1px border  清楚浮动 适配背景
    3. 嵌套
        缩进代表模块化
    工程化  使用css-loader style-loader 等加载 stylus 等编译

- 为什么使用style-component, 有什么好处？
    之前 css 和 js 分离，  css 模块化   
    <div class="red-button"></div>
    找到CSS的文件，然后在文件中搜.red-button  
    烦人的绑定过程消失  标签+样式组合

    - CSS模块化
        尽量降低模块之间的耦合度，利于项目的进一步维护
    - 支持预处理器嵌套语法
    - 让CSS代码能够处理逻辑
        <RecommendItem imgUrl={'xxx'}/>
        export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;

    - 语义化
        ```
        <HeaderWrapper>
    <Logo/>
    <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
    	</NavItem>
        <SearchWrapper>
            <NavSearch></NavSearch>
            <i className='iconfont'>&#xe614;</i>
        </SearchWrapper>
    </Nav>
    <Addition>
        <Button className='writting'>
    	  <i className="iconfont">&#xe615;</i>
    	  来参加
    	</Button>
    	<Button className='reg'>注册</Button>
    </Addition>
</HeaderWrapper>
        ```
- axios 封装过程
    https://juejin.cn/post/7124573626161954823#heading-19

    只要是写过生产环境前端代码的人， 应该都脱离不了异步接口请求
    那么 接口请求 的 封装 是必经之路。

    ```
    axios.post(`/api/xxxx/xxxx?xxx=${xxx}`, { ...data })
.then((result) => {
    if (result.errno) {
        ....
    } else {
        ....
    }
})
.catch((err) => {
    ....
})
    ```
    数十上百 行重复代码
    随着请求的体量越来越大，我们的项目便越来越难以维护

    const [e, r] = await api.getUserInfo(userid)
    if (!e && r) this.userInfo = r.data.userinfo
    最终的实现效果

    - 基础请求流程
    - 拦截器
    

- baseURL 实现
    const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
    })


- rem元素使用场景， 如何动态设置html元素字体大小






