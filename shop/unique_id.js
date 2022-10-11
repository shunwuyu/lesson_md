/**
 * 功能：获得唯一ID
 * @author ysw
 * @date 11-21
 * @return {string} 
 */
const uniqueID = () => + new Date() + '' + Math.ceil(Math.random()*1000)
 // 类型转换
  // let ranNum =  ;
  // return t + "" + ranNum;

console.log(uniqueID());