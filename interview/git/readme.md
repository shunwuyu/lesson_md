[source](https://juejin.im/post/5c7690ab518825404713e709)
1. 将更改从一个分支集成到另一个分支 怎么做？  merge  rebase(变基)
2. git fetch git pull 区别 
3. https://juejin.im/post/5b46c784f265da0f540513cd
4. 如何修改commit 信息  
  git commit --amend  最后一条
  git rebase -i HEAD~3
- git checkout -b feature  https://juejin.im/post/5b46c784f265da0f540513cd

5. git checkout 可以实现哪些功能
  1.切换分支
    git checkout 分支名
  2. 创建并切换到新分支
    git checkout  -b 分支名
  3. 撤销对文件的修改
    git checkout 文件名
    git checkout .
- 常用的分支
  master	主分支
  develop	开发分支，包含确定即将发布的代码
  feature	新功能分支，一般一个新功能对应一个分支
  release	发布定期要上线的功能
  hotfix	当系统在线上出现bug时，需要火速处理


  git log --graph --pretty=oneline --abbrev-commit 简短且唯一的值


git rebase命令经常被认为是Git巫术，
初学者应该远离它 但它实际上可以让开发团队在使用时更加轻松

在专用分支中开发新功能时另一个团队成员以新提交更新master分支会发生什么。这会出现分叉历史记录

master新提交与你正在开发的功能相关
git checkout feature
git merge master
git merge master feature

feature分支中创建一个新的“merge commit”

这也意味着每次上游更改时feature都需要合并，且有无关的合并提交。如果master改动非常频繁，这可能会严重污染你分支的历史记录。

git checkout feature
git rebase master

rebase的主要好处是可以获得更清晰的项目历史记录


