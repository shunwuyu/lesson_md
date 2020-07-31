[source](http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html)

编写代码只是软件开发的一小部分，更多的时间往往花在构建（build）和测试（test）。

构建和测试的自动化  Travis CI

Travis CI 提供的是持续集成服务（Continuous Integration，简称 CI）

它绑定 Github 上面的项目，只要有新的代码，就会自动抓取。然后，提供一个运行环境，执行测试，完成构建，还能部署到服务器

持续集成的好处在于，每次代码的小幅变更，就能看到运行结果，从而不断累积小的变更，而不是在开发周期结束时，一下子合并一大块代码。

