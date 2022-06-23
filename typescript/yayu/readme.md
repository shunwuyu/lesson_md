[source](https://github.com/mqyqingfeng/Blog/issues/227)

- 1.js 想到什么?
    message 是可调用的吗？
    message 有一个名为 toLowerCase 的属性吗？
    如果有，toLowerCase 是可以被调用的吗？
    如果这些值都可以被调用，它们会返回什么？
    谨记在心，同时还要期望处理好所有的细节

    当我们运行代码的时候，JavaScript 会在运行时先算出值的类型（type），然后再决定干什么。所谓值的类型，也包括了这个值有什么行为和能力。当然 TypeError 也会暗示性的告诉我们一点，比如在这个例子里，它告诉我们字符串 Hello World 不能作为函数被调用。

    替代方案就是使用静态类型系统（static type system）

    当我们写新代码的时候，我们也尽力避免产生新的 bug。