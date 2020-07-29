const METHODS = {
  m: 'Month',
  d: 'Date'
};

const defaultFormat = 'yyyy-mm-dd';

class EasyDate {
  constructor(offset, options = {}) {
    this.base = new Date();
    this.base.setHours(0);
    this.base.setMinutes(0);
    this.base.setSeconds(0);
    this.add(offset);
  }

  add(offset) {
    offset = EasyDate.parse(offset);
    if (!offset) {
      return;
    }
    for (let key in offset) {
      if (offset.hasOwnProperty(key)) {
        let method = METHODS[key];
        this.base['set' + method](this.base['get' + method]() + offset[key]);
      }
    }
  }

  static parse(offset) {
    if (!offset) {
      return null;
    }

    offset = offset.toLowerCase();
    let result = {};
    offset.replace(/([+-]?\d+)([ymd])/g, (match, number, unit) => {

      result[unit] = Number(number);
    });
    // console.log(result);
    return result;
  }


  static isLeapYear(year) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    }

    return year % 4 === 0;
  }

  static toDouble(number) {
    return number > 9 ? number.toString() : ('0' + number);
  }

  

  toDate() {
    return this.base;
  }
  
}

module.exports = EasyDate;