var fs = require('fs');

var image = fs.readFileSync("car.jpg").toString("base64");

var AipOcrClient = require("baidu-aip-sdk").ocr;

var APP_ID = "17707054";
var API_KEY = "gl5HwHimkR1SgE5iaZCN4sql";
var SECRET_KEY = "j6Ij5blUCP7Zg8jMxDeUfk0eG88rW3qw";

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);
var options = {};
options["multi_detect"] = "true";

// 带参数调用车牌识别
client.licensePlate(image, options).then(function(result) {
    console.log(JSON.stringify(result));
}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});;