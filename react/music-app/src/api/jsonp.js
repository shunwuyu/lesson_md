import originJsonp from "jsonp"

let jsonp = (url, data, option) => {
    return new Promise((resolve, reject) => {
        originJsonp(buildUrl(url, data), option, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
};
/**
 * 
 * @param {*} url 
 * @param {*} data 
 * 将 url 拼接 data qs
 * 如果没问好加上 ？ 否则 累加 &
 */
function buildUrl(url, data) {
    let params = [];
    for (var k in data) {
        params.push(`${k}=${data[k]}`);
    }
    let param = params.join("&");
    if (url.indexOf("?") === -1) {
        url += "?" + param;
    } else {
        url += "&" + param;
    }
    return url;
}

export default jsonp
