- 如何根据不用的用户终端， 输出不同的页面? 
  1. nginx 配置user-agent
  /usr/local/nginx
  ```
    location / {
      // 默认 PC 端
      root /usr/local/website/web;

      # 判断 UA，访问移动端
      if ( $http_user_agent ~* "(Android|webOS|iPhone|iPad|BlackBerry)" ){
          root /usr/local/website/mobile;
      }

      index index.html index.htm;
  }

  ```

切换模拟器   
  手机 Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 -----------------
  PC Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36 -----------------
  Vary: User-Agent

  但最好不要出现这种情况，PC 端和移动端如果是两套代码，建议用两个域名，理由如下
  - nginx 判断是否移动端容易出错
  - 对缓存不友好 