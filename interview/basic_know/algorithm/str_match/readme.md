[source](https://juejin.cn/post/6844904072554741767)

- 何为bf算法？
    Brute Force（暴力算法）

- 给你两个字符串A和B, 请你判断B是否是A的子串，并返回B在A中第一次出现的位置 
    - case 1
        A:  abcdefgh
        B:  cdef
        是字串   下标是2
    - case 2
        A: abcdefgh
        B: bcdg
        -1  不存在

- A称为主串， B为模式串  正则

1. 粗暴解法
    从头开始， 把主串和模式串的字符一个一个进行匹配就行了。 如果发现不匹配， 再从主串的下一位开始

    细说移动方法  两个指针   
    ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/2/26/1707fb5190ff1531~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)
    ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/2/26/1707fb518d93b1e4~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)
    ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/2/26/1707fb51971e6176~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)
    ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/2/26/1707fb51a0178c18~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)
    ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/2/26/1707fb51a35ca79c~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)
    ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/2/26/1707fb51accf0ef1~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

    ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/2/26/1707fb51b7c7e902~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

- 能解决问题， 但是极端情况下算法效率很低


- RK 算法， 基于BF算法的一种改进
    比较两个字符串的hash值

    用过哈希表的朋友们都知道，每一个字符串都可以通过某种哈希算法，转换成一个整型数，这个整型数就是hashcode：

    hashcode = hash（string）

    显然，相对于逐个字符比较两个字符串，仅比较两个字符串的hashcode要容易得多。

    1. 我们需要生成模式串的hashcode
        - 按位相加
            我们可以把a当做1，b当做2，c当做3......然后把字符串的所有字符相加，相加结果就是它的hashcode。
            bce = 2 + 3 + 5 = 10
            比如bce、bec、cbe的hashcode是一样的
        - 转换成26进制数
            bce = 2*(26^2) + 3*26 + 5 = 1435
            这样做的好处是大幅减少了hash冲突，缺点是计算量较大，而且有可能出现超出整型范围的情况，需要对计算结果进行取模。
        
    2. 第二步，生成主串当中第一个等长子串的hashcode。
        由于主串通常要长于模式串，把整个主串转化成hashcode是没有意义的，只有比较主串当中和模式串等长的子串才有意义。
        我们首先生成主串中第一个和模式串等长的子串hashcode，
        abb = 1 + 2 + 2 = 5：
    3. 第三步，比较两个hashcode。
        显然，5！=10，说明模式串和第一个子串不匹配，我们继续下一轮比较。
    4. 第四步，生成主串当中第二个等长子串的hashcode。
    5. 第五步，比较两个hashcode。
    6. 生成主串当中第三个等长子串的hashcode。

- 每次hash的时间复杂度是O(n), 如果把全部字串都进行hash, 总的时间复杂度和BF一样  O(m*n)

- 如何优化？
    我们没有必要把子串的字符重新进行累加运算，而是可以采用一个更简单的方法。由于新子串的前面少了一个a，后面多了一个d，所以：

    新hashcode = 旧hashcode - 1 + 4 = 26-1+4 = 29

- RK算法计算单个子串hash 的时间复杂度是O(n),
    但由于后续的子串hash 是增量计算， 总的时间复杂度是O(n);

