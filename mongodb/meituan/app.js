const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var url = "mongodb://192.168.31.128:27017/meituan";
let dbObj;
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  dbObj = db;
  console.log('数据库连接成功');
})


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json({}));
app.get('/restaurant/:restaurant_id', async (req, res) => {
  let restaurant_id = req.params.restaurant_id;
  console.log(restaurant_id)
  if (!restaurant_id) {
    res.send({
      status: -1,
      message: '获取指定餐馆失败，参数有误'
    })
    return
  }
  
  try {
    var dbo = dbObj.db("meituan");
    dbo
      .collection("restaurant")
      .find({
        _id: ObjectID(restaurant_id) 
      })
      .toArray(function(err, result) {
        res.render('index', {restaurant: result[0]})
      })
  } catch(e) {

  }
  
});
app.post('/restaurant', async (req, res) => {
  let { name, third_category, pic_url, shopping_time_start, shopping_time_end, min_price, shipping_fee, bulletin, address, call_center, lng, lat } = req.body;
  // console.log(name);
  if (!name || !third_category || !pic_url || !address || !call_center) {
    console.log('添加餐馆参数错误');
    res.send({
      status: -1,
      message: '添加餐馆参数错误'
    });
    return;
  }
  let shipping_fee_tip = `配送 ￥${shipping_fee}`
  let min_price_tip = `起送 ￥${min_price}`
  let month_sales = Math.ceil(Math.random() * 200)
  let restaurant_data = {
    name, 
    month_sales,
    month_sales_tip: `月售${month_sales}笔`,
    wm_poi_score: (Math.random() * 5).toFixed(1), 
    delivery_score: (Math.random() * 5).toFixed(1),
    quality_score: (Math.random() * 5).toFixed(1),  
    pack_score: (Math.random() * 5).toFixed(1),      
    food_score: (Math.random() * 5).toFixed(1), 
    delivery_time_tip: '50分钟',
    third_category,
    pic_url,
    shopping_time_start,
    shopping_time_end,
    min_price,
    min_price_tip,
    shipping_fee,
    shipping_fee_tip,
    bulletin,
    address,
    call_center,
    distance: '',
    average_price_tip: '人均20', 
    comment_number: 40,
    lat, 
    lng
  }
  var dbo = dbObj.db("meituan");
  dbo.collection("restaurant").insertOne(restaurant_data, function(err, result) {
    if (err) {
      res.send({
        status: -1,
        message: '添加餐馆失败'
      });
    } else {
      console.log(result.insertedId);
      res.send({
        status: 0,
        id: result.insertedId
      });
    }
  })

});

app.listen(3000);