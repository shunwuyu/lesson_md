const EasyDate = require('../../app/EasyDate');
const should = require('should');

describe('Date', () => {
  // let date = new EasyDate();
  let date = new EasyDate('+1m');
  describe('#new', () => {
    it('should create instance', () => {
      let some = date.toDate();
      let today = new Date();
      should(some.getFullYear()).equal(today.getFullYear());
      should(some.getMonth()).equal(today.getMonth() + 1);
    });
  });

  describe('#isLeapYear', () => {
    it('是否为闰年', () => {
      should(EasyDate.isLeapYear(2000)).be.True();
      should(EasyDate.isLeapYear(2100)).be.False();
    })
  })

  // 作为作业
  describe('#getMonth', () => {
    it('输出月份，个位数前面自动补0', () => {
      should(EasyDate.toDouble(11)).equal('11');
      should(EasyDate.toDouble(9)).equal('09');
    });
  });

});