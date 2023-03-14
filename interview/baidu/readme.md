https://ac.nowcoder.com/discuss/1074763?type=2&order=0&page=1

https://www.bilibili.com/video/BV1c3411b7nr/?spm_id_from=333.337.search-card.all.click&vd_source=3d50341f547faf8df242a214b04f2d86

- 字符串的全排列
    abc
    深度优先搜索的思路是这样的
    首先 有一个零时的状态  ， 当前的状态是什么， 可选的字符是什么
    '' []  当前空的  可选 [abc]
    第一层  a 或 b 或 c
        [a] 第一层选 a  下一轮可选的 [bc]
            每一级， 接着往里面尝试  
            [ab]  [c]
            要把所有的字符都用光
                [abc]  [] 剩余空 => res.push  记录
                当可选的字符串没有的时候， 
                零时字符串长度等于开始字符串长度时
            [ac]  [b]
                [acb] []   => 
        [b]如果 b      下一轮可选的[ac]
            [ba]  c
            [bc]  a
        [c]如果c       下一轮[ab]
            [ca]  b
            [cb]  a


深度优先 才会回到上一层
去重方式
    "abbc"  a  bbc   
     b   [bc]
     b   [bc]  重复 
     c