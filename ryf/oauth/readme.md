[source](http://www.ruanyifeng.com/blog/2019/04/github-oauth.html)

- 第三方登录的原理
  OAuth 授权    A 网站   第三方网站的数据  证明自己的身份。获取第三方网站的身份数据，就需要 OAuth 授权。
  同时发回一个授权码
  A 网站使用授权码，向 GitHub 请求令牌。
  GitHub 返回令牌.
  A 网站使用令牌，向 GitHub 请求用户数据。

  A -> Github -> User

- 登记 
  https://github.com/settings/applications/new
- 应用的身份识别码
  


