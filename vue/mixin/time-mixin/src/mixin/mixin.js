import moment from 'moment'
const mixin = {
  methods: {
   /**
    * 格式化时间
    * @param {string|number|object|Array} dateTime - 时间，可以是一个字符串、时间戳、表示时间的对象、Date对象或者******表示时间的数组
    * @param {string} [fmt] - 格式
    * @returns {string} 返回格式化后的日期时间，默认格式：2018年1月11日 15:00
    * @see [momentjs]{@tutorial http://momentjs.cn/}
    */
   formatDate (dateTime, fmt = 'YYYY年M月DD日 HH:mm:ss') {
    if (!dateTime) {
     return ''
    }
    moment.locale('zh-CN')
    dateTime = moment(dateTime).format(fmt)
    return dateTime
   }
  }
}

 export default  mixin;