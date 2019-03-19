[source]
## [rebase 代替 merge](https://juejin.im/book/5a124b29f265da431d3c472e/section/5a1422a4f265da432b4a73cf)

commit历史出现分叉, 分叉再汇合让人觉得混乱而难以管理。 

git rebase 目标基点
分支创建后产生分叉，git rebase 将基点设置为新的基础点， 除去了分支，

新建文件， 先git merge   产生交叉
git checkout branch1   git rebase master (移动基点)
git checkout master  git merge branch1

git reset --hard HEAD^

rebase(变基) 代替 merge
commit 序列重新设置基础点（也就是父commit）