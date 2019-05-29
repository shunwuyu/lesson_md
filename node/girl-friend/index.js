const superagent = require("superagent"); //发送网络请求获取DOM
const cheerio = require("cheerio"); //能够像Jquery一样方便获取DOM节点
const nodemailer = require("nodemailer"); //发送邮件的node插件
const moment = require('moment');
const ejs = require("ejs"); //ejs模版引擎
const fs = require("fs"); //文件读写
const path = require("path"); //路径配置

//纪念日
const startDay = "2019-03-03";
const startDayMoment = moment(startDay);

const local = 'jiangxi/qingshanhu-district';
// 爬取数据的url
const OneUrl = "http://wufazhuce.com/";
const WeatherUrl = "https://tianqi.moji.com/weather/china/" + local;

// 获取ONE内容
function getOneData() {
  let p = new Promise(function (resolve, reject) {
    superagent.get(OneUrl).end(function (err, res) {
      if (err) {
        reject(err);
      }
      let $ = cheerio.load(res.text);
      let selectItem = $("#carousel-one .carousel-inner .item");
      let todayOne = selectItem[0];
      let todayOneData = {
        imgUrl: $(todayOne)
          .find(".fp-one-imagen")
          .attr("src"),
        type: $(todayOne)
          .find(".fp-one-imagen-footer")
          .text()
          .replace(/\s/g, ''),
        text: $(todayOne)
          .find(".fp-one-cita")
          .text()
          .replace(/\s/g, '')
      };
      resolve(todayOneData)
    });
  })
  return p
}
// 获取天气提醒
// 冷热适宜，感觉很舒适。
function getWeatherTips() {
  let p = new Promise(function (resolve, reject) {
    superagent.get(WeatherUrl).end(function (err, res) {
      if (err) {
        reject(err);
      }
      let threeDaysData = [];
      let weatherTip = "";
      let $ = cheerio.load(res.text);
      $(".wea_tips").each(function (i, elem) {
        weatherTip = $(elem)
          .find("em")
          .text();
      });
      resolve(weatherTip)
    });
  })
  return p
}
// 获取天气预报
function getWeatherData() {
  let p = new Promise(function (resolve, reject) {
    superagent.get(WeatherUrl).end(function (err, res) {
      if (err) {
        reject(err);
      }
      let threeDaysData = [];
      let $ = cheerio.load(res.text);
      $(".forecast .days").each(function (i, elem) {
        const SingleDay = $(elem).find("li");
        threeDaysData.push({
          Day: $(SingleDay[0])
            .text()
            .replace(/\s/g, ""),
          WeatherImgUrl: $(SingleDay[1])
            .find("img")
            .attr("src"),
          WeatherText: $(SingleDay[1])
            .text()
            .replace(/\s/g, ""),
          Temperature: $(SingleDay[2])
            .text()
            .replace(/\s/g, ""),
          WindDirection: $(SingleDay[3])
            .find("em")
            .text()
            .replace(/\s/g, ""),
          WindLevel: $(SingleDay[3])
            .find("b")
            .text()
            .replace(/\s/g, ""),
          Pollution: $(SingleDay[4])
            .text()
            .replace(/\s/g, ""),
          PollutionLevel: $(SingleDay[4])
            .find("strong")
            .attr("class")
        });
      });
      resolve(threeDaysData)
    });
  });
  return p
}

// 聚合
function getAllDataAndSendMail(){
  let HtmlData = {
    color: {
      "level_1": '#8fc31f',
      "level_2": '#d7af0e',
      "level_3": '#f39800',
      "level_4": '#e2361a',
      "level_5": '#5f52a0',
      "level_6": '#631541'
    }
  };
  // how long with
  const todayMoment = moment();
  let lastDay = todayMoment.diff(startDayMoment, 'day');
  let todaystr = todayMoment.format('YYYY-MM-DD');
  HtmlData["lastDay"] = lastDay;
  HtmlData["todaystr"] = todaystr;

  Promise.all([getOneData(),getWeatherTips(),getWeatherData()]).then(
      function(data){
          HtmlData["todayOneData"] = data[0];
          HtmlData["weatherTip"] = data[1];
          HtmlData["threeDaysData"] = data[2];
          console.log('爬虫数据:', HtmlData);
          sendMail(HtmlData)
      }
  ).catch(function(err){
      getAllDataAndSendMail() //再次获取
      console.log('获取数据失败： ',err);
  })
}
// 发动邮件
function sendMail(HtmlData) {
  const template = ejs.compile(
    fs.readFileSync(path.resolve(__dirname, "email.ejs"), "utf8")
  );
  const html = template(HtmlData);

  let transporter = nodemailer.createTransport({
    service: 'qq',
    port: 465, // SMTP 端口
    secureConnection: true, // 使用了 SSL // true for 465, false for other ports
    auth: {
      user: "1424254461@qq.com", // generated ethereal user
      pass: "xniljpolnrktfefi" // generated ethereal password
    }
  });
  console.log('html', html);
  let mailOptions = {
    from: '"皮卡丘" <1424254461@qq.com>',
    to: "1501995112@qq.com",
    subject: "邮件",
    html: html,
    attachments: [
      {
        filename: 'img1.png',            // 改成你的附件名
        path: 'https://h5tq.moji.com/tianqi/assets/images/weather/w1.png',  // 改成你的附件路径
        cid : '00000001'                 // cid可被邮件使用
    },
    ]
  };
  transporter.sendMail(mailOptions, (error, info={}) => {
    if (error) {
      console.log(error);
      // sendMail(HtmlData); //再次发送
      return false;
    }
    console.log("邮件发送成功", info.messageId);
    console.log("静等下一次发送");
  });
}
getAllDataAndSendMail();