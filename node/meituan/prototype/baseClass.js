import fetch from 'node-fetch'; //npm
import config from '../config' // meituan key

function getIPAdress(){
  var interfaces = require('os').networkInterfaces();
  for(var devName in interfaces){
      var iface = interfaces[devName];
      for(var i=0;i<iface.length;i++){
          var alias = iface[i];
          if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
              return alias.address;
          }
      }
  }
}

export default class BaseClass {
  constructor() {
    this.tencentkey = config.tencentkey;
  }
  async fetch(url = '', data = {}, type = 'GET', resType = 'JSON') {
    type = type.toUpperCase(); //为了安全
    resType = resType.toUpperCase(); //返回类型也大写
    if (type == 'GET') {
      let dataStr = ''; //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&';
      });

      if (dataStr !== '') {
        //求最后一个
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr;
      }
    }

    let requestConfig = {
      method: type,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }
    let responseJson;
    try {
      const response = await fetch(url, requestConfig);
      if (resType === 'TEXT') {
        responseJson = await response.text();
      } else {
        responseJson = await response.json();
      }
    } catch (err) {
      console.log('获取http数据失败', err);
      throw new Error(err)
    }
    
    return responseJson
  }
  async locationSearch(keyword) {
    try {
      let reqData = {
        keyword: encodeURI(keyword),
        key: this.tencentkey,
        policy: 1
      }
      let data = await this.fetch('http://apis.map.qq.com/ws/place/v1/suggestion', reqData, "GET");
      return data;
    } catch(e) {
      console.log('搜索位置出错', err);
    }
  }
  async getLocation(req, res, next) {
    // let ip = getIPAdress();
    // console.log(ip, '++++++++++');
    let ip = '220.175.57.69';
    // const ipArr = ip.split(':');        
    // // console.log(ipArr);
    // ip = ipArr[ipArr.length - 1];
    // if (process.env.NODE_ENV == 'dev') {    //开发环境
    //   ip = '113.105.128.251';
    // }
    // console.log(ip);
    try {
      let result;
      result = await this.fetch('http://apis.map.qq.com/ws/location/v1/ip', {
        ip,
        key: this.tencentkey,
      });
      console.log(result);
      // if (result.status !== 0) {
      //   result = await this.fetch('http://apis.map.qq.com/ws/location/v1/ip', {
      //     ip,
      //     key: this.tencentkey2,
      //   })
      // }

      if (result.status === 0) {
        const cityInfo = {
          lat: result.result.location.lat,    //纬度
          lng: result.result.location.lng,    //经度
          city: result.result.ad_info.city,
        };
        cityInfo.city = cityInfo.city.replace(/市$/, '');
        return cityInfo;
      } else {
        return {lat: 23.02067, lng: 113.75179, city: '东莞市'}
      }
    } catch(e) {
      res.send({
        status: -1,
        message: '定位失败'
      })
    }
  }
  async getDetailPosition(location, res, successFn) {
    try {
      if (location) {
        let cityInfo = await this.fetch('http://apis.map.qq.com/ws/geocoder/v1', {
          location: location.lat + ',' + location.lng,
          key: this.tencentkey
        }, 'GET');
        let address = cityInfo.result.address.replace(/^.{2}省.{2}市/, '');
        successFn({
          address,
          location
        });
      }
    } catch (err) {
      console.log('获取位置失败', err);
      res.send({
        status: -1,
        message: '获取定位失败'
      })
    }

  }
}