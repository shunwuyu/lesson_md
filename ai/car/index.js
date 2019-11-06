var AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;

var APP_ID = "17706972";
var API_KEY = "KsWm1Pq1DGOvvVqGXLAl7xwK";
var SECRET_KEY = "tbo4yOhBsFuuDCpD4GT9j7zyLo04OuTH";

var client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);

var fs = require('fs');
var image = fs.readFileSync("car.jpg").toString("base64");

client.carDetect(image).then(function(result) {
  console.log(JSON.stringify(result));
}).catch(function(err) {
  // 如果发生网络错误
  console.log(err);
});
