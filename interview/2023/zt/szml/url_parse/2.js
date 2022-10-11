function parseParam(url) {
    const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
    //exec() 方法用于检索字符串中的正则表达式的匹配。
    const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
    let paramsObj = {};
    // 将 params 存到对象中
    paramsArr.forEach(param => {
        if (/=/.test(param)) { // 处理有 value 的参数
            let [key, val] = param.split('='); // 分割 key 和 value
            val = decodeURIComponent(val); // 解码
            val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字
               //test() 方法用于检测一个字符串是否匹配某个模式.
            if (paramsObj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
                paramsObj[key] = [].concat(paramsObj[key], val);
                //concat() 方法用于连接两个或多个数组。
                //该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
            } else { // 如果对象没有这个 key，创建 key 并设置值
                paramsObj[key] = val;
            }
        } else { // 处理没有 value 的参数
            paramsObj[param] = true;
        }
    })
    
    return paramsObj;
}