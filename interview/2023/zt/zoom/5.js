// 可节省内存空间
function f(condition) {
    if(condition) {
        let dateVal = new Date();
        return dateVal;
    }else {
        // 变量dateVal在此处不存在
        return null;
    }

    // 变量dateVal在此处不存在
}
