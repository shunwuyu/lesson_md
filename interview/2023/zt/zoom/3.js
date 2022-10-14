// 之所以定义暂时性死区,和不存在变量的提升,主要是为了减少运行时的错误,
// 防止在变量声明之前就使用这个变量,从而导致一些
// 暂时性死区的本质是: 只要一进入当前作用域,所使用的变量就已存在,但是不可获取,
// 只有等到声明变量的那一行代码出现,才可以获取和使用该变量
if(true) {
    // 暂时性死区开始
    tmp = 'itclanCoder'; // ReferenceError,报错
    console.log(tmp);

    let tmp; // 暂时性死区结束
    console.log(tmp); // undefined
    tmp = "随笔川迹";
    console.log(tmp);
}

